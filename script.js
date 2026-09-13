let wishlistItems = [];
let cartItems = [];
let allProducts = [];
let selectedCategory = null;
const categories = ['Home Decor', 'Jewelry', 'Clothing', 'Beauty & Wellness', 'Art & Craft', 'Gifts'];
const localProductNames = {
    'Home Decor': ['Woven Wall Basket', 'Ceramic Table Vase', 'Macrame Plant Hanger', 'Painted Candle Holder', 'Wooden Serving Tray'],
    'Jewelry': ['Beaded Statement Necklace', 'Silver Earrings', 'Clay Floral Bracelet', 'Brass Sun Pendant', 'Pearl Threader Rings'],
    'Clothing': ['Block Print Kurta', 'Handwoven Linen Scarf', 'Embroidered Tote Bag', 'Indigo Wrap Skirt', 'Crochet Summer Shawl'],
    'Beauty & Wellness': ['Lavender Bath Salts', 'Rosemary Soy Candle', 'Herbal Lip Balm Set', 'Aloe Vera Soap Bar', 'Calming Tea Blend'],
    'Art & Craft': ['Botanical Art Print', 'Hand-carved Clay Bowl', 'Pressed Flower Frame', 'Loom-woven Art Panel', 'Handmade Sketchbook'],
    'Gifts': ['Artisan Gift Hamper', 'Personalized Mug Set', 'Festive Scented Box', 'Thank-you Card Set', 'Mini Maker Gift Box']
};
const localProductImageUrls = [
    'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80&sig=1',
    'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?auto=format&fit=crop&w=900&q=80&sig=2',
    'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&w=900&q=80&sig=3',
    'https://images.unsplash.com/photo-1602872029708-84d970d3386b?auto=format&fit=crop&w=900&q=80&sig=4',
    'https://images.unsplash.com/photo-1517705008128-361805f42e86?auto=format&fit=crop&w=900&q=80&sig=5',
    'https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=900&q=80&sig=6',
    'https://images.unsplash.com/photo-1535632787350-4e68ef0ac584?auto=format&fit=crop&w=900&q=80&sig=7',
    'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80&sig=8',
    'https://images.unsplash.com/photo-1483985988352-9fda53b7c9da?auto=format&fit=crop&w=900&q=80&sig=9',
    'https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=900&q=80&sig=10',
    'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=900&q=80&sig=11',
    'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&w=900&q=80&sig=12',
    'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=900&q=80&sig=13',
    'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&w=900&q=80&sig=14',
    'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80&sig=15',
    'https://images.unsplash.com/photo-1517841905240-472988c247ac?auto=format&fit=crop&w=900&q=80&sig=16',
    'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=900&q=80&sig=17',
    'https://images.unsplash.com/photo-1528747045269-390fe33c19f2?auto=format&fit=crop&w=900&q=80&sig=18',
    'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=900&q=80&sig=19',
    'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=900&q=80&sig=20',
    'https://images.unsplash.com/photo-1516979187454-437ec8c24f0b?auto=format&fit=crop&w=900&q=80&sig=21',
    'https://images.unsplash.com/photo-1521590832167-7b6d52c3f490?auto=format&fit=crop&w=900&q=80&sig=22',
    'https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=900&q=80&sig=23',
    'https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=900&q=80&sig=24',
    'https://images.unsplash.com/photo-1523224042828-3c8d7c2c5d36?auto=format&fit=crop&w=900&q=80&sig=25',
    'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=900&q=80&sig=26',
    'https://images.unsplash.com/photo-1522335789354-973b6f5d8ac3?auto=format&fit=crop&w=900&q=80&sig=27',
    'https://images.unsplash.com/photo-1515886653814-1f4f22f1c79a?auto=format&fit=crop&w=900&q=80&sig=28',
    'https://images.unsplash.com/photo-1491553895973-5c2a3d6e9f5c?auto=format&fit=crop&w=900&q=80&sig=29',
    'https://images.unsplash.com/photo-1527554197671-6f8e4a350f97?auto=format&fit=crop&w=900&q=80&sig=30'
];
const localProducts = categories.flatMap((category, categoryIndex) =>
    localProductNames[category].map((name, productIndex) => ({
        id: `${categoryIndex + 1}-${productIndex + 1}`,
        name,
        category,
        description: `Thoughtfully made ${category.toLowerCase()} piece from our makers.`,
        price: 499 + categoryIndex * 175 + productIndex * 125,
        stock: 10,
        image_url: localProductImageUrls[categoryIndex * 5 + productIndex]
    }))
);
const productsEndpoint = 'http://127.0.0.1:8000/api/products?limit=100';
const STORAGE_KEYS = {
    wishlist: 'handmadeBlissWishlist',
    cart: 'handmadeBlissCart'
};

function readStoredList(key) {
    try {
        const data = localStorage.getItem(key);
        if (!data) {
            return [];
        }
        const parsed = JSON.parse(data);
        return Array.isArray(parsed) ? parsed : [];
    } catch (error) {
        console.error(`Unable to parse ${key}:`, error);
        return [];
    }
}

function saveStoredList(key, items) {
    localStorage.setItem(key, JSON.stringify(items));
}

wishlistItems = readStoredList(STORAGE_KEYS.wishlist);
cartItems = readStoredList(STORAGE_KEYS.cart);

document.addEventListener('DOMContentLoaded', () => {
    const categoryToggle = document.querySelector('.category-toggle');
    const categoryMenu = document.querySelector('.category-menu');

    if (categoryToggle && categoryMenu) {
        categoryToggle.addEventListener('click', () => {
            const isOpen = categoryMenu.classList.toggle('open');
            categoryToggle.setAttribute('aria-expanded', String(isOpen));
        });

        document.addEventListener('click', event => {
            if (!categoryMenu.contains(event.target)) {
                categoryMenu.classList.remove('open');
                categoryToggle.setAttribute('aria-expanded', 'false');
            }
        });

        document.addEventListener('keydown', event => {
            if (event.key === 'Escape') {
                categoryMenu.classList.remove('open');
                categoryToggle.setAttribute('aria-expanded', 'false');
                categoryToggle.focus();
            }
        });
    }

    const productForm = document.getElementById('productForm');
    if (productForm) {
        productForm.addEventListener('submit', submitProduct);
    }

    if (document.getElementById('productsGrid')) {
        loadProducts();
    }

    if (document.getElementById('productDetailContainer')) {
        loadProductDetailPage();
    }

    if (document.getElementById('wishlistContent')) {
        updateWishlistDisplay();
    }

    if (document.getElementById('cartContent')) {
        updateCartDisplay();
    }

    if (document.getElementById('profileStats')) {
        updateProfileStats();
    }
});

async function fetchProducts() {
    try {
        const response = await fetch(productsEndpoint);
        if (!response.ok) {
            throw new Error(`Request failed with status ${response.status}`);
        }

        const data = await response.json();
        if (Array.isArray(data)) {
            return data;
        }
        if (Array.isArray(data.products)) {
            return data.products;
        }
        if (Array.isArray(data.results)) {
            return data.results;
        }

        throw new Error('API response did not contain a valid product array.');
    } catch (error) {
        console.error('Unable to load products from API. Using local catalog fallback:', error);
        return localProducts;
    }
}

async function loadProducts() {
    const productsGrid = document.getElementById('productsGrid');
    const productsStatus = document.getElementById('productsStatus');

    if (!productsGrid || !productsStatus) {
        return;
    }

    try {
        const products = await fetchProducts();
        allProducts = products;

        const categoryQuery = new URLSearchParams(window.location.search).get('category');
        if (categoryQuery) {
            selectedCategory = categoryQuery;
            const filteredProducts = products.filter(product =>
                normalizeCategory(product.category) === normalizeCategory(categoryQuery)
            );
            renderProducts(filteredProducts);
            return;
        }

        selectedCategory = 'all';
        renderProducts(products);
    } catch (error) {
        console.error('Unable to load products:', error);
        productsStatus.textContent = 'Unable to load products right now. Please try again later.';
        productsStatus.classList.add('error');
        productsGrid.innerHTML = '';
    }
}

function normalizeCategory(category) {
    return String(category || '').trim().toLowerCase();
}

function getProductImageUrl(imageUrl) {
    if (typeof imageUrl !== 'string' || !imageUrl.trim()) {
        return '';
    }

    try {
        return new URL(imageUrl.trim(), productsEndpoint).href;
    } catch (error) {
        return imageUrl.trim();
    }
}

function escapeHtml(value) {
    return String(value).replace(/[&<>"']/g, character => ({
        '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
    }[character]));
}

function escapeForAttribute(value) {
    return String(value).replace(/[\\']/g, character => `\\${character}`);
}

function normalizeProductEntry(product) {
    const id = String(product.id ?? product._id ?? product.slug ?? product.name ?? '').trim();
    const name = String(product.name || 'Handmade product').trim();
    const category = String(product.category || 'Handmade').trim();
    const description = String(product.description || 'Made with care by our artisans.').trim();
    const price = Number(product.price) || 0;
    const stock = Number(product.stock) || 0;
    const image = product.image_url || product.image || product.imageUrl || '';

    return {
        id,
        name,
        category,
        description,
        price,
        stock,
        image_url: image
    };
}

function createProductCard(product) {
    const productData = normalizeProductEntry(product);
    const name = escapeHtml(productData.name);
    const description = escapeHtml(productData.description);
    const category = escapeHtml(productData.category);
    const productId = productData.id || '';
    const imageUrl = getProductImageUrl(productData.image_url);
    const price = Number(productData.price);
    const formattedPrice = Number.isFinite(price) ? price.toFixed(2) : 'Price unavailable';
    const stockValue = Number(productData.stock) || 0;
    const stockLabel = stockValue > 0 ? `${stockValue} available` : 'Out of stock';
    const stockClass = stockValue > 0 ? '' : ' out-of-stock';
    const image = imageUrl
        ? `<img src="${imageUrl}" alt="${name}" onerror="this.parentElement.classList.add('image-fallback'); this.remove();">`
        : '';

    return `
        <article class="product-card" data-product-id="${encodeURIComponent(productId || '')}" tabindex="0" aria-label="View details for ${name}">
            <div class="product-image">${image}<span class="image-fallback-label">Handmade Bliss</span></div>
            <div class="product-card-content">
                <span class="product-category">${category}</span>
                <h2>${name}</h2>
                <p>${description}</p>
                <div class="product-card-footer">
                    <strong>₹${formattedPrice}</strong>
                    <span class="stock-label${stockClass}">${stockLabel}</span>
                </div>
                <div class="product-card-actions">
                    <button type="button" class="btn btn-primary wishlist-add" data-product-id="${encodeURIComponent(productId || '')}" data-product-name="${escapeForAttribute(productData.name)}" data-product-price="${formattedPrice}" data-product-category="${escapeForAttribute(productData.category)}" data-product-image="${escapeForAttribute(productData.image_url || '')}" ${stockValue > 0 ? '' : 'disabled'}>
                        Add to wishlist
                    </button>
                    <button type="button" class="btn btn-secondary cart-add" data-product-id="${encodeURIComponent(productId || '')}" data-product-name="${escapeForAttribute(productData.name)}" data-product-price="${formattedPrice}" data-product-category="${escapeForAttribute(productData.category)}" data-product-image="${escapeForAttribute(productData.image_url || '')}" ${stockValue > 0 ? '' : 'disabled'}>
                        Add to cart
                    </button>
                </div>
            </div>
        </article>
    `;
}

function renderProducts(products) {
    const productsGrid = document.getElementById('productsGrid');
    const productsStatus = document.getElementById('productsStatus');

    if (!productsGrid || !productsStatus) {
        return;
    }

    productsStatus.textContent = products.length === 0
        ? 'No products found in this category.'
        : `${products.length} handmade pieces available`;

    productsGrid.innerHTML = products.map(createProductCard).join('');

    productsGrid.querySelectorAll('.product-card').forEach(card => {
        card.addEventListener('click', event => {
            if (event.target.closest('.wishlist-add') || event.target.closest('.cart-add')) {
                return;
            }

            const productId = card.dataset.productId;
            if (productId) {
                openProductDetail(productId);
            }
        });
    });

    productsGrid.querySelectorAll('.wishlist-add').forEach(button => {
        button.addEventListener('click', (event) => {
            event.stopPropagation();
            const product = {
                id: button.dataset.productId || '',
                name: button.dataset.productName || 'Handmade product',
                category: button.dataset.productCategory || 'Handmade',
                price: Number(button.dataset.productPrice) || 0,
                image_url: button.dataset.productImage || ''
            };
            addToWishlist(product);
        });
    });

    productsGrid.querySelectorAll('.cart-add').forEach(button => {
        button.addEventListener('click', (event) => {
            event.stopPropagation();
            const product = {
                id: button.dataset.productId || '',
                name: button.dataset.productName || 'Handmade product',
                category: button.dataset.productCategory || 'Handmade',
                price: Number(button.dataset.productPrice) || 0,
                image_url: button.dataset.productImage || ''
            };
            addToCart(product);
        });
    });
}

function openProductDetail(productId) {
    if (!productId) {
        return;
    }

    window.location.href = `product-detail.html?id=${encodeURIComponent(productId)}`;
}

async function loadProductDetailPage() {
    const productDetailContainer = document.getElementById('productDetailContainer');
    if (!productDetailContainer) {
        return;
    }

    const productId = new URLSearchParams(window.location.search).get('id');
    if (!productId) {
        productDetailContainer.innerHTML = `
            <div class="detail-empty">
                <h2>Product not found</h2>
                <p>No product was selected. Please return to the catalog.</p>
            </div>
        `;
        return;
    }

    try {
        const products = await fetchProducts();
        const product = products.find(item =>
            String(item.id) === productId ||
            String(item._id) === productId ||
            String(item.slug) === productId
        );

        if (!product) {
            productDetailContainer.innerHTML = `
                <div class="detail-empty">
                    <h2>Product not found</h2>
                    <p>The selected product is unavailable right now.</p>
                </div>
            `;
            return;
        }

        productDetailContainer.innerHTML = renderProductDetail(product);
    } catch (error) {
        console.error('Unable to load product details:', error);
        productDetailContainer.innerHTML = `
            <div class="detail-empty">
                <h2>Unable to load product</h2>
                <p>Please try again later.</p>
            </div>
        `;
    }
}

function renderProductDetail(product) {
    const name = escapeHtml(product.name || 'Handmade product');
    const description = escapeHtml(product.description || 'Made with care by our artisans.');
    const category = escapeHtml(product.category || 'Handmade');
    const imageUrl = getProductImageUrl(product.image_url || product.image || product.imageUrl);
    const price = Number(product.price);
    const formattedPrice = Number.isFinite(price) ? price.toFixed(2) : 'Price unavailable';
    const stockValue = Number(product.stock) || 0;
    const stockLabel = stockValue > 0 ? `${stockValue} available` : 'Out of stock';

    return `
        <section class="product-detail-card">
            <div class="product-detail-layout">
                <div class="product-detail-image-wrap">
                    ${imageUrl ? `<img class="product-detail-image" src="${imageUrl}" alt="${name}">` : '<div class="product-detail-placeholder">Handmade Bliss</div>'}
                </div>
                <div class="product-detail-info">
                    <span class="section-eyebrow">${category}</span>
                    <h1>${name}</h1>
                    <p class="product-detail-price">₹${formattedPrice}</p>
                    <p class="product-detail-stock">${stockLabel}</p>
                    <p class="product-detail-description">${description}</p>
                    <div class="detail-actions">
                        <button type="button" class="btn btn-primary" onclick="addToWishlist('${escapeForAttribute(product.name || 'Handmade product')}', '${formattedPrice}')">Add to wishlist</button>
                        <a class="btn btn-secondary" href="all-products.html">Continue shopping</a>
                    </div>
                </div>
            </div>
        </section>
    `;
}

function openLoginModal() {
    const modal = document.getElementById('loginModal');
    if (modal) {
        modal.style.display = 'block';
        resetLoginForm();
    }
}

function closeLoginModal() {
    const modal = document.getElementById('loginModal');
    if (modal) {
        modal.style.display = 'none';
        resetLoginForm();
    }
}

function resetLoginForm() {
    const step1 = document.getElementById('step1');
    const step2 = document.getElementById('step2');
    const emailPhone = document.getElementById('emailPhone');
    const password = document.getElementById('password');
    const loginTitle = document.getElementById('loginTitle');

    if (step1) step1.classList.add('active');
    if (step2) step2.classList.remove('active');
    if (emailPhone) emailPhone.value = '';
    if (password) password.value = '';
    if (loginTitle) loginTitle.textContent = 'Sign In';
}

function nextStep() {
    const emailPhone = document.getElementById('emailPhone');
    const emailPhoneDisplay = document.getElementById('emailPhoneDisplay');
    const step1 = document.getElementById('step1');
    const step2 = document.getElementById('step2');
    const loginTitle = document.getElementById('loginTitle');

    if (!emailPhone) {
        return;
    }

    const value = emailPhone.value.trim();
    if (!value) {
        alert('Please enter your email or phone number');
        return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) && !/^\d{10}$/.test(value.replace(/[^\d]/g, ''))) {
        alert('Please enter a valid email or phone number');
        return;
    }

    if (emailPhoneDisplay) emailPhoneDisplay.value = value;
    if (step1) step1.classList.remove('active');
    if (step2) step2.classList.add('active');
    if (loginTitle) loginTitle.textContent = 'Enter Password';
}

function backStep() {
    const step1 = document.getElementById('step1');
    const step2 = document.getElementById('step2');
    const loginTitle = document.getElementById('loginTitle');

    if (step1) step1.classList.add('active');
    if (step2) step2.classList.remove('active');
    if (loginTitle) loginTitle.textContent = 'Sign In';
}

function togglePassword() {
    const passwordInput = document.getElementById('password');
    const toggleBtn = document.querySelector('.toggle-password');

    if (!passwordInput || !toggleBtn) {
        return;
    }

    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        toggleBtn.textContent = '🙈';
    } else {
        passwordInput.type = 'password';
        toggleBtn.textContent = '👁️';
    }
}

function login() {
    const password = document.getElementById('password');
    if (!password || !password.value) {
        alert('Please enter your password');
        return;
    }

    alert('Login successful! Welcome to Handmade Bliss 🎉');
    closeLoginModal();
}

function openWishlist() {
    const modal = document.getElementById('wishlistModal');
    if (modal) {
        modal.style.display = 'block';
    }
}

function closeWishlist() {
    const modal = document.getElementById('wishlistModal');
    if (modal) {
        modal.style.display = 'none';
    }
}

function addToWishlist(productInput) {
    const product = normalizeProductEntry(productInput || {});
    const key = String(product.id || product.name || '').trim();
    const exists = wishlistItems.some(item => String(item.id || item.name || '') === key);

    if (exists) {
        alert(product.name + ' is already in your wishlist. ❤️');
        return;
    }

    wishlistItems.push(product);
    saveStoredList(STORAGE_KEYS.wishlist, wishlistItems);
    updateWishlistDisplay();
    updateProfileStats();
    alert(product.name + ' added to wishlist! ❤️');
}

function removeFromWishlist(index) {
    wishlistItems.splice(index, 1);
    saveStoredList(STORAGE_KEYS.wishlist, wishlistItems);
    updateWishlistDisplay();
    updateProfileStats();
}

function updateWishlistDisplay() {
    const wishlistContent = document.getElementById('wishlistContent');
    if (!wishlistContent) {
        return;
    }

    if (wishlistItems.length === 0) {
        wishlistContent.innerHTML = `
            <div class="wishlist-empty">
                <p>❤️ Your wishlist is empty</p>
                <p style="font-size: 0.9rem; color: #999;">Start adding your favorite products!</p>
            </div>
        `;
        return;
    }

    let html = '';
    wishlistItems.forEach((item, index) => {
        const productName = escapeHtml(item.name || 'Handmade product');
        const productPrice = Number(item.price) || 0;
        html += `
            <div class="stack-item">
                <div class="stack-item-info">
                    <div class="stack-item-name">${productName}</div>
                    <div class="stack-item-meta">${escapeHtml(item.category || 'Handmade')} • ₹${productPrice.toFixed(2)}</div>
                </div>
                <div class="stack-item-actions">
                    <button class="btn btn-secondary small-btn" type="button" onclick="addToCart(${JSON.stringify(item)})">Add to cart</button>
                    <button class="remove-wishlist" type="button" onclick="removeFromWishlist(${index})">✕</button>
                </div>
            </div>
        `;
    });
    wishlistContent.innerHTML = html;
}

function addToCart(productInput) {
    const product = normalizeProductEntry(productInput || {});
    const key = String(product.id || product.name || '').trim();
    const existingItem = cartItems.find(item => String(item.id || item.name || '') === key);

    if (existingItem) {
        existingItem.quantity = (Number(existingItem.quantity) || 1) + 1;
    } else {
        cartItems.push({ ...product, quantity: 1 });
    }

    saveStoredList(STORAGE_KEYS.cart, cartItems);
    updateCartDisplay();
    updateProfileStats();
    alert(product.name + ' added to cart! 🛒');
}

function removeFromCart(index) {
    cartItems.splice(index, 1);
    saveStoredList(STORAGE_KEYS.cart, cartItems);
    updateCartDisplay();
    updateProfileStats();
}

function updateCartDisplay() {
    const cartContent = document.getElementById('cartContent');
    if (!cartContent) {
        return;
    }

    if (cartItems.length === 0) {
        cartContent.innerHTML = `
            <div class="wishlist-empty">
                <p>🛒 Your cart is empty</p>
                <p style="font-size: 0.9rem; color: #999;">Add a few handmade treasures to continue shopping.</p>
            </div>
        `;
        return;
    }

    let subtotal = 0;
    let html = '';

    cartItems.forEach((item, index) => {
        const productName = escapeHtml(item.name || 'Handmade product');
        const price = Number(item.price) || 0;
        const quantity = Number(item.quantity) || 1;
        const total = price * quantity;
        subtotal += total;

        html += `
            <div class="stack-item">
                <div class="stack-item-info">
                    <div class="stack-item-name">${productName}</div>
                    <div class="stack-item-meta">${escapeHtml(item.category || 'Handmade')} • Qty: ${quantity}</div>
                    <div class="stack-item-price">₹${total.toFixed(2)}</div>
                </div>
                <div class="stack-item-actions">
                    <button class="btn btn-secondary small-btn" type="button" onclick="addToCart(${JSON.stringify(item)})">+1</button>
                    <button class="remove-wishlist" type="button" onclick="removeFromCart(${index})">✕</button>
                </div>
            </div>
        `;
    });

    html += `
        <div class="cart-summary">
            <div class="cart-total-row">
                <span>Subtotal</span>
                <strong>₹${subtotal.toFixed(2)}</strong>
            </div>
            <button type="button" class="btn btn-primary" style="width: 100%; margin-top: 1rem;">Proceed to checkout</button>
        </div>
    `;

    cartContent.innerHTML = html;
}

function updateProfileStats() {
    const profileStats = document.getElementById('profileStats');
    if (!profileStats) {
        return;
    }

    const wishlistCount = wishlistItems.length;
    const cartCount = cartItems.reduce((total, item) => total + (Number(item.quantity) || 1), 0);

    profileStats.innerHTML = `
        <div class="profile-stat">
            <span class="profile-stat-label">Wishlist</span>
            <strong>${wishlistCount}</strong>
        </div>
        <div class="profile-stat">
            <span class="profile-stat-label">Cart Items</span>
            <strong>${cartCount}</strong>
        </div>
    `;
}

function openContactModal() {
    const modal = document.getElementById('contactModal');
    if (modal) {
        modal.style.display = 'block';
    }
}

function closeContactModal() {
    const modal = document.getElementById('contactModal');
    if (modal) {
        modal.style.display = 'none';
    }
}

function call(number) {
    window.location.href = `tel:${number}`;
}

function whatsapp(number) {
    const cleanNumber = number.replace(/[^\d]/g, '');
    window.open(`https://wa.me/${cleanNumber}`, '_blank');
}

function sendEmail(email) {
    window.location.href = `mailto:${email}`;
}

function shopNow() {
    const productsSection = document.getElementById('products');
    if (productsSection) {
        productsSection.scrollIntoView({ behavior: 'smooth' });
    }
}

function openCart() {
    if (cartItems.length === 0) {
        alert('Cart is empty');
        return;
    }

    window.location.href = 'cart.html';
}

window.onclick = function(event) {
    const loginModal = document.getElementById('loginModal');
    const wishlistModal = document.getElementById('wishlistModal');
    const contactModal = document.getElementById('contactModal');

    if (event.target === loginModal) {
        closeLoginModal();
    }
    if (event.target === wishlistModal) {
        closeWishlist();
    }
    if (event.target === contactModal) {
        closeContactModal();
    }
};

async function submitProduct(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const message = document.getElementById('productFormMessage');
    if (!form || !message) {
        return;
    }

    const formData = new FormData(form);
    const productPayload = {
        name: String(formData.get('name') || '').trim(),
        description: String(formData.get('description') || '').trim(),
        price: Number(formData.get('price')),
        category: String(formData.get('category') || '').trim(),
        image_url: String(formData.get('image_url') || '').trim(),
        stock: Number(formData.get('stock'))
    };

    message.classList.remove('error');
    message.textContent = 'Adding product...';

    try {
        const response = await fetch(productsEndpoint, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(productPayload)
        });

        if (!response.ok) {
            throw new Error(`Request failed with status ${response.status}`);
        }

        const createdProduct = await response.json();
        allProducts.push(createdProduct);
        message.textContent = 'Product added successfully.';
        form.reset();

        if (selectedCategory === 'all' || normalizeCategory(selectedCategory) === normalizeCategory(createdProduct.category)) {
            const visibleProducts = selectedCategory === 'all'
                ? allProducts
                : allProducts.filter(product => normalizeCategory(product.category) === normalizeCategory(selectedCategory));
            renderProducts(visibleProducts);
        }
    } catch (error) {
        console.error('Unable to add product:', error);
        message.classList.add('error');
        message.textContent = 'We could not add the product. Please try again.';
    }

}