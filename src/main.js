import './style.css';
import { PRODUCTS, INDIAMART_STORE_URL } from './product-data.js';

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add('up');
      }
    });
  },
  { threshold: 0.1 },
);

document.querySelectorAll('.reveal').forEach((el, i) => {
  el.style.transitionDelay = `${(i % 4) * 0.08}s`;
  observer.observe(el);
});

const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach((s) => {
    if (window.scrollY >= s.offsetTop - 100) {
      current = s.id;
    }
  });
  navLinks.forEach((a) => {
    a.style.color = a.getAttribute('href') === `#${current}` ? 'var(--gold)' : '';
  });
});

/* ── Product detail modal ── */
const modal = document.getElementById('product-modal');
const dialogEl = modal?.querySelector('.product-modal-dialog');
const pdpMain = document.getElementById('pdp-main');
const pdpThumbs = document.getElementById('pdp-thumbs');

function escapeHtml(str) {
  const d = document.createElement('div');
  d.textContent = str;
  return d.innerHTML;
}

function setThumbActive(index) {
  pdpThumbs.querySelectorAll('.pdp-thumb').forEach((btn, i) => {
    btn.classList.toggle('is-active', i === index);
  });
}

function openProductModal(id) {
  const p = PRODUCTS[id];
  if (!p || !modal || !pdpMain || !pdpThumbs) return;

  pdpMain.src = p.images[0];
  pdpMain.alt = p.title;

  pdpThumbs.replaceChildren();
  p.images.forEach((src, i) => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = `pdp-thumb${i === 0 ? ' is-active' : ''}`;
    btn.setAttribute('aria-label', `View image ${i + 1}`);
    const img = document.createElement('img');
    img.src = src;
    img.alt = '';
    img.loading = 'lazy';
    img.referrerPolicy = 'no-referrer';
    btn.appendChild(img);
    btn.addEventListener('click', () => {
      pdpMain.src = src;
      setThumbActive(i);
    });
    pdpThumbs.appendChild(btn);
  });

  document.getElementById('pdp-cat').textContent = p.category;
  document.getElementById('pdp-title').textContent = p.title;
  document.getElementById('pdp-price').textContent = p.priceNote;
  document.getElementById('pdp-moq').textContent = p.moq;

  const tbody = document.getElementById('pdp-specs');
  tbody.innerHTML = p.specs
    .map((s) => `<tr><td>${escapeHtml(s.k)}</td><td>${escapeHtml(s.v)}</td></tr>`)
    .join('');

  document.getElementById('pdp-desc').textContent = p.description;

  const apps = document.getElementById('pdp-apps');
  apps.innerHTML = p.applications.map((a) => `<li>${escapeHtml(a)}</li>`).join('');

  document.getElementById('pdp-delivery').textContent = p.delivery;
  document.getElementById('pdp-packaging').textContent = p.packaging;

  const im = document.getElementById('pdp-indiamart');
  if (im) im.href = INDIAMART_STORE_URL;

  modal.hidden = false;
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
  dialogEl?.focus();
}

function closeProductModal() {
  if (!modal) return;
  modal.hidden = true;
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

const grid = document.getElementById('products-grid');
if (grid) {
  grid.addEventListener('click', (e) => {
    if (e.target.closest('.product-cta')) return;
    const card = e.target.closest('.product-card[data-product-id]');
    if (!card) return;
    const id = card.getAttribute('data-product-id');
    if (id && PRODUCTS[id]) {
      e.preventDefault();
      openProductModal(id);
    }
  });
}

if (modal) {
  modal.addEventListener('click', (e) => {
    if (e.target.closest('[data-close-modal]')) {
      closeProductModal();
    }
  });
}

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && modal && !modal.hidden) {
    closeProductModal();
  }
});
