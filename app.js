/* ===================================
   SOTTO SUSHI - Main Application JS
   Optimized & Enhanced Version
   =================================== */

'use strict';

// ===== DATA =====
const MENU_DATA = {
  rolls: [
    { id: 'r1', name: 'Ebi Crunch', price: 11, qty: 8, unit: 'ədəd', tagline: 'Sərhədsiz Ləzzət', image: 'ebicrunch.jpg', ingredients: ['Krevet', 'Krem Pendir', 'Xiyar', 'Düyü', 'Nori', 'Küncüt'], contents: null, gift: null, badge: null },
    { id: 'r2', name: 'Hot Crab', price: 9, qty: 8, unit: 'ədəd', tagline: 'İsti Krabın İmza Dadı', image: 'hotcrap.jpg', ingredients: ['Krab', 'Krem Pendir', 'Düyü', 'Nori', 'Panko'], contents: null, gift: null, badge: null },
    { id: 'r3', name: 'Hot Prawn', price: 11, qty: 8, unit: 'ədəd', tagline: 'Hər Loxmada Alovlanan Krevet', image: 'hotpravn.jpg', ingredients: ['Krevet', 'Krem Pendir', 'Düyü', 'Nori', 'Panko'], contents: null, gift: null, badge: null },
    { id: 'r4', name: 'Kalifornia Roll', price: 9, qty: 8, unit: 'ədəd', tagline: 'Klassikləşmiş Ləzzətin Ünvanı', image: 'kaliforniya.jpg', ingredients: ['Krab', 'Krem Pendir', 'Kürü', 'Düyü', 'Xiyar', 'Nori'], contents: null, gift: null, badge: null },
    { id: 'r5', name: 'Alyaska', price: 9, qty: 8, unit: 'ədəd', tagline: 'Sərin Dad Balansı', image: 'alyaska.jpg', ingredients: ['Qızıl Balıq', 'Krem Pendir', 'Düyü', 'Xiyar', 'Nori', 'Küncüt'], contents: null, gift: null, badge: null },
    { id: 'r6', name: 'Fresh Roll', price: 9, qty: 8, unit: 'ədəd', tagline: 'Fresh Roll Fresh Həyat — Əvəzsiz Ahəng', image: 'fresh.jpg', ingredients: ['Qar Krabı', 'Şüyüd', 'Krem Pendir', 'Düyü', 'Xiyar', 'Nori', 'Kimchi Sousu'], contents: null, gift: null, badge: null }
  ],
  'mini-sets': [
    { id: 'ms1', name: 'Mini Mix 2', price: 22.90, qty: 36, unit: 'ədəd roll', tagline: '36 Ədəd Roll', image: 'minimix3.jpg', ingredients: [], contents: ['Kalifornia (8 ədəd)', 'Cips roll (8 ədəd)', 'Hot kani (10 ədəd)', 'Baked kappa maki (10 ədəd)'], gift: '1 LT CocaCola + Coleslaw Salat', badge: 'Pulsuz Çatdırılma' },
    { id: 'ms2', name: 'Mini Mix 3', price: 24.90, qty: 36, unit: 'ədəd roll', tagline: '36 Ədəd Roll', image: 'minimix2.jpg', ingredients: [], contents: ['Filadelfia (8 ədəd)', 'Cheddar roll (8 ədəd)', 'Hot chiken (10 ədəd)', 'Maki kani (10 ədəd)'], gift: '1 LT CocaCola + Coleslaw Salat', badge: 'Pulsuz Çatdırılma' }
  ],
  sets: [
    { id: 's1', name: 'Couple Set', price: 21.90, qty: 44, unit: 'ədəd', tagline: 'Pulsuz Çatdırılma', image: 'couple.jpg', ingredients: [], contents: ['Filadelfia (8 ədəd)', 'Kalifornia (8 ədəd)', 'Chips roll (8 ədəd)', 'Baked kappa maki (10 ədəd)', 'Hot salmon (10 ədəd)'], gift: '1 LT CocaCola + Coleslaw Salat', badge: 'Pulsuz Çatdırılma' },
    { id: 's2', name: 'Flame Set', price: 25.90, qty: 46, unit: 'ədəd', tagline: 'Pulsuz Çatdırılma', image: 'flame.jpg', ingredients: [], contents: ['Filadelfia (8 ədəd)', 'Kalifornia (8 ədəd)', 'Crab maki (10 ədəd)', 'Hot crab (10 ədəd)', 'Hot chicken (10 ədəd)'], gift: '1 LT CocaCola + Coleslaw Salat', badge: 'Pulsuz Çatdırılma' },
    { id: 's3', name: 'Salmon Set', price: 29.90, qty: 46, unit: 'ədəd', tagline: 'Pulsuz Çatdırılma', image: 'solomon.jpg', ingredients: [], contents: ['Filadelfia (8 ədəd)', 'Filadelfia grilled (8 ədəd)', 'Hot salmon (20 ədəd)', 'Salmon maki (10 ədəd)', 'Salmon burger (4 hissə)'], gift: '1 LT CocaCola + Coleslaw Salat', badge: 'Pulsuz Çatdırılma' }
  ]
};

const GALLERY_IMAGES = [
  { src: 'kaliforniya.jpg', name: 'Kalifornia Roll' },
  { src: 'flame.jpg', name: 'Flame Set' },
  { src: 'ebicrunch.jpg', name: 'Ebi Crunch' },
  { src: 'hotcrap.jpg', name: 'Hot Crab' },
  { src: 'hotpravn.jpg', name: 'Hot Prawn' },
  { src: 'alyaska.jpg', name: 'Alyaska' },
  { src: 'fresh.jpg', name: 'Fresh Roll' },
  { src: 'couple.jpg', name: 'Couple Set' },
  { src: 'solomon.jpg', name: 'Salmon Set' }
];

// ===== STATE =====
let cart = [];
let currentSection = 'home';

// Navigation history stack: [{section, scrollY}]
const navHistory = [];

// ===== DOM REFS (cached once) =====
const $navbar    = document.getElementById('navbar');
const $hamburger = document.getElementById('hamburger');
const $navLinks  = document.getElementById('navLinks');
const $cartBtn   = document.getElementById('cartBtn');
const $cartCount = document.getElementById('cartCount');
const $cartSidebar = document.getElementById('cartSidebar');
const $cartOverlay = document.getElementById('cartOverlay');
const $cartClose   = document.getElementById('cartClose');
const $cartItems   = document.getElementById('cartItems');
const $cartEmpty   = document.getElementById('cartEmpty');
const $cartFooter  = document.getElementById('cartFooter');
const $cartTotal   = document.getElementById('cartTotal');
const $orderBtn    = document.getElementById('orderBtn');
const $modalOverlay  = document.getElementById('modalOverlay');
const $productModal  = document.getElementById('productModal');
const $modalClose    = document.getElementById('modalClose');
const $modalContent  = document.getElementById('modalContent');

// ===== ITEM LOOKUP (O(1) map) =====
const itemMap = {};
['rolls','mini-sets','sets'].forEach(cat => {
  MENU_DATA[cat].forEach(item => { itemMap[item.id] = item; });
});
function getItemById(id) { return itemMap[id] || null; }

// ===== NAVIGATION =====
function showSection(section, pushHistory) {
  if (pushHistory !== false) {
    // Save current position before leaving
    navHistory.push({ section: currentSection, scrollY: window.scrollY });
  }

  const pages = document.querySelectorAll('.page');
  const target = document.getElementById('page-' + section);
  if (!target) return;

  pages.forEach(p => { p.classList.remove('active'); });
  target.classList.add('active');

  document.querySelectorAll('.nav-link').forEach(l => {
    l.classList.toggle('active', l.dataset.section === section);
  });

  currentSection = section;

  $navLinks.classList.remove('open');
  $hamburger.classList.remove('open');

  window.scrollTo({ top: 0, behavior: 'instant' });
}

// Go back to previous page, restoring scroll position
function goBack() {
  if (navHistory.length === 0) {
    showSection('home', false);
    return;
  }
  const prev = navHistory.pop();

  const pages = document.querySelectorAll('.page');
  const target = document.getElementById('page-' + prev.section);
  if (!target) return;

  pages.forEach(p => { p.classList.remove('active'); });
  target.classList.add('active');

  document.querySelectorAll('.nav-link').forEach(l => {
    l.classList.toggle('active', l.dataset.section === prev.section);
  });

  currentSection = prev.section;

  $navLinks.classList.remove('open');
  $hamburger.classList.remove('open');

  // Restore scroll position
  requestAnimationFrame(() => {
    window.scrollTo({ top: prev.scrollY, behavior: 'instant' });
  });
}

// Nav link clicks
document.addEventListener('click', function(e) {
  const link = e.target.closest('[data-section]');
  if (link) {
    e.preventDefault();
    const sec = link.dataset.section;
    if (sec && sec !== currentSection) showSection(sec, true);
  }
}, { passive: false });

// Logo → home
document.querySelector('.logo').addEventListener('click', () => {
  if (currentSection !== 'home') showSection('home', true);
});

// Hamburger
$hamburger.addEventListener('click', () => {
  $hamburger.classList.toggle('open');
  $navLinks.classList.toggle('open');
});

// Navbar scroll effect (passive for performance)
window.addEventListener('scroll', () => {
  $navbar.classList.toggle('scrolled', window.scrollY > 20);
}, { passive: true });

// ===== MENU RENDERING (DocumentFragment for speed) =====
function renderMenu() {
  ['rolls','mini-sets','sets'].forEach(cat => {
    const grid = document.getElementById('grid-' + cat);
    if (!grid) return;
    const frag = document.createDocumentFragment();
    MENU_DATA[cat].forEach(item => {
      const el = buildMenuCardEl(item);
      frag.appendChild(el);
    });
    grid.innerHTML = '';
    grid.appendChild(frag);
  });
}

function buildMenuCardEl(item) {
  const priceStr = item.price % 1 === 0 ? item.price + ' ₼' : item.price.toFixed(2) + ' ₼';
  const article = document.createElement('article');
  article.className = 'menu-card';
  article.dataset.id = item.id;
  article.innerHTML = `
    <div class="card-image-wrap">
      <img src="${item.image}" alt="${item.name}" loading="lazy" decoding="async" />
      ${item.badge ? `<span class="card-badge">${item.badge}</span>` : ''}
      <button class="card-add-btn" data-id="${item.id}" aria-label="${item.name} səbətə əlavə et">+</button>
    </div>
    <div class="card-body">
      <h3 class="card-name">${item.name}</h3>
      <p class="card-desc">${item.tagline}</p>
      <div class="card-footer">
        <span class="card-price">${priceStr}</span>
        <span class="card-qty">${item.qty} ${item.unit}</span>
      </div>
    </div>`;
  return article;
}

// ===== MENU TABS =====
document.getElementById('menuTabs').addEventListener('click', (e) => {
  const tab = e.target.closest('.menu-tab');
  if (!tab) return;
  const cat = tab.dataset.cat;
  document.querySelectorAll('.menu-tab').forEach(t => t.classList.toggle('active', t === tab));
  document.querySelectorAll('.menu-category').forEach(c => c.classList.toggle('active', c.id === 'cat-' + cat));
}, { passive: true });

// ===== CARD INTERACTIONS (single delegated listener) =====
document.addEventListener('click', (e) => {
  // Add to cart button
  const addBtn = e.target.closest('.card-add-btn');
  if (addBtn) {
    e.stopPropagation();
    addToCart(addBtn.dataset.id);
    addBtn.classList.add('added');
    addBtn.textContent = '✓';
    setTimeout(() => { addBtn.classList.remove('added'); addBtn.textContent = '+'; }, 700);
    return;
  }
  // Card click → open modal
  const card = e.target.closest('.menu-card');
  if (card) { openModal(card.dataset.id); }
});

// ===== GALLERY =====
function renderGallery() {
  const grid = document.getElementById('galleryGrid');
  if (!grid) return;
  const frag = document.createDocumentFragment();
  GALLERY_IMAGES.forEach(img => {
    const div = document.createElement('div');
    div.className = 'gallery-item';
    div.innerHTML = `<img src="${img.src}" alt="${img.name}" loading="lazy" decoding="async" /><div class="gallery-item-overlay"><span class="gallery-item-name">${img.name}</span></div>`;
    frag.appendChild(div);
  });
  grid.innerHTML = '';
  grid.appendChild(frag);
}

// ===== CART =====
function addToCart(id) {
  const item = getItemById(id);
  if (!item) return;
  const existing = cart.find(c => c.id === id);
  if (existing) { existing.count++; }
  else { cart.push({ id, count: 1 }); }
  updateCartUI();
  bumpCartCount();
  showToast('<i class="fas fa-check-circle"></i> ' + item.name + ' səbətə əlavə edildi', 'success');
}

function removeFromCart(id) {
  cart = cart.filter(c => c.id !== id);
  updateCartUI();
}

function changeQty(id, delta) {
  const entry = cart.find(c => c.id === id);
  if (!entry) return;
  entry.count += delta;
  if (entry.count <= 0) removeFromCart(id);
  else updateCartUI();
}

function updateCartUI() {
  let total = 0, count = 0;
  const frag = document.createDocumentFragment();

  cart.forEach(entry => {
    const item = getItemById(entry.id);
    if (!item) return;
    total += item.price * entry.count;
    count += entry.count;
    const subtotal = (item.price * entry.count % 1 === 0) ? (item.price * entry.count) + '' : (item.price * entry.count).toFixed(2);
    const div = document.createElement('div');
    div.className = 'cart-item';
    div.dataset.id = item.id;
    div.innerHTML = `
      <img class="cart-item-img" src="${item.image}" alt="${item.name}" loading="lazy" />
      <div class="cart-item-info">
        <div class="cart-item-name">${item.name}</div>
        <div class="cart-item-price">${subtotal} ₼</div>
        <div class="cart-item-controls">
          <button class="qty-btn" data-action="dec" data-id="${item.id}">−</button>
          <span class="qty-num">${entry.count}</span>
          <button class="qty-btn" data-action="inc" data-id="${item.id}">+</button>
          <button class="cart-item-delete" data-action="del" data-id="${item.id}"><i class="fas fa-trash-alt"></i></button>
        </div>
      </div>`;
    frag.appendChild(div);
  });

  $cartCount.textContent = count;
  $cartEmpty.style.display = cart.length === 0 ? 'block' : 'none';
  $cartFooter.style.display = cart.length === 0 ? 'none' : 'block';
  $cartItems.innerHTML = '';
  $cartItems.appendChild(frag);

  const totalStr = total % 1 === 0 ? total + '' : total.toFixed(2);
  $cartTotal.textContent = totalStr + ' ₼';
}

function bumpCartCount() {
  $cartCount.classList.remove('bump');
  void $cartCount.offsetWidth; // reflow
  $cartCount.classList.add('bump');
  setTimeout(() => $cartCount.classList.remove('bump'), 300);
}

// Cart controls
$cartItems.addEventListener('click', (e) => {
  const btn = e.target.closest('[data-action]');
  if (!btn) return;
  const { id, action } = btn.dataset;
  if (action === 'inc') changeQty(id, 1);
  else if (action === 'dec') changeQty(id, -1);
  else if (action === 'del') removeFromCart(id);
}, { passive: true });

// Open / close cart
function openCart() {
  $cartSidebar.classList.add('open');
  $cartOverlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeCart() {
  $cartSidebar.classList.remove('open');
  $cartOverlay.classList.remove('open');
  document.body.style.overflow = '';
}

$cartBtn.addEventListener('click', openCart);
$cartClose.addEventListener('click', closeCart);
$cartOverlay.addEventListener('click', closeCart);

// ===== ORDER via WhatsApp (instant, no freezing) =====
$orderBtn.addEventListener('click', () => {
  if (cart.length === 0) return;

  const lines = [];
  let total = 0;
  cart.forEach(entry => {
    const item = getItemById(entry.id);
    if (!item) return;
    const sub = item.price * entry.count;
    total += sub;
    const subStr = sub % 1 === 0 ? sub + '' : sub.toFixed(2);
    lines.push('• ' + item.name + ' × ' + entry.count + ' = ' + subStr + ' ₼');
  });

  const totalStr = total % 1 === 0 ? total + '' : total.toFixed(2);
  const msg = '🍣 *Sotto Sushi Sifarişi*\n\n' + lines.join('\n') + '\n\n💰 *Cəmi: ' + totalStr + ' ₼*\n\nSifariş üçün əlaqə saxlayın.';

  // Close cart first, then open WhatsApp
  closeCart();
  setTimeout(() => {
    window.open('https://wa.me/994559406018?text=' + encodeURIComponent(msg), '_blank', 'noopener,noreferrer');
  }, 150);
});

// ===== PRODUCT MODAL =====
function openModal(id) {
  const item = getItemById(id);
  if (!item) return;

  const priceStr = item.price % 1 === 0 ? item.price + ' ₼' : item.price.toFixed(2) + ' ₼';

  let extra = '';
  if (item.ingredients.length > 0) {
    extra += '<p class="modal-section-title">Tərkibi</p><div class="modal-ingredients">' +
      item.ingredients.map(i => '<span class="ingredient-tag">' + i + '</span>').join('') + '</div>';
  }
  if (item.contents) {
    extra += '<p class="modal-section-title">Setdə nələr var?</p><ul class="modal-contents">' +
      item.contents.map(c => '<li>' + c + '</li>').join('') + '</ul>';
  }
  if (item.gift) {
    extra += '<div class="modal-gift"><i class="fas fa-gift"></i><span>Hədiyyə: <strong>' + item.gift + '</strong></span></div>';
  }

  $modalContent.innerHTML =
    '<img class="modal-img" src="' + item.image + '" alt="' + item.name + '" loading="eager" />' +
    '<div class="modal-body">' +
      '<h2 class="modal-name">' + item.name + '</h2>' +
      '<p class="modal-tagline">' + item.tagline + '</p>' +
      '<p class="modal-price">' + priceStr + '</p>' +
      extra +
      '<button class="modal-add-btn" data-id="' + item.id + '"><i class="fas fa-plus"></i> Səbətə Əlavə Et</button>' +
    '</div>';

  $modalOverlay.classList.add('open');
  $productModal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  $modalOverlay.classList.remove('open');
  $productModal.classList.remove('open');
  document.body.style.overflow = '';
}

$modalClose.addEventListener('click', closeModal);
$modalOverlay.addEventListener('click', closeModal);

$modalContent.addEventListener('click', (e) => {
  const btn = e.target.closest('.modal-add-btn');
  if (btn) {
    addToCart(btn.dataset.id);
    closeModal();
    openCart();
  }
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') { closeModal(); closeCart(); }
});

// ===== TOAST =====
let toastTimer = null;
let $toast = null;

function showToast(html, type) {
  if (!$toast) {
    $toast = document.createElement('div');
    $toast.className = 'toast';
    document.body.appendChild($toast);
  }
  $toast.innerHTML = html;
  $toast.className = 'toast' + (type ? ' ' + type : '');
  clearTimeout(toastTimer);
  // Use rAF only once for reflow
  $toast.classList.remove('show');
  requestAnimationFrame(() => {
    $toast.classList.add('show');
    toastTimer = setTimeout(() => { if ($toast) $toast.classList.remove('show'); }, 2200);
  });
}

// ===== INIT =====
function init() {
  renderMenu();
  renderGallery();
  updateCartUI();
  // Don't push history on initial load
  navHistory.length = 0;
  currentSection = 'home';
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  const home = document.getElementById('page-home');
  if (home) home.classList.add('active');
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
