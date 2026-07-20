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
  bindProgress();
  bindScrollspy();
  bindSealTop();
  bindTilt();
  bindCoffee();
  bindCountUp();
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
    // split by CJK char or space-word; '\n' in the dict forces a line break
    const isCJK = /[一-鿿]/.test(text);
    const lines = text.split(/\n+/).map(s => s.trim()).filter(Boolean);
    el.innerHTML = lines.map(line => {
      if (isCJK){
        return line.split('').map(c => `<span class="word">${c}</span>`).join('');
      }
      return line.split(/(\s+)/).map(part => {
        if (/^\s+$/.test(part)) return part;
        return `<span class="word">${part}</span>`;
      }).join('');
    }).join('<br>');
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
// Coffee chat — weekly slots for AI founders & builders
// ================================================================
const COFFEE_BOOKING_URL = 'https://outlook.office.com/bookwithme/user/48a92db9fb964677abd76070224f5769@jbs.cam.ac.uk/meetingtype/7k4tdh4SaUGaf3auYefn1Q2?anonymous&ismsaljsauthenabled&ep=mcard'; // Microsoft 'Bookings with me' — leave empty for email fallback
const COFFEE_EMBED = true;     // when a URL is set, also embed the calendar inline below the section

function bindCoffee(){
  const btn = document.getElementById('coffeeBook');
  if (!btn) return;

  // If a real booking page is configured, link to it — and embed it inline.
  if (COFFEE_BOOKING_URL){
    btn.href = COFFEE_BOOKING_URL;
    btn.target = '_blank';
    btn.rel = 'noopener';
    const note = document.querySelector('.coffee-note');
    if (note) note.hidden = true;
    if (COFFEE_EMBED){
      const wrap = document.getElementById('coffeeEmbed');
      if (wrap){
        const frame = document.createElement('iframe');
        frame.src = COFFEE_BOOKING_URL;
        frame.loading = 'lazy';
        frame.title = 'Coffee chat booking calendar';
        wrap.appendChild(frame);
        wrap.hidden = false;
      }
    }
    return;
  }

  const panel = document.getElementById('coffeePanel');
  const copyBtn = document.getElementById('coffeeCopy');
  const mailto = document.getElementById('coffeeMailto');
  const t = k => (I18N[getLang()] && I18N[getLang()][k]) || k;

  const mailtoHref = () => {
    const lang = getLang();
    const subject = encodeURIComponent(lang === 'zh' ? 'Coffee Chat 预约' : 'Coffee chat request');
    const body = encodeURIComponent(lang === 'zh'
      ? '你好 Isabella：\n\n我想预约一次 coffee chat。\n\n关于我：\n想聊的话题：\n方式（线上 / 剑桥 / 伦敦）：\n方便的时间（给 2–3 个选项）：\n'
      : "Hi Isabella,\n\nI'd love to book a coffee chat.\n\nA bit about me:\nWhat I'd like to talk about:\nFormat (online / Cambridge / London):\nA few times that work for me:\n");
    return `mailto:${OWNER_EMAIL}?subject=${subject}&body=${body}`;
  };

  // CTA toggles the panel — works regardless of whether a mail client is set up
  btn.addEventListener('click', e => {
    e.preventDefault();
    panel.hidden = !panel.hidden;
    if (!panel.hidden) mailto.href = mailtoHref();
  });

  // Copy the address (with a fallback for older browsers)
  copyBtn.addEventListener('click', () => {
    const done = () => {
      copyBtn.textContent = t('coffee.copied');
      setTimeout(() => { copyBtn.textContent = t('coffee.copy'); }, 1600);
    };
    if (navigator.clipboard && navigator.clipboard.writeText){
      navigator.clipboard.writeText(OWNER_EMAIL).then(done).catch(done);
    } else {
      const ta = document.createElement('textarea');
      ta.value = OWNER_EMAIL;
      document.body.appendChild(ta);
      ta.select();
      try { document.execCommand('copy'); } catch(e){}
      ta.remove();
      done();
    }
  });

  document.addEventListener('langchange', () => {
    if (!panel.hidden) mailto.href = mailtoHref();
  });
}

// ================================================================
// Count-up animation for the data-scale strips
// ================================================================
function bindCountUp(){
  const els = document.querySelectorAll('.case-stats');
  if (!els.length || !('IntersectionObserver' in window)) return;

  const animate = el => {
    if (el.dataset.counted) return;
    el.dataset.counted = '1';
    el.innerHTML = el.textContent.replace(/\d[\d,]*/g,
      m => `<span class="cs-num" data-t="${m.replace(/,/g, '')}">${m}</span>`);
    el.querySelectorAll('.cs-num').forEach(span => {
      const target = parseInt(span.dataset.t, 10);
      if (!isFinite(target)) return;
      const dur = 1100;
      const t0 = performance.now();
      const step = now => {
        const p = Math.min((now - t0) / dur, 1);
        const eased = 1 - Math.pow(1 - p, 3); // ease-out cubic
        span.textContent = Math.round(target * eased).toLocaleString('en-US');
        if (p < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    });
  };

  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting){ animate(e.target); io.unobserve(e.target); }
    });
  }, { threshold: .4 });
  els.forEach(el => io.observe(el));
}

// ================================================================
// Back-to-top seal (appears after scrolling past the hero)
// ================================================================
function bindSealTop(){
  const seal = document.createElement('button');
  seal.className = 'seal-top';
  seal.textContent = '↑';
  seal.setAttribute('aria-label', 'Back to top');
  document.body.appendChild(seal);
  seal.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  let ticking = false;
  const update = () => {
    seal.classList.toggle('show', window.scrollY > window.innerHeight * 1.1);
    ticking = false;
  };
  window.addEventListener('scroll', () => {
    if (!ticking){ requestAnimationFrame(update); ticking = true; }
  }, { passive: true });
  update();
}

// ================================================================
// Subtle 3D tilt on cards
// ================================================================
function bindTilt(){
  if (window.matchMedia('(hover: none)').matches) return; // skip touch devices
  document.querySelectorAll('.proj-card, .req-card').forEach(card => {
    card.addEventListener('mousemove', e => {
      const r = card.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - .5;
      const y = (e.clientY - r.top) / r.height - .5;
      card.style.transform = `perspective(900px) rotateX(${(-y * 2.4).toFixed(2)}deg) rotateY(${(x * 2.4).toFixed(2)}deg) translateY(-2px)`;
    });
    card.addEventListener('mouseleave', () => { card.style.transform = ''; });
  });
}

// ================================================================
// Reading progress bar
// ================================================================
function bindProgress(){
  const bar = document.createElement('div');
  bar.className = 'progress';
  document.body.appendChild(bar);
  let ticking = false;
  const update = () => {
    const h = document.documentElement;
    const max = h.scrollHeight - h.clientHeight;
    bar.style.width = (max > 0 ? (h.scrollTop / max) * 100 : 0) + '%';
    ticking = false;
  };
  window.addEventListener('scroll', () => {
    if (!ticking){ requestAnimationFrame(update); ticking = true; }
  }, { passive:true });
  update();
}

// ================================================================
// Scrollspy — topnav highlights current section
// ================================================================
function bindScrollspy(){
  const links = Array.from(document.querySelectorAll('.topnav a[href^="#"]'));
  if (!links.length) return;
  const map = new Map();
  links.forEach(a => {
    const sec = document.querySelector(a.getAttribute('href'));
    if (sec) map.set(sec, a);
  });
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting){
        links.forEach(a => a.classList.remove('active'));
        const a = map.get(e.target);
        if (a) a.classList.add('active');
      }
    });
  }, { rootMargin: '-25% 0px -65% 0px' });
  map.forEach((_, sec) => io.observe(sec));
}

// ================================================================
// Reveal on scroll
// ================================================================
function bindReveal(){
  const targets = document.querySelectorAll(
    '.chap-head, .about > *, .ink-quote, .case, .research-question, .research-meta-grid > div, .vwall, .rs-item, .framework, .proj-card, .agent, .tool-row, .req-card, .coffee'
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
