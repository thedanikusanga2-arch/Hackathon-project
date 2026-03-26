const products = [
    {
        id: 1,
        name: "Rice & Curry",
        price: 450,
        ingredients: "Steamed rice, Mixed Vegetables, Coconut Milk, Curry Powder, Onion, Garlic, Chilli, Spices.",
        spice: "Medium",
        spiceColor: "text-amber-500 bg-amber-50 border-amber-200",
        image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=600&q=80", 
        delay: "100"
    },
    {
        id: 2,
        name: "Chicken Kottu",
        price: 500,
        ingredients: "Roti, Chicken, Egg, Vegetables, Onion, Garlic, Soy Sauce, Spices.",
        spice: "Medium",
        spiceColor: "text-amber-500 bg-amber-50 border-amber-200",
        image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80",
        delay: "200"
    },
    {
        id: 3,
        name: "Egg Fried Rice",
        price: 480,
        ingredients: "Rice, Egg, Vegetables, Garlic, Soy Sauce, Pepper, Oil.",
        spice: "Mild",
        spiceColor: "text-emerald-600 bg-emerald-50 border-emerald-200",
        image: "https://images.unsplash.com/photo-1559742811-822873691df8?auto=format&fit=crop&w=600&q=80",
        delay: "300"
    },
    {
        id: 4,
        name: "Hoppers",
        price: 250,
        ingredients: "Rice Flour, Coconut Milk, Yeast, Sugar, Salt.",
        spice: "Mild",
        spiceColor: "text-emerald-600 bg-emerald-50 border-emerald-200",
        image: "https://images.unsplash.com/photo-1625362217305-3b04cbca4837?auto=format&fit=crop&w=600&q=80",
        delay: "300"
    },
    {
        id: 5,
        name: "Sri Lankan Noodles",
        price: 380,
        ingredients: "Noodles, Vegetables, Egg/Chicken, Garlic, Soy Sauce, Chilli Sauce.",
        spice: "Mild",
        spiceColor: "text-emerald-600 bg-emerald-50 border-emerald-200",
        image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=600&q=80",
        delay: "300"
    },
    {
        id: 6,
        name: "String Hoppers",
        price: 300,
        ingredients: "Rice Flour, Water, Salt.",
        spice: "Mild",
        spiceColor: "text-emerald-600 bg-emerald-50 border-emerald-200",
        image: "https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?auto=format&fit=crop&w=600&q=80",
        delay: "300"
    },
    {
        id: 7,
        name: "Vegetable Roti",
        price: 100,
        ingredients: "Roti Dough, Mixed Vegetables, Onion, Spices.",
        spice: "Medium",
        spiceColor: "text-amber-500 bg-amber-50 border-amber-200",
        image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=600&q=80",
        delay: "300"
    },
    {
        id: 8,
        name: "Fish Bun",
        price: 80,
        ingredients: "Bun, Fish Filling, Potato, Onion, Spices.",
        spice: "Medium",
        spiceColor: "text-amber-500 bg-amber-50 border-amber-200",
        image: "https://images.unsplash.com/photo-1612196808214-b8e1d6145a8c?auto=format&fit=crop&w=600&q=80",
        delay: "300"
    },
    {
        id: 9,
        name: "Egg Roll",
        price: 120,
        ingredients: "Roti Wrapper, Egg, Vegetables, Onion, Spices.",
        spice: "Medium",
        spiceColor: "text-amber-500 bg-amber-50 border-amber-200",
        image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=600&q=80",
        delay: "300"
    },
    {
        id: 10,
        name: "Cutlet",
        price: 60,
        ingredients: "Fish/Meat, Potato, Onion, Spices, Breadcrumbs.",
        spice: "Medium",
        spiceColor: "text-amber-500 bg-amber-50 border-amber-200",
        image: "https://images.unsplash.com/photo-1541529086526-db283c563270?auto=format&fit=crop&w=600&q=80",
        delay: "300"
    },
    {
        id: 11,
        name: "Patties",
        price: 80,
        ingredients: "Pastry, Chicken/Fish/Vegetable Filling, Onion, Spices.",
        spice: "Mild",
        spiceColor: "text-emerald-600 bg-emerald-50 border-emerald-200",
        image: "https://images.unsplash.com/photo-1601050690117-94f5f6af3bf3?auto=format&fit=crop&w=600&q=80",
        delay: "300"
    },
    {
        id: 12,
        name: "Ulundu Wade",
        price: 70,
        ingredients: "Ural Dal, Onion, Green Chilli, Curry Leaves, Spices.",
        spice: "Medium",
        spiceColor: "text-amber-500 bg-amber-50 border-amber-200",
        image: "https://images.unsplash.com/photo-1589301760014-d929f39ce9b0?auto=format&fit=crop&w=600&q=80",
        delay: "300"
    },
    {
        id: 13,
        name: "Watalappan",
        price: 150,
        ingredients: "Coconut Milk, Jaggery, Eggs, Spices(cardamom,nutmeg).",
        spice: "Mild",
        spiceColor: "text-emerald-600 bg-emerald-50 border-emerald-200",
        image: "https://images.unsplash.com/photo-1519915028121-7d3463d20b13?auto=format&fit=crop&w=600&q=80",
        delay: "300"
    },
    {
        id: 14,
        name: "Chocolate Cake",
        price: 120,
        ingredients: "Flour, Cocoa Powdwer, Sugar, Eggs, Butter, Milk.",
        spice: "Mild",
        spiceColor: "text-emerald-600 bg-emerald-50 border-emerald-200",
        image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=600&q=80",
        delay: "300"
    },
    {
        id: 15,
        name: "Fruit Salad with Ice Cream",
        price: 230,
        ingredients: "Mixed Fruits, Ice Cream, Sugar Syrup.",
        spice: "Mild",
        spiceColor: "text-emerald-600 bg-emerald-50 border-emerald-200",
        image: "https://images.unsplash.com/photo-1564093497595-593b96d80180?auto=format&fit=crop&w=600&q=80",
        delay: "300"
    },
    {
        id: 16,
        name: "Jelly Cup",
        price: 150,
        ingredients: "Jelly, Water, Sugar.",
        spice: "Mild",
        spiceColor: "text-emerald-600 bg-emerald-50 border-emerald-200",
        image: "https://images.unsplash.com/photo-1553530666-ba11a90a1816?auto=format&fit=crop&w=600&q=80",
        delay: "300"
    },
    {
        id: 17,
        name: "Ice Cream",
        price: 120,
        ingredients: "Milk, Cream, Sugar, Flavoring.",
        spice: "Mild",
        spiceColor: "text-emerald-600 bg-emerald-50 border-emerald-200",
        image: "https://images.unsplash.com/photo-1563805042-7684c8e9e533?auto=format&fit=crop&w=600&q=80",
        delay: "300"
    },
    {
        id: 18,
        name: "Curd with Treacle",
        price: 180,
        ingredients: "Curd (buffalo milk), Treacle (kithul syrup).",
        spice: "Mild",
        spiceColor: "text-emerald-600 bg-emerald-50 border-emerald-200",
        image: "https://images.unsplash.com/photo-1570197781033-0661266e74b3?auto=format&fit=crop&w=600&q=80",
        delay: "300"
    },
    {
        id: 19,
        name: "Ceylon Tea",
        price: 150,
        ingredients: "Tea Leaves, Sugar, Milk (optional).",
        spice: "Mild",
        spiceColor: "text-emerald-600 bg-emerald-50 border-emerald-200",
        image: "https://images.unsplash.com/photo-1576092762791-dd9e2220cad1?auto=format&fit=crop&w=600&q=80",
        delay: "300"
    },
    {
        id: 20,
        name: "Kola Kanda",
        price: 200,
        ingredients: "Rice, Herbal Leaves, Coconut Milk, Garlic, Salt.",
        spice: "Mild",
        spiceColor: "text-emerald-600 bg-emerald-50 border-emerald-200",
        image: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=600&q=80",
        delay: "300"
    },
    {
        id: 21,
        name: "Mango Juice",
        price: 250,
        ingredients: "Mango, Water, Sugar.",
        spice: "Mild",
        spiceColor: "text-emerald-600 bg-emerald-50 border-emerald-200",
        image: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=600&q=80",
        delay: "300"
    },
    {
        id: 22,
        name: "Lemon Juice",
        price: 170,
        ingredients: "Lemon, Water, Sugar, Salt.",
        spice: "Mild",
        spiceColor: "text-emerald-600 bg-emerald-50 border-emerald-200",
        image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=600&q=80",
        delay: "300"
    },
    {
        id: 23,
        name: "Faluda",
        price: 280,
        ingredients: "Milk, Jelly, Basil Seeds, Vermicelli, Ice Cream, Syrup.",
        spice: "Mild",
        spiceColor: "text-emerald-600 bg-emerald-50 border-emerald-200",
        image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=600&q=80",
        delay: "300"
    },
    {
        id: 24,
        name: "Kurakkan Kanda",
        price: 200,
        ingredients: "Kurakkan (finger millet), Water, Coconut Milk, Salt.",
        spice: "Mild",
        spiceColor: "text-emerald-600 bg-emerald-50 border-emerald-200",
        image: "https://images.unsplash.com/photo-1548943487-a2e4f43fb2ba?auto=format&fit=crop&w=600&q=80",
        delay: "300"
    }
];

let cart = [];

function renderProducts() {
    const list = document.getElementById('product-list');
    list.innerHTML = '';
    
    products.forEach(product => {
        list.innerHTML += `
            <div class="group bg-white rounded-2xl shadow-sm hover:shadow-xl border border-slate-100 overflow-hidden transition-all duration-300 transform hover:-translate-y-1" data-aos="fade-up" data-aos-delay="${product.delay}">
                <div class="overflow-hidden h-56 relative">
                    <img src="${product.image}" class="w-full h-full object-cover img-hover-zoom" alt="${product.name}">
                    <div class="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold border ${product.spiceColor}">
                        ${product.spice} Spice
                    </div>
                </div>
                <div class="p-6">
                    <h3 class="text-xl font-bold text-slate-800 mb-2 group-hover:text-emerald-600 transition-colors">${product.name}</h3>
                    <p class="text-sm text-slate-500 mb-4 leading-relaxed"><strong class="text-slate-700">Contains:</strong> ${product.ingredients}</p>
                    <div class="flex justify-between items-center mt-6">
                        <span class="text-2xl font-bold text-slate-900">LKR ${product.price}</span>
                        <button onclick="addToCart(${product.id})" class="px-5 py-2.5 bg-slate-100 hover:bg-emerald-600 text-slate-700 hover:text-white rounded-xl font-semibold transition-colors duration-300">
                            Add +
                        </button>
                    </div>
                </div>
            </div>
        `;
    });
}

// Cart Functionality
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    cart.push(product);
    updateCartUI();
    
    // Quick visual feedback animation on the cart button
    const cartBtn = document.getElementById('cart-count');
    cartBtn.classList.add('scale-150');
    setTimeout(() => cartBtn.classList.remove('scale-150'), 200);
}

function updateCartUI() {
    document.getElementById('cart-count').innerText = cart.length;
    const cartItems = document.getElementById('cart-items');
    let total = 0;

    if(cart.length === 0) {
        cartItems.innerHTML = '<p class="text-center text-slate-400 mt-10">Your cart is empty.</p>';
    } else {
        cartItems.innerHTML = '';
        cart.forEach((item, index) => {
            total += item.price;
            cartItems.innerHTML += `
                <div class="flex justify-between items-center mb-4 p-3 bg-slate-50 rounded-lg border border-slate-100 animate-fade-in-up">
                    <div>
                        <h6 class="font-semibold text-slate-800 text-sm">${item.name}</h6>
                        <span class="text-emerald-600 text-xs font-bold">LKR ${item.price}</span>
                    </div>
                    <button onclick="removeFromCart(${index})" class="text-slate-400 hover:text-red-500 p-1">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                    </button>
                </div>
            `;
        });
    }
    document.getElementById('cart-total').innerText = `LKR ${total.toLocaleString()}`;
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCartUI();
}

// UI Toggles
function toggleCart() {
    const panel = document.getElementById('cart-panel');
    const overlay = document.getElementById('cart-overlay');
    
    if (panel.classList.contains('translate-x-full')) {
        panel.classList.remove('translate-x-full');
        overlay.classList.remove('hidden');
        setTimeout(() => overlay.classList.remove('opacity-0'), 10);
    } else {
        panel.classList.add('translate-x-full');
        overlay.classList.add('opacity-0');
        setTimeout(() => overlay.classList.add('hidden'), 300);
    }
}

// Order Form
document.getElementById('checkout-form').addEventListener('submit', function(e) {
    e.preventDefault();
    if(cart.length === 0) {
        alert("Please add some delicious food to your cart first!");
        return;
    }
    
    // Change button state to show loading/success
    const btn = this.querySelector('button');
    const originalText = btn.innerText;
    btn.innerText = "Processing...";
    btn.classList.add('bg-emerald-600');
    
    setTimeout(() => {
        alert("Order Confirmed! Our team will contact your WhatsApp shortly. Please prepare Cash on Delivery.");
        cart = [];
        updateCartUI();
        toggleCart();
        this.reset();
        btn.innerText = originalText;
        btn.classList.remove('bg-emerald-600');
    }, 1000);
});

window.onload = renderProducts;