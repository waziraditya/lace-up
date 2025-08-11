// --------------------
// LaceUp — main script
// --------------------

// Local state
let cart = JSON.parse(localStorage.getItem('sneakCart') || '[]');
let allSneakers = [];
let filteredSneakers = [];

// ---------- sneaker data ----------
const sneakerData = [
  /* (use the same objects you had) */
  // I'm keeping your full dataset as-is for brevity — paste the same array here from your file.
  // For demonstration I include a few items — replace with full list from your original.
  {
    id: 1,
    title: "Converse Chuck Taylor All Star",
    brand: "Converse",
    price: 3499,
    category: "basketball",
    tab: ["men"],
    image: "https://res.cloudinary.com/dqka2nzzx/image/upload/w_400,h_300,c_fill/v1754684269/m9160c_a_107x1_hg6kyr.jpg",
    alt: "Converse Chuck Taylor All Star high-top sneaker in black canvas with white rubber toe cap, flat laces, and signature ankle patch logo on the inner side",
    description: "Iconic canvas sneaker, timeless silhouette"
  },
  {
    id: 2,
    title: "Air Jordan 1 Retro High",
    brand: "Jordan",
    price: 12999,
    category: "basketball",
    tab: ["men"],
    image: "https://res.cloudinary.com/dqka2nzzx/image/upload/w_400,h_300,c_fill/v1754684349/AIR_JORDAN_1_RETRO_HIGH_OG_pe6alf.jpg",
    alt: "Air Jordan 1 Retro High OG basketball shoe in red, white, and black premium leather, featuring the Nike swoosh and padded ankle collar",
    description: "Classic basketball sneaker with premium leather construction"
  },
  {
    id: 3,
    title: "Adidas Stan Smith",
    brand: "Adidas",
    price: 5799,
    category: "tennis",
    tab: ["men"],
    image: "https://res.cloudinary.com/dqka2nzzx/image/upload/w_400,h_300,c_fill/v1754684400/Stan_Smith_Shoes_White_M20324_01_standard_ohar1l.jpg",
    alt: "White Adidas Stan Smith tennis sneaker with smooth leather upper, perforated three-stripe detailing, and green heel tab branding",
    description: "Clean leather tennis sneaker, iconic and versatile"
  },
  {
    id: 4,
    title: "Puma Suede Classic",
    brand: "Puma",
    price: 4999,
    category: "casual",
    tab: ["men"],
    image: "https://res.cloudinary.com/dqka2nzzx/image/upload/w_400,h_300,c_fill/v1754684458/Suede-Classic-XXI-Sneakers_djxlho.jpg",
    alt: "Puma Suede Classic low-top sneaker in royal blue suede with contrasting white formstrip, flat laces, and textured off-white rubber sole",
    description: "Retro suede sneaker with sporty heritage"
  },
  {
    id: 5,
    title: "Adidas Samba",
    brand: "Adidas",
    price: 5499,
    category: "football",
    tab: ["men"],
    image: "https://res.cloudinary.com/dqka2nzzx/image/upload/w_400,h_300,c_fill/v1754684493/Samba_XLG_Shoes_White_IE1377_01_standard_jt4a6p.jpg",
    alt: "Adidas Samba low-top sneaker in white leather with light grey suede toe overlay, gum sole, and gold Samba branding",
    description: "Classic football court sneaker with gum sole"
  },

  // Women
  {
    id: 6,
    title: "Adidas Samba (Women)",
    brand: "Adidas",
    price: 5499,
    category: "casual",
    tab: ["women"],
    image: "https://res.cloudinary.com/dqka2nzzx/image/upload/w_400,h_300,c_fill/v1754684534/shopping_qk5sfn.jpg",
    alt: "Women's Adidas Samba sneaker in soft white leather with beige suede overlays, slim silhouette, and gum outsole",
    description: "Iconic look with casual comfort—women’s favorite"
  },
  {
    id: 7,
    title: "Nike Air Force 1",
    brand: "Nike",
    price: 7999,
    category: "basketball",
    tab: ["women"],
    image: "https://res.cloudinary.com/dqka2nzzx/image/upload/w_400,h_300,c_fill/v1754684655/custom-nike-air-force-1-low-by-you-shoes_wzsicf.jpg",
    alt: "Custom Nike Air Force 1 low-top sneaker in crisp white leather with perforated toe box and thick rubber sole",
    description: "Legendary streetwear staple seen on celebs"
  },
  {
    id: 8,
    title: "Adidas Stan Smith (Women)",
    brand: "Adidas",
    price: 5799,
    category: "casual",
    tab: ["women"],
    image: "https://res.cloudinary.com/dqka2nzzx/image/upload/w_400,h_300,c_fill/v1754684716/MP000000024332099_437Wx649H_202411081629221_mnvqdz.jpg",
    alt: "Women's Adidas Stan Smith sneaker in white leather with metallic gold heel tab, minimal perforated side stripes, and flat white laces",
    description: "Minimalist leather sneaker—smart and stylish"
  },
  {
    id: 9,
    title: "New Balance 9060",
    brand: "New Balance",
    price: 8999,
    category: "retro",
    tab: ["women"],
    image: "https://res.cloudinary.com/dqka2nzzx/image/upload/w_400,h_300,c_fill/v1754684763/-original-imahfcb3j7j4qwcu_rzm1m2.jpg",
    alt: "New Balance 9060 chunky retro running shoe in beige mesh with grey suede overlays, thick sculpted sole, and vintage styling",
    description: "Chunky retro runner, trend-forward design"
  },
  {
    id: 10,
    title: "VEJA Campo",
    brand: "VEJA",
    price: 7999,
    category: "sustainable",
    tab: ["women", "sustainable"],
    image: "https://res.cloudinary.com/dqka2nzzx/image/upload/w_400,h_300,c_fill/v1754684819/-473Wx593H-469096404-white-MODEL_phurkm.jpg",
    alt: "VEJA Campo white leather low-top sneaker with cream outsole and black V logo, crafted from sustainable materials",
    description: "Leather sneaker with eco-conscious ethos"
  },

  // Kids
  {
    id: 11,
    title: "Nike Cosmic Runner (Kids)",
    brand: "Nike",
    price: 3499,
    category: "running",
    tab: ["kids"],
    image: "https://res.cloudinary.com/dqka2nzzx/image/upload/w_400,h_300,c_fill/v1754684865/NIKE_COSMIC_RUNNER_28TD_29_ihnymd.jpg",
    alt: "Nike Cosmic Runner kids' running shoe in black mesh with white midsole, Velcro strap, and pull tabs",
    description: "Running shoe built like adult gear for young kids"
  },
  {
    id: 12,
    title: "Reebok Club C 85 (Kids)",
    brand: "Reebok",
    price: 3999,
    category: "tennis",
    tab: ["kids"],
    image: "https://res.cloudinary.com/dqka2nzzx/image/upload/w_400,h_300,c_fill/v1754684900/images_icwa4n.jpg",
    alt: "Reebok Club C 85 kids' tennis shoe in white leather with green accents, perforated toe box, and low-profile sole",
    description: "Mini version of a subtle, tennis-inspired classic"
  },
  {
    id: 13,
    title: "Ten Little Retro Suede",
    brand: "Ten Little",
    price: 2999,
    category: "casual",
    tab: ["kids"],
    image: "https://res.cloudinary.com/dqka2nzzx/image/upload/w_400,h_300,c_fill/v1754684947/1754079549-ten-little-sneakers-688d20dd7455a.png_qd1jpn.png",
    alt: "Ten Little Retro Suede kids' sneaker in tan suede with wide toe box, no-tie elastic laces, and white sole",
    description: "Retro ’80s look, wide toe, no-tie laces—kid-friendly"
  },
  {
    id: 14,
    title: "Converse Chuck Taylor All Star (Kids)",
    brand: "Converse",
    price: 2999,
    category: "basketball",
    tab: ["kids"],
    image: "https://res.cloudinary.com/dqka2nzzx/image/upload/w_400,h_300,c_fill/v1754684987/images_obrubi.jpg",
    alt: "Youth-sized Converse Chuck Taylor All Star high-top sneaker in classic black canvas with white toe cap",
    description: "Youth-sized version of the universal staple"
  },
  {
    id: 15,
    title: "Adidas Superstar (Kids)",
    brand: "Adidas",
    price: 3499,
    category: "casual",
    tab: ["kids"],
    image: "https://res.cloudinary.com/dqka2nzzx/image/upload/w_400,h_300,c_fill/v1754685024/17883492_38502844_600_rvxtzv.webp",
    alt: "Kids' Adidas Superstar sneaker with iconic white leather upper, black stripes, and shell toe cap",
    description: "Classic shell-toe icon, mini version"
  },

  // Indian Brands
  {
    id: 16,
    title: "Gully Labs Baaz (White)",
    brand: "Gully Labs",
    price: 4999,
    category: "casual",
    tab: ["indian"],
    image: "https://res.cloudinary.com/dqka2nzzx/image/upload/w_400,h_300,c_fill/v1754685044/images_jfxrzr.jpg",
    alt: "Gully Labs Baaz white leather low-top sneaker with minimal stitching and clean silhouette",
    description: "Homegrown New Delhi sneaker, hand-lasted everyday"
  },
  {
    id: 17,
    title: "7-10 Bamboo Canvas",
    brand: "7-10",
    price: 3999,
    category: "casual",
    tab: ["indian"],
    image: "https://res.cloudinary.com/dqka2nzzx/image/upload/w_400,h_300,c_fill/v1754685072/images_prqtt9.jpg",
    alt: "7-10 Bamboo Canvas eco-friendly sneaker in beige canvas with rubber outsole and casual low-top design",
    description: "Stylish, affordable canvas low-top from Indian brand"
  },
  {
    id: 18,
    title: "Comet Classic",
    brand: "Comet",
    price: 4499,
    category: "casual",
    tab: ["indian", "sustainable"],
    image: "https://res.cloudinary.com/dqka2nzzx/image/upload/w_400,h_300,c_fill/v1754685098/Lateral_b2ceddb3-badb-425c-9234-ac37f2ebf907_ykocaj.jpg",
    alt: "Comet Classic black and white low-top sneaker with durable rubber sole and urban streetwear styling",
    description: "Indian brand known for versatility and street-ready design"
  },
  {
    id: 19,
    title: "Neeman's Everyday",
    brand: "Neeman's",
    price: 5499,
    category: "casual",
    tab: ["indian"],
    image: "https://res.cloudinary.com/dqka2nzzx/image/upload/w_400,h_300,c_fill/v1754685134/ND-EBSneaker-PebbleGrey-_WebOptimized_b_oxginc.jpg",
    alt: "Neeman's Everyday sneaker in pebble grey knit fabric with cushioned sole and eco-friendly build",
    description: "Eco-friendly Indian sneaker brand with comfort focus"
  },
  {
    id: 20,
    title: "Doc Sneakers Vegan",
    brand: "Doc Sneakers",
    price: 4999,
    category: "casual",
    tab: ["indian", "sustainable"],
    image: "https://res.cloudinary.com/dqka2nzzx/image/upload/w_400,h_300,c_fill/v1754685171/762x1100_dogo-unisex-kids-vegan-leather-white-sneakers-wb022-acek001-lifestyle-sneakers-dogo-ace-sneakers-kids-13635-24-B_b13yze.webp",
    alt: "Doc Sneakers Vegan white low-top sneaker made from synthetic leather with minimalist design",
    description: "Indian vegan sneaker brand, ethically made"
  },

  // Sustainable
  {
    id: 21,
    title: "Etiko Classic",
    brand: "Etiko",
    price: 4499,
    category: "casual",
    tab: ["sustainable"],
    image: "https://res.cloudinary.com/dqka2nzzx/image/upload/w_400,h_300,c_fill/v1754685353/417iS_UW4SL._SY300__rifcbq.jpg",
    alt: "Etiko Classic low-top sneaker in black organic cotton canvas with white sole and sustainable Fairtrade construction",
    description: "Sustainable sneaker made with organic cotton & Fairtrade"
  },
  {
    id: 22,
    title: "ID.EIGHT Fruit Leather Sneaker",
    brand: "ID.EIGHT",
    price: 10999,
    category: "casual",
    tab: ["sustainable"],
    image: "https://res.cloudinary.com/dqka2nzzx/image/upload/w_400,h_300,c_fill/v1754685388/images_oy3s2w.jpg",
    alt: "ID.EIGHT Fruit Leather sneaker in beige and green tones, made from apple, grape, and pineapple by-products",
    description: "Made using food-waste by-products (apple, grape, pineapple)"
  },
  {
    id: 23,
    title: "Black Tulip Classic Tennis",
    brand: "Black Tulip",
    price: 7499,
    category: "casual",
    tab: ["sustainable"],
    image: "https://res.cloudinary.com/dqka2nzzx/image/upload/w_400,h_300,c_fill/v1754685407/images_pzis59.jpg",
    alt: "Black Tulip Classic Tennis white sneaker with green accents, eco-friendly leather, and timeless court design",
    description: "Boutique sustainable sneaker with timeless design"
  },
  {
    id: 24,
    title: "Adidas Parley (Ocean Plastic)",
    brand: "Adidas x Parley",
    price: 7999,
    category: "casual",
    tab: ["sustainable"],
    image: "https://res.cloudinary.com/dqka2nzzx/image/upload/w_400,h_300,c_fill/v1754685433/images_gsu1cf.jpg",
    alt: "Adidas Parley sneaker made with recycled ocean plastic, featuring woven blue and white upper with eco-friendly sole",
    description: "Made with recycled ocean plastic—eco-conscious collab"
  },

  // Accessories
  {
    id: 25,
    title: "Premium Shoe Cleaner Kit",
    brand: "Crep Protect",
    price: 1999,
    category: "cleaning",
    tab: ["accessories"],
    image: "https://res.cloudinary.com/dqka2nzzx/image/upload/w_400,h_300,c_fill/v1754685496/657fc1fcfa9ef71e3a4d2b48-crep-protect-shoe-cleaner-kit-cure_rftvxd.jpg",
    alt: "Crep Protect Premium Shoe Cleaner Kit with brush, cleaning solution, and microfiber cloth",
    description: "Complete cleaning set to keep sneakers looking fresh"
  },
  {
    id: 26,
    title: "Replacement Shoe Laces",
    brand: "SneakerLab",
    price: 499,
    category: "laces",
    tab: ["accessories"],
    image: "https://res.cloudinary.com/dqka2nzzx/image/upload/w_400,h_300,c_fill/v1754685520/Pink-Jordan-1-Replacement-Shoelaces-by-Lace-Lab_600x_4e6010d1-b293-4e86-b1b3-92f7a771006a_takjou.jpg",
    alt: "Bright pink replacement shoelaces coiled neatly, compatible with Jordan 1 sneakers",
    description: "Durable, stylish laces for a quick sneaker refresh"
  },
  {
    id: 27,
    title: "Sneaker Deodorizer Balls",
    brand: "SneakerShield",
    price: 799,
    category: "odor-control",
    tab: ["accessories"],
    image: "https://res.cloudinary.com/dqka2nzzx/image/upload/w_400,h_300,c_fill/v1754685548/71hZoUg_zkL._UY1000__bnhyjj.jpg",
    alt: "Pair of SneakerShield deodorizer balls in bright green, designed to absorb odors inside shoes",
    description: "Compact deodorizer balls to keep sneakers smelling clean"
  },
  {
    id: 28,
    title: "Water & Stain Repellent Spray",
    brand: "Jason Markk",
    price: 1499,
    category: "protection",
    tab: ["accessories"],
    image: "https://res.cloudinary.com/dqka2nzzx/image/upload/w_400,h_300,c_fill/v1754685568/61cMugt1jdL_yzg28j.jpg",
    alt: "Jason Markk Water & Stain Repellent spray bottle for protecting sneakers from spills and dirt",
    description: "Protects sneakers from spills, stains, and dirt"
  },
  {
    id: 29,
    title: "Sneaker Display Case",
    brand: "DropFront",
    price: 2499,
    category: "storage",
    tab: ["accessories"],
    image: "https://res.cloudinary.com/dqka2nzzx/image/upload/w_400,h_300,c_fill/v1754685649/715i0SUfGqL_djgwv5.jpg",
    alt: "Transparent stackable DropFront sneaker display case with front-opening door for dust-free storage",
    description: "Transparent stackable case for dust-free sneaker storage"
  }
];


// ---------- utility functions ----------
function loadCartFromStorage() {
  cart = JSON.parse(localStorage.getItem('sneakCart') || '[]');
}

function saveCartToStorage() {
  localStorage.setItem('sneakCart', JSON.stringify(cart));
  updateCartCount();
}

function updateCartCount() {
  const countElem = document.getElementById('cart-count');
  if (countElem) {
    const cartData = JSON.parse(localStorage.getItem('sneakCart') || '[]');
    const totalQty = cartData.reduce((sum, item) => sum + (item.qty || 1), 0);
    countElem.textContent = totalQty;
  }
}

// small toast
function showToast(message, duration = 2500) {
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = message;
  document.body.appendChild(toast);

  // allow CSS to animate using .show class if available
  setTimeout(() => toast.classList.add('show'), 50);

  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => {
      if (toast.parentNode) toast.parentNode.removeChild(toast);
    }, 300);
  }, duration);
}

// inline bubble fallback (near button)
function showInlineBubble(targetEl, message) {
  const bubble = document.createElement('div');
  bubble.className = 'inline-bubble';
  bubble.textContent = message;
  document.body.appendChild(bubble);

  if (targetEl && typeof targetEl.getBoundingClientRect === 'function') {
    const rect = targetEl.getBoundingClientRect();
    bubble.style.position = 'fixed';
    bubble.style.left = Math.min(window.innerWidth - 260, rect.left + rect.width / 2) + 'px';
    bubble.style.top = Math.max(20, rect.top - 44) + 'px';
    bubble.style.transform = 'translateX(-50%)';
  } else {
    bubble.style.position = 'fixed';
    bubble.style.right = '24px';
    bubble.style.top = '80px';
  }

  bubble.style.opacity = '0';
  setTimeout(() => bubble.style.opacity = '1', 20);

  setTimeout(() => {
    bubble.style.opacity = '0';
    setTimeout(() => { if (bubble.parentNode) bubble.remove(); }, 300);
  }, 1400);
}

// ---------- render product grid ----------
function renderSneakers(sneakers) {
  const container = document.getElementById("all-products");
  if (!container) return;

  container.innerHTML = "";

  if (!Array.isArray(sneakers) || sneakers.length === 0) {
    container.innerHTML = `
      <div style='text-align:center; padding:60px; color:#999; grid-column:1/-1;'>
        <div style='font-size:3rem; margin-bottom:12px;'>👟</div>
        <p>No sneakers found. Try a different search or filter.</p>
      </div>
    `;
    return;
  }

  sneakers.forEach((sneaker, index) => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <a href="product.html?brand=${encodeURIComponent(sneaker.brand)}&id=${encodeURIComponent(sneaker.id)}" style="text-decoration:none; color:inherit;">
        <img src="${sneaker.image}" alt="${escapeHtml(sneaker.alt)}" loading="lazy" />
          <div class="brand">${escapeHtml(sneaker.brand)}</div>
          <h3>${escapeHtml(sneaker.title)}</h3>
        <div style="font-size:0.95rem; color:#bbb; margin-bottom:4px;">${escapeHtml(sneaker.alt)}</div>
      </a>
      <p class="price">₹${Number(sneaker.price).toLocaleString()}</p>
      <p style="color: rgba(255,255,255,0.7); font-size:0.9rem; margin:10px 0;">${escapeHtml(sneaker.description || '')}</p>
      <button class="card-add-btn" data-id="${sneaker.id}">Add to Cart</button>
    `;
// ...existing code...
    container.appendChild(card);

    // stagger animation (if CSS uses .show)
    setTimeout(() => card.classList.add('show'), index * 80);
  });

  // attach listeners for add buttons
  container.querySelectorAll('.card-add-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const id = Number(e.currentTarget.dataset.id);
      addToCart(e, id);
    });
  });
}

// small HTML-escape helper
function escapeHtml(str) {
  return String(str || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

// ---------- add to cart (single canonical function) ----------
/**
 * addToCart(e, sneakerId, options)
 * e: event (optional)
 * sneakerId: number
 * options: { size, color, qty }
 */
function addToCart(e = null, sneakerId, options = {}) {
  // find button element (if any)
  const btn = e && e.currentTarget ? e.currentTarget : (e && e.target) ? e.target.closest('button') : null;

  const source = (Array.isArray(allSneakers) && allSneakers.length) ? allSneakers : sneakerData;
  const sneaker = source.find(s => s.id === Number(sneakerId));
  if (!sneaker) {
    console.warn('addToCart: sneaker not found', sneakerId);
    if (btn) showInlineBubble(btn, 'Product not found');
    return;
  }

  loadCartFromStorage(); // keep local cart in sync with storage

  const size = options.size ?? null;
  const color = options.color ?? null;
  const qty = options.qty && Number.isFinite(Number(options.qty)) ? Math.max(1, parseInt(options.qty, 10)) : 1;

  // find existing item with same id + size + color
  const existingIndex = cart.findIndex(item =>
    item.id === sneaker.id &&
    (item.size ?? null) === size &&
    (item.color ?? null) === color
  );

  if (existingIndex > -1) {
    cart[existingIndex].qty = (cart[existingIndex].qty || 1) + qty;
  } else {
    cart.push({
      id: sneaker.id,
      title: sneaker.title,
      brand: sneaker.brand,
      price: sneaker.price,
      size: size,
      color: color,
      qty: qty,
      image: (sneaker.images && sneaker.images[0]) || sneaker.image
    });
  }

  saveCartToStorage();

  // visual feedback
  if (btn) {
    btn.disabled = true;
    btn.dataset.origText = btn.textContent;
    btn.textContent = 'Added ✓';
    btn.style.transform = 'scale(0.97)';
    btn.style.background = 'linear-gradient(45deg,#51cf66,#40c057)';
    btn.style.color = '#000';
  }

  if (typeof showToast === 'function') {
    showToast(`Added ${sneaker.title} to cart ✔`, 1400);
  } else if (btn) {
    showInlineBubble(btn, `Added ${sneaker.title}`);
  }

  // revert button after short delay
  setTimeout(() => {
    if (btn) {
      btn.disabled = false;
      btn.textContent = btn.dataset.origText || 'Add to Cart';
      btn.style.transform = '';
      btn.style.background = '';
      btn.style.color = '';
    }
  }, 1200);

  // update cart UI components if present
  renderCart();
  if (typeof renderCartPage === 'function') renderCartPage();
}

// ---------- remove from cart ----------
function removeFromCart(index) {
  index = Number(index);
  if (!Number.isFinite(index)) return;
  loadCartFromStorage();
  const removed = cart.splice(index, 1)[0];
  saveCartToStorage();
  renderCart();
  if (typeof renderCartPage === 'function') renderCartPage();
  if (removed) showToast(`Removed ${removed.title} from cart`, 1500);
}

// ---------- render small cart (sidebar) ----------
function renderCart() {
  const container = document.getElementById("cart-items");
  const totalPriceElem = document.getElementById("cart-total");
  if (!container) return;

  container.innerHTML = '';
  let total = 0;

  loadCartFromStorage();

  cart.forEach((item, index) => {
    total += (Number(item.price) || 0) * (item.qty || 1);
    const div = document.createElement('div');
    div.className = 'cart-item';
    div.innerHTML = `
      <div style="flex:1;">
        <strong>${escapeHtml(item.title)}</strong><br>
        <small>${escapeHtml(item.brand)} • ₹${Number(item.price).toLocaleString()} × ${item.qty || 1}</small>
      </div>
      <button class="cart-remove-btn" data-index="${index}">Remove</button>
    `;
    container.appendChild(div);
  });

  if (totalPriceElem) totalPriceElem.innerText = total.toLocaleString();
  updateCartCount();

  // attach remove listeners
  container.querySelectorAll('.cart-remove-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const idx = Number(e.currentTarget.dataset.index);
      removeFromCart(idx);
    });
  });
}

// ---------- cart page render (cart.html) ----------
function renderCartPage() {
  const listContainer = document.getElementById('cart-items-list');
  if (!listContainer) return; // not on cart page

  const emptyState = document.getElementById('empty-cart');
  const summary = document.getElementById('cart-summary');
  const subtotalElem = document.getElementById('cart-subtotal');
  const itemCountElem = document.getElementById('item-count');

  listContainer.innerHTML = '';
  loadCartFromStorage();

  if (!cart || cart.length === 0) {
    if (emptyState) emptyState.style.display = 'block';
    if (summary) summary.style.display = 'none';
    if (subtotalElem) subtotalElem.textContent = '0';
    if (itemCountElem) itemCountElem.textContent = '0';
    return;
  } else {
    if (emptyState) emptyState.style.display = 'none';
    if (summary) summary.style.display = 'block';
  }

  let subtotal = 0;
  let totalItems = 0;
  cart.forEach((item, index) => {
    const itemTotal = (Number(item.price) || 0) * (item.qty || 1);
    subtotal += itemTotal;
    totalItems += (item.qty || 1);
    const div = document.createElement('div');
    div.className = 'cart-item';
    div.innerHTML = `
      <img src="${item.image}" alt="${escapeHtml(item.title)}" style="width:80px; height:80px; object-fit:cover; margin-right:12px;">
      <div class="cart-item-details">
        <h4>${escapeHtml(item.title)}</h4>
        <p>${escapeHtml(item.brand)} • Qty: ${item.qty || 1}</p>
        <p><strong>₹${Number(item.price).toLocaleString()} × ${item.qty || 1} = ₹${itemTotal.toLocaleString()}</strong></p>
        <button class="remove-btn" data-index="${index}">Remove</button>
      </div>
    `;
    listContainer.appendChild(div);
  });

  if (subtotalElem) subtotalElem.textContent = subtotal.toLocaleString();
  if (itemCountElem) itemCountElem.textContent = totalItems;

  listContainer.querySelectorAll('.remove-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const idx = Number(e.currentTarget.dataset.index);
      removeFromCart(idx);
      renderCartPage(); // re-render
    });
  });
}

// ---------- search ----------
function setupSearch() {
  const searchBar = document.getElementById('searchBar');
  const searchBtn = document.getElementById('searchBtn');
  if (!searchBar) return;

  function performSearch() {
    const query = searchBar.value.toLowerCase().trim();
    if (query === '') {
      renderSneakers(filteredSneakers);
      return;
    }

    const results = filteredSneakers.filter(s =>
      (s.title || '').toLowerCase().includes(query) ||
      (s.brand || '').toLowerCase().includes(query) ||
      (s.category || '').toLowerCase().includes(query) ||
      (s.description || '').toLowerCase().includes(query)
    );

    renderSneakers(results);
    if (results.length === 0) showToast('No sneakers found for your search 👟', 1800);
    else showToast(`Found ${results.length} sneakers`, 1200);
  }

  searchBar.addEventListener('input', performSearch);
  if (searchBtn) searchBtn.addEventListener('click', performSearch);
  searchBar.addEventListener('keypress', (e) => { if (e.key === 'Enter') performSearch(); });
}

// ---------- navigation / category filtering ----------
function setupNavFiltering() {
  const navLinks = document.querySelectorAll(".nav-menu a");
  if (!navLinks) return;

  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      navLinks.forEach(l => l.classList.remove('active'));
      link.classList.add('active');

      const category = link.getAttribute('data-category');
      const brand = link.getAttribute('data-brand');

      const sectionTitle = document.querySelector('.category-section h2');

      let filtered = allSneakers.slice();

      if (category === 'all' || (!category && !brand)) {
        filtered = allSneakers.slice();
        if (sectionTitle) sectionTitle.textContent = 'Latest Drops';
        showToast('Showing all sneakers 👟', 1200);
      } else if (brand) {
        filtered = allSneakers.filter(s => Array.isArray(s.tab) ? s.tab.includes(brand) : s.tab === brand);
        if (sectionTitle) {
          const pretty = brand.charAt(0).toUpperCase() + brand.slice(1);
          sectionTitle.textContent = brand === 'indian' ? 'Indian Brands' : (brand === 'sustainable' ? 'Sustainable Sneakers' : `${pretty} Sneakers`);
        }
        showToast(`Showing ${link.textContent.trim()} (${filtered.length} items)`, 1200);
      } else if (category) {
        filtered = allSneakers.filter(s => (s.category || '').toLowerCase() === category.toLowerCase());
        if (sectionTitle) sectionTitle.textContent = `${category.charAt(0).toUpperCase() + category.slice(1)}`;
        showToast(`Showing ${category} (${filtered.length} items)`, 1200);
      }

      filteredSneakers = filtered;
      renderSneakers(filtered);
      const sb = document.getElementById('searchBar');
      if (sb) sb.value = '';
    });
  });

  if (navLinks.length > 0) navLinks[0].classList.add('active');
}

// ---------- slideshow ----------
let currentSlide = 0;
let slideInterval = null;
const heroSlides = [
  { image: "https://images.unsplash.com/photo-1556906781-9a412961c28c?w=1200&h=600&fit=crop", text: "Step Into Greatness - Jordan Collection" },
  { image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=1200&h=600&fit=crop", text: "Just Do It - Nike Premium Line" },
  { image: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=1200&h=600&fit=crop", text: "Impossible Is Nothing - Adidas" }
];

function setupSlideshow() {
  const slider = document.getElementById("slider");
  const controlsContainer = document.getElementById('slideControls');
  if (!slider || !controlsContainer) return;

  slider.innerHTML = '';
  controlsContainer.innerHTML = '';

  heroSlides.forEach((slide, idx) => {
    const slideDiv = document.createElement('div');
    slideDiv.className = idx === 0 ? 'slide active' : 'slide';
    slideDiv.innerHTML = `
      <img src="${slide.image}" alt="Hero ${idx+1}" />
      <div class="slide-text">${escapeHtml(slide.text)}</div>
    `;
    slider.appendChild(slideDiv);

    const dot = document.createElement('div');
    dot.className = `slide-dot ${idx === 0 ? 'active' : ''}`;
    dot.addEventListener('click', () => goToSlide(idx));
    controlsContainer.appendChild(dot);
  });

  const prevBtn = document.getElementById('prevSlide');
  const nextBtn = document.getElementById('nextSlide');
  if (prevBtn) prevBtn.onclick = prevSlide;
  if (nextBtn) nextBtn.onclick = nextSlide;

  if (slideInterval) clearInterval(slideInterval);
  slideInterval = setInterval(nextSlide, 5000);

  const slideshowEl = document.querySelector('.slideshow');
  if (slideshowEl) {
    slideshowEl.addEventListener('mouseenter', () => clearInterval(slideInterval));
    slideshowEl.addEventListener('mouseleave', () => { slideInterval = setInterval(nextSlide, 5000); });
  }
}

function goToSlide(index) {
  const slides = document.querySelectorAll('.slide');
  const dots = document.querySelectorAll('.slide-dot');
  if (!slides.length) return;

  slides[currentSlide].classList.remove('active');
  if (dots[currentSlide]) dots[currentSlide].classList.remove('active');

  currentSlide = index % slides.length;

  slides[currentSlide].classList.add('active');
  if (dots[currentSlide]) dots[currentSlide].classList.add('active');
}

function nextSlide() { goToSlide((currentSlide + 1) % document.querySelectorAll('.slide').length); }
function prevSlide() { goToSlide((currentSlide - 1 + document.querySelectorAll('.slide').length) % document.querySelectorAll('.slide').length); }

// ---------- user / navbar ----------
function updateNavbarUser() {
  const currentUser = JSON.parse(localStorage.getItem("loggedInUser"));
  const profileLink = document.getElementById("profile-link");
  const loginLink = document.getElementById("login-link");
  const signupLink = document.getElementById("signup-link");

  if (currentUser && profileLink) {
    profileLink.textContent = currentUser.username;
    profileLink.style.display = "inline-block";
    if (loginLink) loginLink.style.display = "none";
    if (signupLink) signupLink.style.display = "none";
  } else {
    if (profileLink) profileLink.style.display = "none";
    if (loginLink) loginLink.style.display = "inline-block";
    if (signupLink) signupLink.style.display = "inline-block";
  }
}

function logout() {
  localStorage.removeItem("loggedInUser");
  showToast('Logged out successfully! 👋', 1500);
  setTimeout(() => location.reload(), 900);
}

// ---------- keyboard shortcuts & misc ----------
function setupShortcuts() {
  document.addEventListener('keydown', (e) => {
    if (e.key === 's' || e.key === 'S') {
      if (e.target.tagName !== 'INPUT') {
        e.preventDefault();
        const sb = document.getElementById('searchBar'); if (sb) sb.focus();
      }
    }
    if (e.key === 'c' || e.key === 'C') {
      if (e.target.tagName !== 'INPUT') {
        e.preventDefault();
        const toggle = document.getElementById('cart-toggle');
        if (toggle) toggle.click();
      }
    }
    if (e.key === 'Escape') {
      const sidebar = document.getElementById('cart-sidebar');
      if (sidebar) sidebar.classList.remove('open');
      document.body.classList.remove('cart-open');
    }
  });
}

// smooth scroll anchors
function setupSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
}

// Navbar color on scroll (safe guards)
function setupScrollEffects() {
  window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (!navbar) return;
    if (window.scrollY > 100) {
      navbar.style.background = 'rgba(0,0,0,0.95)';
      navbar.style.backdropFilter = 'blur(20px)';
    } else {
      navbar.style.background = 'rgba(0,0,0,0.9)';
      navbar.style.backdropFilter = 'blur(20px)';
    }
  });
}

// ---------- initialization ----------
function init() {
  // load data
  allSneakers = sneakerData.slice();
  filteredSneakers = allSneakers.slice();
  loadCartFromStorage();

  // update UI & features
  updateNavbarUser();
  updateCartCount();
  renderSneakers(allSneakers);
  renderCart();        // small cart (sidebar)
  renderCartPage();    // if on cart page
  setupSlideshow();
  setupSearch();
  setupNavFiltering();
  setupShortcuts();
  setupSmoothScroll();
  setupScrollEffects();

  // welcome toast (only on index)
  if (document.getElementById('all-products')) showToast('Welcome to LaceUp! 👟', 1800);
}

// run init after DOM ready
document.addEventListener('DOMContentLoaded', init);


document.addEventListener("DOMContentLoaded", () => {
  const themeToggle = document.getElementById("themeToggle");
  if (themeToggle) {
    const currentTheme = localStorage.getItem("theme");

    if (currentTheme === "light") {
      document.body.classList.add("light-theme");
      themeToggle.textContent = "🌙";
    } else {
      themeToggle.textContent = "☀️";
    }

    themeToggle.addEventListener("click", () => {
      document.body.classList.toggle("light-theme");
      if (document.body.classList.contains("light-theme")) {
        localStorage.setItem("theme", "light");
        themeToggle.textContent = "🌙";
      } else {
        localStorage.setItem("theme", "dark");
        themeToggle.textContent = "☀️";
      }
    });
  }
});
