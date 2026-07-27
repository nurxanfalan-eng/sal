/* ===================================
   SOTTO SUSHI - Main Application JS
   =================================== */

'use strict';

// ===== DATA =====
const MENU_DATA = {
  rolls: [
    {
      id: 'r1',
      name: 'Ebi Crunch',
      nameAz: 'Ebi Crunch',
      price: 11,
      qty: 8,
      unit: 'ədəd',
      tagline: 'Sərhədsiz Ləzzət',
      image: 'ebicrunch.jpg',
      ingredients: ['Krevet', 'Krem Pendir', 'Xiyar', 'Düyü', 'Nori', 'Küncüt'],
      contents: null,
      gift: null,
      badge: null
    },
    {
      id: 'r2',
      name: 'Hot Crab',
      nameAz: 'Hot Crab',
      price: 9,
      qty: 8,
      unit: 'ədəd',
      tagline: 'İsti Krabın İmza Dadı',
      image: 'hotcrap.jpg',
      ingredients: ['Krab', 'Krem Pendir', 'Düyü', 'Nori', 'Panko'],
      contents: null,
      gift: null,
      badge: null
    },
    {
      id: 'r3',
      name: 'Hot Prawn',
      nameAz: 'Hot Prawn',
      price: 11,
      qty: 8,
      unit: 'ədəd',
      tagline: 'Hər Loxmada Alovlanan Krevet',
      image: 'hotpravn.jpg',
      ingredients: ['Krevet', 'Krem Pendir', 'Düyü', 'Nori', 'Panko'],
      contents: null,
      gift: null,
      badge: null
    },
    {
      id: 'r4',
      name: 'Kalifornia Roll',
      nameAz: 'Kalifornia Roll',
      price: 9,
      qty: 8,
      unit: 'ədəd',
      tagline: 'Klassikləşmiş Ləzzətin Ünvanı',
      image: 'kaliforniya.jpg',
      ingredients: ['Krab', 'Krem Pendir', 'Kürü', 'Düyü', 'Xiyar', 'Nori'],
      contents: null,
      gift: null,
      badge: null
    },
    {
      id: 'r5',
      name: 'Alyaska',
      nameAz: 'Alyaska',
      price: 9,
      qty: 8,
      unit: 'ədəd',
      tagline: 'Sərin Dad Balansı',
      image: 'alyaska.jpg',
      ingredients: ['Qızıl Balıq', 'Krem Pendir', 'Düyü', 'Xiyar', 'Nori', 'Küncüt'],
      contents: null,
      gift: null,
      badge: null
    },
    {
      id: 'r6',
      name: 'Fresh Roll',
      nameAz: 'Fresh Roll',
      price: 9,
      qty: 8,
      unit: 'ədəd',
      tagline: 'Fresh Roll Fresh Həyat — Əvəzsiz Ahəng',
      image: 'fresh.jpg',
      ingredients: ['Qar Krabı', 'Şüyüd', 'Krem Pendir', 'Düyü', 'Xiyar', 'Nori', 'Kimchi Sousu'],
      contents: null,
      gift: null,
      badge: null
    }
  ],
  'mini-sets': [
    {
      id: 'ms1',
      name: 'Mini Mix 2',
      nameAz: 'Mini Mix 2',
      price: 22.90,
      qty: 36,
      unit: 'ədəd roll',
      tagline: '36 Ədəd Roll',
      image: 'minimix3.jpg',
      ingredients: [],
      contents: [
        'Kalifornia (8 ədəd)',
        'Cips roll (8 ədəd)',
        'Hot kani (10 ədəd)',
        'Baked kappa maki (10 ədəd)'
      ],
      gift: '1 LT CocaCola + Coleslaw Salat',
      badge: 'Pulsuz Çatdırılma'
    },
    {
      id: 'ms2',
      name: 'Mini Mix 3',
      nameAz: 'Mini Mix 3',
      price: 24.90,
      qty: 36,
      unit: 'ədəd roll',
      tagline: '36 Ədəd Roll',
      image: 'minimix2.jpg',
      ingredients: [],
      contents: [
        'Filadelfia (8 ədəd)',
        'Cheddar roll (8 ədəd)',
        'Hot chiken (10 ədəd)',
        'Maki kani (10 ədəd)'
      ],
      gift: '1 LT CocaCola + Coleslaw Salat',
      badge: 'Pulsuz Çatdırılma'
    }
  ],
  sets: [
    {
      id: 's1',
      name: 'Couple Set',
      nameAz: 'Couple Set',
      price: 21.90,
      qty: 44,
      unit: 'ədəd',
      tagline: 'Pulsuz Çatdırılma',
      image: 'couple.jpg',
      ingredients: [],
      contents: [
        'Filadelfia (8 ədəd)',
        'Kalifornia (8 ədəd)',
        'Chips roll (8 ədəd)',
        'Baked kappa maki (10 ədəd)',
        'Hot salmon (10 ədəd)'
      ],
      gift: '1 LT CocaCola + Coleslaw Salat',
      badge: 'Pulsuz Çatdırılma'
    },
    {
      id: 's2',
      name: 'Flame Set',
      nameAz: 'Flame Set',
      price: 25.90,
      qty: 46,
      unit: 'ədəd',
      tagline: 'Pulsuz Çatdırılma',
      image: 'flame.jpg',
      ingredients: [],
      contents: [
        'Filadelfia (8 ədəd)',
        'Kalifornia (8 ədəd)',
        'Crab maki (10 ədəd)',
        'Hot crab (10 ədəd)',
        'Hot chicken (10 ədəd)'
      ],
      gift: '1 LT CocaCola + Coleslaw Salat',
      badge: 'Pulsuz Çatdırılma'
    },
    {
      id: 's3',
      name: 'Salmon Set',
      nameAz: 'Salmon Set',
      price: 29.90,
      qty: 46,
      unit: 'ədəd',
      tagline: 'Pulsuz Çatdırılma',
      image: 'solomon.jpg',
      ingredients: [],
      contents: [
        'Filadelfia (8 ədəd)',
        'Filadelfia grilled (8 ədəd)',
        'Hot salmon (20 ədəd)',
        'Salmon maki (10 ədəd)',
        'Salmon burger (4 hissə)'
      ],
      gift: '1 LT CocaCola + Coleslaw Salat',
      badge: 'Pulsuz Çatdırılma'
    }
  ]
};

const GALLERY_IMAGES = [
  { src: 'kaliforniya.jpg', name: 'Kalifornia Roll' },
  { src: 'flame.jpg', name: 'Flame Set Detail' }
];

// ===== STATE =====
let cart = [];
let currentSection = 'home';

// ===== DOM REFS =====
const $navbar = document.getElementById('navbar');
const $hamburger = document.getElementById('hamburger');
const $navLinks = document.getElementById('navLinks');
const $cartBtn = document.getElementById('cartBtn');
const $cartCount = document.getElementById('cartCount');
const $cartSidebar = document.getElementById('cartSidebar');
const $cartOverlay = document.getElementById('cartOverlay');
const $cartClose = document.getElementById('cartClose');
const $cartBody = document.getElementById('cartBody');
const $cartItems = document.getElementById('cartItems');
const $cartEmpty = document.getElementById('cartEmpty');
const $cartFooter = document.getElementById('cartFooter');
const $cartTotal = document.getElementById('cartTotal');
const $orderBtn = document.getElementById('orderBtn');
const $modalOverlay = document.getElementById('modalOverlay');
const $productModal = document.getElementById('productModal');
const $modalClose = document.getElementById('modalClose');
const $modalContent = document.getElementById('modalContent');

// ===== NAVIGATION =====
function showSection(section) {
  // Hide all pages
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  // Show target
  const page = document.getElementById('page-' + section);
  if (page) page.classList.add('active');

  // Update nav links
  document.querySelectorAll('.nav-link').forEach(l => {
    l.classList.toggle('active', l.dataset.section === section);
  });

  currentSection = section;

  // Close mobile menu
  $navLinks.classList.remove('open');
  $hamburger.classList.remove('open');

  // Scroll to top
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Nav link clicks (all links with data-section)
document.addEventListener('click', function(e) {
  const link = e.target.closest('[data-section]');
  if (link) {
    e.preventDefault();
    const sec = link.dataset.section;
    if (sec) showSection(sec);
  }
});

// Logo click → home
document.querySelector('.logo').addEventListener('click', () => showSection('home'));

// Hamburger toggle
$hamburger.addEventListener('click', () => {
  $hamburger.classList.toggle('open');
  $navLinks.classList.toggle('open');
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
  $navbar.classList.toggle('scrolled', window.scrollY > 20);
}, { passive: true });

// ===== MENU RENDERING =====
function renderMenu() {
  ['rolls', 'mini-sets', 'sets'].forEach(cat => {
    const grid = document.getElementById('grid-' + cat);
    if (!grid) return;
    const items = MENU_DATA[cat];
    grid.innerHTML = items.map(item => buildMenuCard(item)).join('');
  });
}

function buildMenuCard(item) {
  const priceStr = item.price % 1 === 0 ? item.price + ' ₼' : item.price.toFixed(2) + ' ₼';
  const badgeHtml = item.badge ? `<span class="card-badge">${item.badge}</span>` : '';
  return `
    <article class="menu-card" data-id="${item.id}" data-cat="${getCatByItem(item)}">
      <div class="card-image-wrap">
        <img src="${item.image}" alt="${item.name}" loading="lazy" />
        ${badgeHtml}
        <button class="card-add-btn" data-id="${item.id}" aria-label="${item.name} səbətə əlavə et">+</button>
      </div>
      <div class="card-body">
        <h3 class="card-name">${item.name}</h3>
        <p class="card-desc">${item.tagline}</p>
        <div class="card-footer">
          <span class="card-price">${priceStr}</span>
          <span class="card-qty">${item.qty} ${item.unit}</span>
        </div>
      </div>
    </article>
  `;
}

function getCatByItem(item) {
  for (const cat of ['rolls', 'mini-sets', 'sets']) {
    if (MENU_DATA[cat].find(i => i.id === item.id)) return cat;
  }
  return 'rolls';
}

function getAllItems() {
  return [...MENU_DATA.rolls, ...MENU_DATA['mini-sets'], ...MENU_DATA.sets];
}

function getItemById(id) {
  return getAllItems().find(i => i.id === id);
}

// ===== MENU TABS =====
document.getElementById('menuTabs').addEventListener('click', (e) => {
  const tab = e.target.closest('.menu-tab');
  if (!tab) return;
  const cat = tab.dataset.cat;
  document.querySelectorAll('.menu-tab').forEach(t => t.classList.toggle('active', t === tab));
  document.querySelectorAll('.menu-category').forEach(c => c.classList.toggle('active', c.id === 'cat-' + cat));
});

// ===== CARD INTERACTIONS =====
document.addEventListener('click', (e) => {
  const addBtn = e.target.closest('.card-add-btn');
  if (addBtn) {
    e.stopPropagation();
    const id = addBtn.dataset.id;
    addToCart(id);
    addBtn.classList.add('added');
    addBtn.textContent = '✓';
    setTimeout(() => { addBtn.classList.remove('added'); addBtn.textContent = '+'; }, 800);
    return;
  }

  const card = e.target.closest('.menu-card');
  if (card) {
    openModal(card.dataset.id);
  }
});

// ===== GALLERY =====
function renderGallery() {
  const grid = document.getElementById('galleryGrid');
  if (!grid) return;
  grid.innerHTML = GALLERY_IMAGES.map(img => `
    <div class="gallery-item">
      <img src="${img.src}" alt="${img.name}" loading="lazy" />
      <div class="gallery-item-overlay">
        <span class="gallery-item-name">${img.name}</span>
      </div>
    </div>
  `).join('');
}

// ===== CART =====
function addToCart(id) {
  const item = getItemById(id);
  if (!item) return;
  const existing = cart.find(c => c.id === id);
  if (existing) {
    existing.count++;
  } else {
    cart.push({ id, count: 1 });
  }
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
  const total = cart.reduce((sum, c) => {
    const item = getItemById(c.id);
    return sum + (item ? item.price * c.count : 0);
  }, 0);
  const count = cart.reduce((s, c) => s + c.count, 0);

  $cartCount.textContent = count;
  $cartEmpty.style.display = cart.length === 0 ? 'block' : 'none';
  $cartFooter.style.display = cart.length === 0 ? 'none' : 'block';

  $cartItems.innerHTML = cart.map(entry => {
    const item = getItemById(entry.id);
    if (!item) return '';
    const priceStr = (item.price * entry.count).toFixed(2).replace('.00', '');
    return `
      <div class="cart-item" data-id="${item.id}">
        <img class="cart-item-img" src="${item.image}" alt="${item.name}" loading="lazy" />
        <div class="cart-item-info">
          <div class="cart-item-name">${item.name}</div>
          <div class="cart-item-price">${priceStr} ₼</div>
          <div class="cart-item-controls">
            <button class="qty-btn" data-action="dec" data-id="${item.id}">−</button>
            <span class="qty-num">${entry.count}</span>
            <button class="qty-btn" data-action="inc" data-id="${item.id}">+</button>
            <button class="cart-item-delete" data-action="del" data-id="${item.id}"><i class="fas fa-trash-alt"></i></button>
          </div>
        </div>
      </div>
    `;
  }).join('');

  $cartTotal.textContent = total.toFixed(2).replace('.00', '') + ' ₼';
}

function bumpCartCount() {
  $cartCount.classList.add('bump');
  setTimeout(() => $cartCount.classList.remove('bump'), 300);
}

// Cart controls delegation
$cartItems.addEventListener('click', (e) => {
  const btn = e.target.closest('[data-action]');
  if (!btn) return;
  const id = btn.dataset.id;
  const action = btn.dataset.action;
  if (action === 'inc') changeQty(id, 1);
  else if (action === 'dec') changeQty(id, -1);
  else if (action === 'del') removeFromCart(id);
});

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

// ===== ORDER via WhatsApp =====
$orderBtn.addEventListener('click', () => {
  if (cart.length === 0) return;
  const lines = cart.map(entry => {
    const item = getItemById(entry.id);
    if (!item) return '';
    const subtotal = (item.price * entry.count).toFixed(2).replace('.00', '');
    return `• ${item.name} × ${entry.count} = ${subtotal} ₼`;
  }).filter(Boolean);

  const total = cart.reduce((sum, c) => {
    const item = getItemById(c.id);
    return sum + (item ? item.price * c.count : 0);
  }, 0).toFixed(2).replace('.00', '');

  const msg = `🍣 *Sotto Sushi Sifarişi*\n\n${lines.join('\n')}\n\n💰 *Cəmi: ${total} ₼*\n\nSifariş üçün əlaqə saxlayın.`;
  const encoded = encodeURIComponent(msg);
  window.open(`https://wa.me/994559406018?text=${encoded}`, '_blank');
  closeCart();
});

// ===== PRODUCT MODAL =====
function openModal(id) {
  const item = getItemById(id);
  if (!item) return;

  const priceStr = item.price % 1 === 0 ? item.price + ' ₼' : item.price.toFixed(2) + ' ₼';
  const ingredientsHtml = item.ingredients.length > 0 ? `
    <p class="modal-section-title">Tərkibi</p>
    <div class="modal-ingredients">
      ${item.ingredients.map(i => `<span class="ingredient-tag">${i}</span>`).join('')}
    </div>
  ` : '';
  const contentsHtml = item.contents ? `
    <p class="modal-section-title">Setdə nələr var?</p>
    <ul class="modal-contents">
      ${item.contents.map(c => `<li>${c}</li>`).join('')}
    </ul>
  ` : '';
  const giftHtml = item.gift ? `
    <div class="modal-gift">
      <i class="fas fa-gift"></i>
      <span>Hədiyyə: <strong>${item.gift}</strong></span>
    </div>
  ` : '';

  $modalContent.innerHTML = `
    <img class="modal-img" src="${item.image}" alt="${item.name}" />
    <div class="modal-body">
      <h2 class="modal-name">${item.name}</h2>
      <p class="modal-tagline">${item.tagline}</p>
      <p class="modal-price">${priceStr}</p>
      ${ingredientsHtml}
      ${contentsHtml}
      ${giftHtml}
      <button class="modal-add-btn" data-id="${item.id}">
        <i class="fas fa-plus"></i> Səbətə Əlavə Et
      </button>
    </div>
  `;

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

// Close modal on Escape
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') { closeModal(); closeCart(); }
});

// ===== TOAST =====
let toastTimer = null;
function showToast(html, type = '') {
  let toast = document.querySelector('.toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.className = 'toast';
    document.body.appendChild(toast);
  }
  toast.innerHTML = html;
  toast.className = 'toast' + (type ? ' ' + type : '');
  clearTimeout(toastTimer);
  requestAnimationFrame(() => {
    toast.classList.add('show');
    toastTimer = setTimeout(() => toast.classList.remove('show'), 2500);
  });
}

// ===== INIT =====
function init() {
  renderMenu();
  renderGallery();
  updateCartUI();
  showSection('home');
}

// Run when DOM ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
