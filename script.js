// Sneaker data and cart logic
let cart = JSON.parse(localStorage.getItem('sneakCart') || '[]');
let allSneakers = [];
let filteredSneakers = [];


// Sneaker database with trendy models
const sneakerData = [
  // Men
  {
    id: 1,
    title: "Converse Chuck Taylor All Star",
    brand: "Converse",
    price: 3499,
    category: "basketball",
    tab: ["men"],
    image: "https://res.cloudinary.com/dqka2nzzx/image/upload/w_400,h_300,c_fill/v1754684269/m9160c_a_107x1_hg6kyr.jpg",
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
    description: "Made with recycled ocean plastic—eco-conscious collab"
  },
  {
    id: 25,
    title: "Premium Shoe Cleaner Kit",
    brand: "Crep Protect",
    price: 1999,
    category: "cleaning",
    tab: ["accessories"],
    image: "https://res.cloudinary.com/dqka2nzzx/image/upload/w_400,h_300,c_fill/v1754685496/657fc1fcfa9ef71e3a4d2b48-crep-protect-shoe-cleaner-kit-cure_rftvxd.jpg",
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
    description: "Transparent stackable case for dust-free sneaker storage"
  },
];


// Initialize app
document.addEventListener('DOMContentLoaded', () => {
  allSneakers = sneakerData;
  filteredSneakers = allSneakers;
  updateCartCount();
  renderCart();
  showToast('Welcome to LaceUp! 👟', 3000);

  
  // Load sneakers with animation
  setTimeout(() => {
    renderSneakers(allSneakers);
    setupSlideshow();
    setupSearch();
    setupNavFiltering();
  }, 500);
});


// Cart functionality
function updateCartCount() {
  document.getElementById("cart-count").innerText = cart.length;
}

function saveCart() {
  localStorage.setItem("sneakCart", JSON.stringify(cart));
  updateCartCount();
  renderCart();
}

function renderCart() {
  const container = document.getElementById("cart-items");
  const totalPrice = document.getElementById("cart-total");
  container.innerHTML = '';
  let total = 0;

  cart.forEach((item, index) => {
    total += item.price;
    const div = document.createElement("div");
    div.className = "cart-item";
    div.innerHTML = `
      <div>
        <strong>${item.title}</strong><br>
        <small>${item.brand} • ₹${item.price}</small>
      </div>
      <button onclick="removeFromCart(${index})">Remove</button>
    `;
    container.appendChild(div);
  });

  totalPrice.innerText = total.toLocaleString();
}

function removeFromCart(index) {
  const removedItem = cart[index];
  cart.splice(index, 1);
  saveCart();
  showToast(`Removed ${removedItem.title} from cart`, 2000);
}

// Cart toggle
document.getElementById('cart-toggle').onclick = () => {
  document.getElementById('cart-sidebar').classList.add('open');
  document.body.classList.add('cart-open');
};

document.getElementById('close-cart').onclick = () => {
  document.getElementById('cart-sidebar').classList.remove('open');
  document.body.classList.remove('cart-open');
};

// Close cart when clicking outside
document.addEventListener('click', (e) => {
  const cartSidebar = document.getElementById('cart-sidebar');
  const cartToggle = document.getElementById('cart-toggle');
  
  if (!cartSidebar.contains(e.target) && !cartToggle.contains(e.target)) {
    cartSidebar.classList.remove('open');
    document.body.classList.remove('cart-open');
  }
});

// Render sneakers with animations
function renderSneakers(sneakers) {
  const container = document.getElementById("all-products");
  container.innerHTML = "";

  if (sneakers.length === 0) {
    container.innerHTML = `
      <div style='text-align: center; font-size: 1.2rem; color: #666; padding: 60px; grid-column: 1/-1;'>
        <div style='font-size: 4rem; margin-bottom: 20px;'>👟</div>
        <p>No sneakers found. Try a different search or filter.</p>
      </div>
    `;
    return;
  }

  sneakers.forEach((sneaker, index) => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
  card.innerHTML = `
  <a href="product.html?id=${sneaker.id}">
    <img src="${sneaker.image}" alt="${sneaker.title}" loading="lazy" />
    <div class="brand">${sneaker.brand}</div>
    <h3>${sneaker.title}</h3>
  </a>
  <p class="price">₹${sneaker.price.toLocaleString()}</p>
  <p style="color: rgba(255,255,255,0.7); font-size: 0.9rem; margin: 10px 0;">${sneaker.description}</p>
  <button onclick="addToCart(${sneaker.id})">Add to Cart 🛒</button>
`;


    container.appendChild(card);
    
    // Stagger animation
    setTimeout(() => {
      card.classList.add('show');
    }, index * 100);
  });
}

// Add to cart with animation
function addToCart(sneakerId) {
  const sneaker = allSneakers.find(s => s.id === sneakerId);
  if (sneaker) {
    cart.push(sneaker);
    saveCart();
    showToast(`Added ${sneaker.title} to cart! 🔥`, 2000);
    
    // Button animation
    const button = event.target;
    const originalText = button.textContent;
    button.style.transform = 'scale(0.95)';
    button.textContent = 'Added! ✓';
    button.style.background = 'linear-gradient(45deg, #51cf66, #40c057)';
    
    setTimeout(() => {
      button.style.transform = 'scale(1)';
      button.textContent = originalText;
      button.style.background = 'linear-gradient(45deg, #ff6b35, #f7931e)';
    }, 1500);
  }
}

// Slideshow functionality
let currentSlide = 0;
let slideInterval;

const heroSlides = [
  {
    image: "https://images.unsplash.com/photo-1556906781-9a412961c28c?w=1200&h=600&fit=crop",
    text: "Step Into Greatness - Jordan Collection"
  },
  {
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=1200&h=600&fit=crop",
    text: "Just Do It - Nike Premium Line"
  },
  {
    image: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=1200&h=600&fit=crop",
    text: "Impossible Is Nothing - Adidas"
  }
];

function setupSlideshow() {
  const slider = document.getElementById("slider");
  const controlsContainer = document.getElementById('slideControls');
  
  // Clear existing slides except the first one
  slider.innerHTML = '';
  controlsContainer.innerHTML = '';
  
  // Add hero slides
  heroSlides.forEach((slide, index) => {
    const slideDiv = document.createElement("div");
    slideDiv.className = index === 0 ? "slide active" : "slide";
    slideDiv.innerHTML = `
      <img src="${slide.image}" alt="Hero ${index + 1}" />
      <div class="slide-text">${slide.text}</div>
    `;
    slider.appendChild(slideDiv);
    
    // Add control dot
    const dot = document.createElement('div');
    dot.className = `slide-dot ${index === 0 ? 'active' : ''}`;
    dot.onclick = () => goToSlide(index);
    controlsContainer.appendChild(dot);
  });
  
  // Navigation buttons
  document.getElementById('prevSlide').onclick = prevSlide;
  document.getElementById('nextSlide').onclick = nextSlide;
  
  // Auto-advance
  slideInterval = setInterval(nextSlide, 5000);
  
  // Pause on hover
  const slideshow = document.querySelector('.slideshow');
  slideshow.onmouseenter = () => clearInterval(slideInterval);
  slideshow.onmouseleave = () => {
    slideInterval = setInterval(nextSlide, 5000);
  };
}

function goToSlide(index) {
  const slides = document.querySelectorAll(".slide");
  const dots = document.querySelectorAll(".slide-dot");
  
  slides[currentSlide].classList.remove("active");
  dots[currentSlide].classList.remove("active");
  
  currentSlide = index;
  
  slides[currentSlide].classList.add("active");
  dots[currentSlide].classList.add("active");
}

function nextSlide() {
  const slides = document.querySelectorAll(".slide");
  const nextIndex = (currentSlide + 1) % slides.length;
  goToSlide(nextIndex);
}

function prevSlide() {
  const slides = document.querySelectorAll(".slide");
  const prevIndex = (currentSlide - 1 + slides.length) % slides.length;
  goToSlide(prevIndex);
}

// Search functionality
function setupSearch() {
  const searchBar = document.getElementById('searchBar');
  const searchBtn = document.getElementById('searchBtn');
  
  function performSearch() {
    const query = searchBar.value.toLowerCase().trim();
    
    if (query === '') {
      renderSneakers(filteredSneakers);
      return;
    }
    
    const searchResults = filteredSneakers.filter(sneaker => 
      sneaker.title.toLowerCase().includes(query) ||
      sneaker.brand.toLowerCase().includes(query) ||
      sneaker.category.toLowerCase().includes(query) ||
      sneaker.description.toLowerCase().includes(query)
    );
    
    renderSneakers(searchResults);
    
    if (searchResults.length === 0) {
      showToast('No sneakers found for your search 👟', 2000);
    } else {
      showToast(`Found ${searchResults.length} sneakers`, 1500);
    }
  }
  
  searchBar.addEventListener('input', performSearch);
  searchBtn.addEventListener('click', performSearch);
  
  searchBar.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      performSearch();
    }
  });
}

// Navigation filtering
function setupNavFiltering() {
  const navLinks = document.querySelectorAll(".nav-menu a");

  navLinks.forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      
      // Remove active class from all links
      navLinks.forEach(l => l.classList.remove('active'));
      link.classList.add('active');
      
      const category = link.getAttribute("data-category");
      const brand = link.getAttribute("data-brand");
      const linkText = link.textContent;
      
      // Update section title
      const sectionTitle = document.querySelector('.category-section h2');
      
      let filtered = [];
      
      if (category === "all") {
        filtered = allSneakers;
        sectionTitle.textContent = 'Latest Drops';
        showToast('Showing all sneakers 👟', 1500);
      } 
      else if (brand === "men") {
        filtered = allSneakers.filter(s => Array.isArray(s.tab) ? s.tab.includes("men") : s.tab === "men");;
        sectionTitle.textContent = "Men's Sneakers";
        showToast(`Showing mMn's sneakers (${filtered.length} items)`, 2000);
      } 
      else if (brand === "women") {
        filtered = allSneakers.filter(s => Array.isArray(s.tab) ? s.tab.includes("women") : s.tab === "women");;
        sectionTitle.textContent = "Women's Sneakers";
        showToast(`Showing Women's sneakers (${filtered.length} items)`, 2000);
      }
      else if (brand === "kids") {
        filtered = allSneakers.filter(s => Array.isArray(s.tab) ? s.tab.includes("kids") : s.tab === "kids");;
        sectionTitle.textContent = "Kid's Sneakers";
        showToast(`Showing Kid's sneakers (${filtered.length} items)`, 2000);
      }
      else if (brand === "sustainable") {
        filtered = allSneakers.filter(s => Array.isArray(s.tab) ? s.tab.includes("sustainable") : s.tab === "sustainable");;
        sectionTitle.textContent = "Sustainable Sneakers";
        showToast(`Showing Sustainable sneakers (${filtered.length} items)`, 2000);
      }
      else if (brand === "indian") {
        filtered = allSneakers.filter(s => Array.isArray(s.tab) ? s.tab.includes("indian") : s.tab === "indian");;
        sectionTitle.textContent = "Indian Brands";
        showToast(`Showing Indian sneakers (${filtered.length} items)`, 2000);
      }
      else if (brand === "accessories") {
        filtered = allSneakers.filter(s => Array.isArray(s.tab) ? s.tab.includes("accessories") : s.tab === "accessories");;
        sectionTitle.textContent = "Accessories";
        showToast(`Showing Sneaker Accessories (${filtered.length} items)`, 2000);
      }

      filteredSneakers = filtered;
      renderSneakers(filtered);
      
      // Clear search
      document.getElementById('searchBar').value = '';
    });
  });
  
  // Set first link as active
  if (navLinks.length > 0) {
    navLinks[0].classList.add('active');
  }
}

// Toast notification system
function showToast(message, duration = 3000) {
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = message;
  document.body.appendChild(toast);
  
  setTimeout(() => toast.classList.add('show'), 100);
  
  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => {
      if (document.body.contains(toast)) {
        document.body.removeChild(toast);
      }
    }, 300);
  }, duration);
}

// User authentication display
const userInfo = document.getElementById("user-info");
const loginLink = document.getElementById("login-link");
const signupLink = document.getElementById("signup-link");
const profileLink = document.getElementById("profile-link");
const user = JSON.parse(localStorage.getItem("loggedInUser"));

if (user && userInfo) {
  userInfo.innerHTML = `
    <span style="color: #ff6b35; font-weight: 600;">👤 ${user.username}</span>
    <button onclick="logout()" style="margin-left: 15px; background: linear-gradient(45deg, #ff4757, #ff3742); color: white; border: none; padding: 8px 15px; border-radius: 20px; cursor: pointer; font-size: 12px; font-weight: 600;">Logout</button>
  `;
  loginLink.style.display = "none";
  signupLink.style.display = "none";
  if (profileLink) profileLink.style.display = "inline-block";
}

function logout() {
  localStorage.removeItem("loggedInUser");
  showToast('Logged out successfully! 👋', 2000);
  setTimeout(() => location.reload(), 1000);
}

// Smooth scroll for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Add some dynamic effects
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 100) {
    navbar.style.background = 'rgba(0, 0, 0, 0.95)';
    navbar.style.backdropFilter = 'blur(20px)';
  } else {
    navbar.style.background = 'rgba(0, 0, 0, 0.9)';
    navbar.style.backdropFilter = 'blur(20px)';
  }
});

// Keyboard shortcuts
document.addEventListener('keydown', (e) => {
  // Press 'S' to focus search
  if (e.key === 's' || e.key === 'S') {
    if (e.target.tagName !== 'INPUT') {
      e.preventDefault();
      document.getElementById('searchBar').focus();
    }
  }
  
  // Press 'C' to toggle cart
  if (e.key === 'c' || e.key === 'C') {
    if (e.target.tagName !== 'INPUT') {
      e.preventDefault();
      document.getElementById('cart-toggle').click();
    }
  }
  
  // Press Escape to close cart
  if (e.key === 'Escape') {
    document.getElementById('cart-sidebar').classList.remove('open');
    document.body.classList.remove('cart-open');
  }
});
