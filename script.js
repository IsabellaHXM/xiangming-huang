// ================================================================
// 交互脚本
// ================================================================

// ---------- Agent 配置：部署 Worker 后填入 URL ----------
const AGENT_ENDPOINT = ''; // e.g. 'https://xm-agent.your-subdomain.workers.dev'

// ---------- Form: Formspree endpoint ----------
const FORMSPREE_ENDPOINT = ''; // 例: 'https://formspree.io/f/xxxxxxxx'
const OWNER_EMAIL = 'xiangming.huang@outlook.com';

// ================================================================
// Boot
// ================================================================
document.addEventListener('DOMContentLoaded', () => {
  applyLang(getLang());
  document.documentElement.classList.remove('lang-init');
  applyLens(getLens(), false);
  bindTopbar();
  bindHeroKineticType();
  bindLensSwitcher();
  bindFolds();
  bindLangSwitcher();
  bindAgent();
  bindRequestModal();
  bindReveal();
  bindLondonClock();
});

// ================================================================
// Topbar
// ================================================================
function bindTopbar(){
  const tb = document.querySelector('.topbar');
  window.addEventListener('scroll', () => {
    tb.classList.toggle('scrolled', window.scrollY > 20);
  }, { passive:true });
}

// ================================================================
// Kinetic type — hero title word-by-word
// ================================================================
function bindHeroKineticType(){
  const el = document.getElementById('heroTitle');
  if (!el) return;

  const render = () => {
    const text = el.textContent.trim();
    // split by CJK char or space-word
    const isCJK = /[一-鿿]/.test(text);
    let units;
    if (isCJK){
      units = text.split('').map(c => `<span class="word">${c}</span>`);
    } else {
      units = text.split(/(\s+)/).map(part => {
        if (/^\s+$/.test(part)) return part;
        return `<span class="word">${part}</span>`;
      });
    }
    el.innerHTML = units.join('');
    // stagger animation
    const words = el.querySelectorAll('.word');
    const total = words.length;
    const totalDur = 900; // ms budget
    const stepMax = Math.min(60, totalDur / Math.max(total,1));
    words.forEach((w, i) => {
      w.style.animationDelay = (i * stepMax) + 'ms';
    });
    // force reflow then trigger
    requestAnimationFrame(() => el.classList.add('animated'));
  };

  render();
  document.addEventListener('langchange', () => {
    el.classList.remove('animated');
    // small tick to re-read the updated text
    setTimeout(render, 20);
  });
}

// ================================================================
// Lens switcher
// ================================================================
const LENS_KEY = 'xm-lens';

function applyLens(lens, animate = true){
  const lensBtns = document.querySelectorAll('.lens-opt');
  lensBtns.forEach(b => b.classList.toggle('active', b.dataset.lens === lens));

  // Reorder cases: lens-matching first
  const container = document.getElementById('work');
  if (container){
    const cases = Array.from(container.querySelectorAll('.case'));
    if (animate){
      cases.forEach(c => { c.style.transition = 'opacity .35s ease'; c.style.opacity = '0'; });
    }
    setTimeout(() => {
      const scored = cases.map(c => {
        const lenses = (c.dataset.lenses || '').split(/\s+/);
        const primary = lenses[0] === lens ? 3 : (lenses.includes(lens) ? 2 : 1);
        return { el: c, score: lens === 'all' ? 0 : primary };
      });
      // stable sort
      const idxByEl = new Map(cases.map((c,i)=>[c,i]));
      scored.sort((a,b) => b.score - a.score || idxByEl.get(a.el) - idxByEl.get(b.el));
      scored.forEach(({el}) => container.appendChild(el));
      // dim non-matching cases when specific lens selected
      cases.forEach(c => {
        const lenses = (c.dataset.lenses || '').split(/\s+/);
        c.classList.toggle('dim', lens !== 'all' && !lenses.includes(lens));
      });
      if (animate){
        cases.forEach(c => c.style.opacity = '');
      }
    }, animate ? 200 : 0);
  }

  // Swap lens-specific text on marked elements
  applyLensText(lens);

  // About lede (p1) — lens variant if present
  const aboutP1 = document.getElementById('aboutP1');
  if (aboutP1){
    const lang = getLang();
    const dict = I18N[lang];
    const key = lens === 'all' ? 'about.p1' : ('about.p1.' + lens);
    const value = dict[key] || dict['about.p1'];
    aboutP1.innerHTML = value;
  }

  window.__lens = lens;
  writeQuery(getLang(), lens);
  localStorage.setItem(LENS_KEY, lens);
}

function applyLensText(lens){
  const lang = getLang();
  const dict = I18N[lang];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    // only re-apply lens on elements that have a lens variant
    const base = el.getAttribute('data-i18n');
    if (!base) return;
    const lensAttr = el.getAttribute('data-lens-' + lens);
    if (lensAttr && dict[lensAttr]){
      el.textContent = dict[lensAttr];
      el.classList.add('lens-highlight');
    } else if (dict[base]){
      el.textContent = dict[base];
      el.classList.remove('lens-highlight');
    }
  });
}

function bindLensSwitcher(){
  document.querySelectorAll('.lens-opt').forEach(btn => {
    btn.addEventListener('click', () => {
      const lens = btn.dataset.lens;
      applyLens(lens, true);
    });
  });

  // On lang change, re-apply lens so text uses new dict
  document.addEventListener('langchange', () => applyLens(getLens(), false));
}

// ================================================================
// Language switcher
// ================================================================
function bindLangSwitcher(){
  const btn = document.getElementById('langBtn');
  if (!btn) return;
  btn.addEventListener('click', e => {
    const opt = e.target.closest('.lang-opt');
    const lang = opt ? opt.dataset.lang : (getLang() === 'zh' ? 'en' : 'zh');
    applyLang(lang);
  });
}

// ================================================================
// Folded cases
// ================================================================
function bindFolds(){
  document.querySelectorAll('.fold-head').forEach(head => {
    head.addEventListener('click', () => {
      const fold = head.closest('.fold');
      const open = fold.classList.toggle('open');
      head.setAttribute('aria-expanded', String(open));
      const toggle = head.querySelector('.fold-toggle');
      if (toggle) toggle.textContent = open ? '−' : '+';
    });
  });
}

function bindLondonClock(){
  const el = document.getElementById('londonClock');
  if (!el) return;
  const tick = () => {
    try {
      const now = new Date();
      const s = now.toLocaleTimeString('en-GB', {
        timeZone: 'Europe/London',
        hour: '2-digit', minute: '2-digit', hour12: false
      });
      el.textContent = s + ' GMT';
    } catch (e){
      el.textContent = '— GMT';
    }
  };
  tick();
  setInterval(tick, 30_000);
}

// ================================================================
// Reveal on scroll
// ================================================================
function bindReveal(){
  const targets = document.querySelectorAll(
    '.chap-head, .about > *, .ink-quote, .case, .research-question, .research-meta-grid > div, .framework, .proj-card, .agent, .tool-row, .req-card'
  );
  targets.forEach(el => el.classList.add('reveal'));
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting){
        e.target.classList.add('in');
        io.unobserve(e.target);
      }
    });
  }, { threshold: .12, rootMargin: '0px 0px -60px 0px' });
  targets.forEach(el => io.observe(el));
}

// ================================================================
// Agent
// ================================================================
function bindAgent(){
  const win = document.getElementById('agentWindow');
  const form = document.getElementById('agentForm');
  const input = document.getElementById('agentText');
  const suggests = document.getElementById('agentSuggests');

  function addMessage(role, text){
    const div = document.createElement('div');
    div.className = 'agent-msg agent-msg-' + role;
    div.textContent = text;
    win.appendChild(div);
    win.scrollTop = win.scrollHeight;
    return div;
  }

  function typewrite(el, text, done){
    let i = 0;
    el.textContent = '';
    const cursor = document.createElement('span');
    cursor.className = 'cursor';
    el.appendChild(cursor);
    const timer = setInterval(() => {
      i++;
      if (i > text.length){
        clearInterval(timer);
        cursor.remove();
        if (done) done();
        return;
      }
      cursor.remove();
      el.textContent = text.slice(0, i);
      el.appendChild(cursor);
      win.scrollTop = win.scrollHeight;
    }, 18);
  }

  async function ask(question){
    addMessage('user', question);
    input.value = '';
    const botDiv = document.createElement('div');
    botDiv.className = 'agent-msg agent-msg-bot';
    botDiv.textContent = '…';
    win.appendChild(botDiv);
    win.scrollTop = win.scrollHeight;

    // Detect language of the question for reply language
    const isCJK = /[一-鿿]/.test(question);
    const replyLang = isCJK ? 'zh' : 'en';

    if (!AGENT_ENDPOINT){
      // Backend not configured — friendly fallback
      const msg = I18N[replyLang]['agent.notconfigured'];
      typewrite(botDiv, msg);
      return;
    }

    try {
      const res = await fetch(AGENT_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question, lang: replyLang })
      });
      if (!res.ok) throw new Error('bad status');

      // Stream if the Worker supports it
      const contentType = res.headers.get('content-type') || '';
      if (contentType.includes('text/event-stream') || contentType.includes('text/plain')){
        botDiv.textContent = '';
        const cursor = document.createElement('span');
        cursor.className = 'cursor';
        botDiv.appendChild(cursor);
        const reader = res.body.getReader();
        const decoder = new TextDecoder();
        let acc = '';
        while (true){
          const { done, value } = await reader.read();
          if (done) break;
          const chunk = decoder.decode(value, { stream:true });
          // support both SSE ("data: ...") and raw text
          const lines = chunk.split(/\n/);
          for (const line of lines){
            let piece = line;
            if (line.startsWith('data: ')) piece = line.slice(6);
            if (!piece) continue;
            acc += piece;
            cursor.remove();
            botDiv.textContent = acc;
            botDiv.appendChild(cursor);
            win.scrollTop = win.scrollHeight;
          }
        }
        cursor.remove();
        botDiv.textContent = acc;
      } else {
        const data = await res.json();
        typewrite(botDiv, data.reply || I18N[replyLang]['agent.error']);
      }
    } catch (err){
      typewrite(botDiv, I18N[replyLang]['agent.error']);
    }
  }

  form.addEventListener('submit', e => {
    e.preventDefault();
    const q = input.value.trim();
    if (!q) return;
    ask(q);
  });

  suggests.querySelectorAll('.sug').forEach(btn => {
    btn.addEventListener('click', () => ask(btn.textContent.trim()));
  });
}

// ================================================================
// Request materials modal
// ================================================================
function bindRequestModal(){
  const modal = document.getElementById('applyModal');
  const modalMaterial = document.getElementById('modalMaterial');
  const stepTwoTitle = document.getElementById('stepTwoTitle');
  const form = document.getElementById('applyForm');
  const submitBtn = form.querySelector('.submit-btn');
  const steps = modal.querySelectorAll('.modal-step');

  let material = null, identity = null;

  const t = k => (I18N[getLang()] && I18N[getLang()][k]) || k;

  function showStep(n){
    steps.forEach(s => s.hidden = parseInt(s.dataset.step) !== n);
  }

  function open(mat){
    material = mat; identity = null;
    modalMaterial.textContent = t('modal.material.' + mat);
    form.reset();
    form.querySelectorAll('.field[data-field]').forEach(f => f.classList.remove('show'));
    showStep(1);
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function close(){
    modal.classList.remove('open');
    document.body.style.overflow = '';
  }

  document.querySelectorAll('.req-card').forEach(card => {
    card.addEventListener('click', () => open(card.dataset.material));
  });
  modal.querySelectorAll('[data-close]').forEach(el => el.addEventListener('click', close));
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && modal.classList.contains('open')) close(); });

  modal.querySelectorAll('.identity-card').forEach(card => {
    card.addEventListener('click', () => {
      identity = card.dataset.identity;
      stepTwoTitle.textContent = t('modal.s2.title.' + identity);
      form.querySelectorAll('.field[data-field]').forEach(f => {
        f.classList.toggle('show', f.dataset.field === identity);
        const inp = f.querySelector('input');
        if (inp) inp.required = f.dataset.field === identity;
      });
      showStep(2);
    });
  });

  modal.querySelector('[data-back]')?.addEventListener('click', e => {
    e.preventDefault(); showStep(1);
  });

  form.addEventListener('submit', async e => {
    e.preventDefault();
    const fd = new FormData(form);
    const lang = getLang();
    const payload = {
      _subject: `[Material Request] ${t('form.identity.' + identity)} · ${t('form.material.' + material)}`,
      material: t('form.material.' + material),
      material_key: material,
      identity: t('form.identity.' + identity),
      identity_key: identity,
      company: fd.get('company') || '—',
      name: fd.get('name') || '—',
      email: fd.get('email'),
      role: fd.get('role') || '—',
      purpose: fd.get('purpose'),
      lang,
      lens: getLens(),
      submitted_at: new Date().toISOString(),
    };

    submitBtn.disabled = true;
    const span = submitBtn.querySelector('span');
    const orig = span.textContent;
    span.textContent = t('form.sending');

    try {
      if (FORMSPREE_ENDPOINT){
        const res = await fetch(FORMSPREE_ENDPOINT, {
          method: 'POST',
          headers: { 'Content-Type':'application/json', Accept:'application/json' },
          body: JSON.stringify(payload)
        });
        if (!res.ok) throw new Error('bad status');
      } else {
        // mailto fallback
        const subject = encodeURIComponent(payload._subject);
        const body = encodeURIComponent(
          Object.entries(payload).filter(([k])=>!k.startsWith('_'))
            .map(([k,v]) => `${k}: ${v}`).join('\n')
        );
        window.location.href = `mailto:${OWNER_EMAIL}?subject=${subject}&body=${body}`;
      }
      showStep(3);
    } catch(err){
      alert('Submit failed. Please email ' + OWNER_EMAIL);
    } finally {
      submitBtn.disabled = false;
      span.textContent = orig;
    }
  });

  // Keep dynamic modal labels bilingual
  document.addEventListener('langchange', () => {
    if (material) modalMaterial.textContent = t('modal.material.' + material);
    if (identity) stepTwoTitle.textContent = t('modal.s2.title.' + identity);
  });
}
