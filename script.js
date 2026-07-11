// ================================================================
// 黄香铭个人网站 · 交互脚本
// ================================================================

// ---------- 配置：把两个值替换为你自己的 EmailJS key 即可 ----------
// 注册：https://www.emailjs.com （免费额度 200 封/月）
const EMAILJS_CONFIG = {
  publicKey: 'YOUR_PUBLIC_KEY',
  serviceId: 'YOUR_SERVICE_ID',
  templateId: 'YOUR_TEMPLATE_ID',
};
const OWNER_EMAIL = 'xiangming.huang@outlook.com';

// ---------- 加载 EmailJS SDK（可选，未配置时用 mailto 兜底） ----------
(function loadEmailJS(){
  if (EMAILJS_CONFIG.publicKey === 'YOUR_PUBLIC_KEY') return;
  const s = document.createElement('script');
  s.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js';
  s.onload = () => window.emailjs.init({ publicKey: EMAILJS_CONFIG.publicKey });
  document.head.appendChild(s);
})();

// ================================================================
// 导航
// ================================================================
const nav = document.querySelector('.nav');
const navToggle = document.querySelector('.nav-toggle');
navToggle?.addEventListener('click', () => nav.classList.toggle('open'));

window.addEventListener('scroll', () => {
  const y = window.scrollY;
  if (y > 20) nav.style.borderBottomColor = 'rgba(255,255,255,.12)';
  else nav.style.borderBottomColor = '';
});

document.querySelectorAll('.nav-links a').forEach(a => {
  a.addEventListener('click', () => nav.classList.remove('open'));
});

// ================================================================
// 实习经历展开
// ================================================================
document.querySelectorAll('.exp').forEach(exp => {
  const head = exp.querySelector('.exp-head');
  head.addEventListener('click', () => exp.classList.toggle('open'));
});

// ================================================================
// 滚动出现动画
// ================================================================
const revealTargets = document.querySelectorAll(
  '.section-head, .about-text, .about-stats, .track-chips, .edu-card, .exp, .research-card, .project-visual, .project-info, .skill-block, .apply-card'
);
revealTargets.forEach(el => el.classList.add('reveal'));

const io = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting){
      e.target.classList.add('in');
      io.unobserve(e.target);
    }
  });
}, { threshold: .12, rootMargin: '0px 0px -60px 0px' });
revealTargets.forEach(el => io.observe(el));

// ================================================================
// 申请弹窗
// ================================================================
const modal = document.getElementById('applyModal');
const modalMaterial = document.getElementById('modalMaterial');
const stepTwoTitle = document.getElementById('stepTwoTitle');
const applyForm = document.getElementById('applyForm');
const submitBtn = applyForm.querySelector('.submit-btn');
const successMaterial = document.getElementById('successMaterial');
const successEmail = document.getElementById('successEmail');
const steps = modal.querySelectorAll('.modal-step');

let currentMaterial = null;   // 'portfolio' | 'cv'
let currentIdentity = null;   // 'company' | 'personal'

function t(key){
  const lang = (window.getLang && window.getLang()) || 'en';
  return (window.I18N && window.I18N[lang] && window.I18N[lang][key]) || key;
}

function showStep(n){
  steps.forEach(s => s.hidden = (parseInt(s.dataset.step) !== n));
}

function openModal(material){
  currentMaterial = material;
  currentIdentity = null;
  modalMaterial.textContent = t('modal.material.' + material);
  applyForm.reset();
  applyForm.querySelectorAll('.field[data-field]').forEach(f => f.classList.remove('show'));
  showStep(1);
  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal(){
  modal.classList.remove('open');
  document.body.style.overflow = '';
}

document.querySelectorAll('.apply-card').forEach(card => {
  card.addEventListener('click', () => openModal(card.dataset.material));
});

modal.querySelectorAll('[data-close]').forEach(el => el.addEventListener('click', closeModal));
document.addEventListener('keydown', e => { if (e.key === 'Escape' && modal.classList.contains('open')) closeModal(); });

modal.querySelectorAll('.identity-card').forEach(card => {
  card.addEventListener('click', () => {
    currentIdentity = card.dataset.identity;
    stepTwoTitle.textContent = t('modal.step2.title.' + currentIdentity);
    applyForm.querySelectorAll('.field[data-field]').forEach(f => {
      f.classList.toggle('show', f.dataset.field === currentIdentity);
      const input = f.querySelector('input');
      if (input) input.required = (f.dataset.field === currentIdentity);
    });
    showStep(2);
  });
});

modal.querySelector('[data-back]')?.addEventListener('click', e => {
  e.preventDefault();
  showStep(1);
});

applyForm.addEventListener('submit', async e => {
  e.preventDefault();
  const formData = new FormData(applyForm);
  const lang = (window.getLang && window.getLang()) || 'en';
  const payload = {
    material: t('form.material.' + currentMaterial),
    material_key: currentMaterial,
    identity: t('form.identity.' + currentIdentity),
    identity_key: currentIdentity,
    company: formData.get('company') || '—',
    name: formData.get('name') || '—',
    email: formData.get('email'),
    role: formData.get('role') || '—',
    purpose: formData.get('purpose'),
    submitted_at: new Date().toLocaleString(lang === 'zh' ? 'zh-CN' : 'en-GB', { timeZone: 'Asia/Shanghai' }),
    lang,
    to_email: OWNER_EMAIL,
  };

  submitBtn.disabled = true;
  const btnText = submitBtn.querySelector('span');
  const originalText = btnText.textContent;
  btnText.textContent = t('form.sending');

  try {
    if (EMAILJS_CONFIG.publicKey !== 'YOUR_PUBLIC_KEY' && window.emailjs){
      await window.emailjs.send(EMAILJS_CONFIG.serviceId, EMAILJS_CONFIG.templateId, payload);
    } else {
      const subject = encodeURIComponent(`[Material Request] ${payload.identity} · ${payload.material}`);
      const body = encodeURIComponent(
`Hi Xiangming,

New material request:

Material : ${payload.material}
Identity : ${payload.identity}
Company  : ${payload.company}
Name     : ${payload.name}
Email    : ${payload.email}
Role     : ${payload.role}
Purpose  : ${payload.purpose}

Submitted: ${payload.submitted_at}
Language : ${payload.lang}

Please review and send the material.`);
      window.location.href = `mailto:${OWNER_EMAIL}?subject=${subject}&body=${body}`;
    }

    successMaterial.textContent = t('form.material.' + currentMaterial);
    successEmail.textContent = payload.email;
    showStep(3);
  } catch (err){
    console.error(err);
    alert(t('form.error') !== 'form.error' ? t('form.error') : 'Submit failed. Please email ' + OWNER_EMAIL);
  } finally {
    submitBtn.disabled = false;
    btnText.textContent = originalText;
  }
});

// 语言切换时，如果弹窗打开，需要同步动态文本
document.addEventListener('langchange', () => {
  if (modal.classList.contains('open')){
    if (currentMaterial) modalMaterial.textContent = t('modal.material.' + currentMaterial);
    if (currentIdentity) stepTwoTitle.textContent = t('modal.step2.title.' + currentIdentity);
  }
});
