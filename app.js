const products = [
    {
        id: 1,
        name: "Rice & Curry",
        price: 450,
        ingredients: "Steamed rice, Mixed Vegetables, Coconut Milk, Curry Powder, Onion, Garlic, Chilli, Spices.",
        spice: "Medium",
        spiceColor: "text-amber-500 bg-amber-50 border-amber-200",
        image: "https://media.istockphoto.com/id/541603774/photo/sri-lankan-rice-and-curry-dish.jpg?s=612x612&w=0&k=20&c=osvrG7ELjUdy8PKDSO0_SyL8GMfc1fM89et6YNnEqgs=", 
        delay: "100"
    },
    {
        id: 2,
        name: "Chicken Kottu",
        price: 500,
        ingredients: "Roti, Chicken, Egg, Vegetables, Onion, Garlic, Soy Sauce, Spices.",
        spice: "Medium",
        spiceColor: "text-amber-500 bg-amber-50 border-amber-200",
        image: "https://media.istockphoto.com/id/1297485179/photo/typical-kottu-dish-from-sri-lankan-street-food.jpg?s=612x612&w=0&k=20&c=sEEyd0CHgpN1gk7X2isg9rTSznOu7lHlvlcaV_KaszM=",
        delay: "200"
    },
    {
        id: 3,
        name: "Egg Fried Rice",
        price: 480,
        ingredients: "Rice, Egg, Vegetables, Garlic, Soy Sauce, Pepper, Oil.",
        spice: "Mild",
        spiceColor: "text-emerald-600 bg-emerald-50 border-emerald-200",
        image: "https://media.istockphoto.com/id/627794904/photo/breakfast-fried-egg-with-rice.jpg?s=612x612&w=0&k=20&c=Mjc84YWx6QKBssvWlloNIo8F0aru7Rpeq4m-IyS4kus=",
        delay: "300"
    },
    {
        id: 4,
        name: "Hoppers",
        price: 250,
        ingredients: "Rice Flour, Coconut Milk, Yeast, Sugar, Salt.",
        spice: "Mild",
        spiceColor: "text-emerald-600 bg-emerald-50 border-emerald-200",
        image: "https://media.istockphoto.com/id/543978524/photo/sri-lankan-egg-hopper.jpg?s=612x612&w=0&k=20&c=7UI9bwvKcowTSZ-fDdyqR-y_2Lsitr-WncwIynbcfxs=",
        delay: "300"
    },
    {
        id: 5,
        name: "Sri Lankan Noodles",
        price: 380,
        ingredients: "Noodles, Vegetables, Egg/Chicken, Garlic, Soy Sauce, Chilli Sauce.",
        spice: "Mild",
        spiceColor: "text-emerald-600 bg-emerald-50 border-emerald-200",
        image: "https://media.istockphoto.com/id/1169736515/photo/homemade-delicious-semiya-upma.jpg?s=612x612&w=0&k=20&c=tkri0N_v8zrswh736Ab_neVIw7Bjv2dzXpsJCt_2IO0=",
        delay: "300"
    },
    {
        id: 6,
        name: "String Hoppers",
        price: 300,
        ingredients: "Rice Flour, Water, Salt.",
        spice: "Mild",
        spiceColor: "text-emerald-600 bg-emerald-50 border-emerald-200",
        image: "https://media.istockphoto.com/id/1686581892/photo/idiyappam-with-chicken-curry.jpg?s=612x612&w=0&k=20&c=Z8p6agfsdEg0mjRlu4Gw-eWYUDwZ-NkG6sqsg4GMZx8=",
        delay: "300"
    },
    {
        id: 7,
        name: "Vegetable Roti",
        price: 100,
        ingredients: "Roti Dough, Mixed Vegetables, Onion, Spices.",
        spice: "Medium",
        spiceColor: "text-amber-500 bg-amber-50 border-amber-200",
        image: "https://media.istockphoto.com/id/1473237858/photo/srilankan-vegetable-roti-in-plate.jpg?s=612x612&w=0&k=20&c=geOmfUz24cxrqnh65186FgmGTnZH55xrKVJpaEvJ1UA=",
        delay: "300"
    },
    {
        id: 8,
        name: "Fish Bun",
        price: 80,
        ingredients: "Bun, Fish Filling, Potato, Onion, Spices.",
        spice: "Medium",
        spiceColor: "text-amber-500 bg-amber-50 border-amber-200",
        image: "https://media.istockphoto.com/id/1331499669/photo/fish-buns-are-arranged-in-a-round-steel-baking-tray-homemade-delicious-triangular-shaped.jpg?s=612x612&w=0&k=20&c=OyMw3R_HcS0cVdFDaHbjFfCZGtEZeid-rYfvC8psJEI=",
        delay: "300"
    },
    {
        id: 9,
        name: "Egg Roll",
        price: 120,
        ingredients: "Roti Wrapper, Egg, Vegetables, Onion, Spices.",
        spice: "Medium",
        spiceColor: "text-amber-500 bg-amber-50 border-amber-200",
        image: "https://media.istockphoto.com/id/1447122865/photo/homemade-spring-rolls-on-a-bed-of-lettuce-in-a-white-plate-on-a-wooden-background.jpg?s=612x612&w=0&k=20&c=Vnv6pULBiCnO3zr38nPCKo-ayFnDenPqdep_iNpKHeY=",
        delay: "300"
    },
    {
        id: 10,
        name: "Cutlet",
        price: 60,
        ingredients: "Fish/Meat, Potato, Onion, Spices, Breadcrumbs.",
        spice: "Medium",
        spiceColor: "text-amber-500 bg-amber-50 border-amber-200",
        image: "https://media.istockphoto.com/id/1174614327/photo/corn-tikki-or-pakora-pakoda.jpg?s=612x612&w=0&k=20&c=QkcQRXmj-eN055A0-rKm7g5pXfD1y94P9-wTy_rpwcw=",
        delay: "300"
    },
    {
        id: 11,
        name: "Patties",
        price: 80,
        ingredients: "Pastry, Chicken/Fish/Vegetable Filling, Onion, Spices.",
        spice: "Mild",
        spiceColor: "text-emerald-600 bg-emerald-50 border-emerald-200",
        image: "https://media.istockphoto.com/id/1161677008/photo/latin-american-fried-empanadas-with-tomato-and-avocado-sauces-top-view.jpg?s=612x612&w=0&k=20&c=zkj70xzhKcLUHB5Bq47qnoAoqFFxXJMBwD6zBnQ3YTY=",
        delay: "300"
    },
    {
        id: 12,
        name: "Ulundu Wade",
        price: 70,
        ingredients: "Ural Dal, Onion, Green Chilli, Curry Leaves, Spices.",
        spice: "Medium",
        spiceColor: "text-amber-500 bg-amber-50 border-amber-200",
        image: "https://media.istockphoto.com/id/2148274342/photo/kombadi-vade-chicken-vade-traditional-marathi-non-vegetarian-food-maharashtra.jpg?s=612x612&w=0&k=20&c=MGp5LnhErKTeMuu9E1z62ACG573fXG3M1VUF1PN6-nw=",
        delay: "300"
    },
    {
        id: 13,
        name: "Watalappan",
        price: 150,
        ingredients: "Coconut Milk, Jaggery, Eggs, Spices(cardamom,nutmeg).",
        spice: "Mild",
        spiceColor: "text-emerald-600 bg-emerald-50 border-emerald-200",
        image: "https://media.istockphoto.com/id/2175565041/photo/watalappam-sri-lankan-coconut-custard-pudding.jpg?s=612x612&w=0&k=20&c=g1t_VV5-FSreGITqrBqKULQkvNIWsjtO3YquTkTaP8s=",
        delay: "300"
    },
    {
        id: 14,
        name: "Chocolate Cake",
        price: 120,
        ingredients: "Flour, Cocoa Powdwer, Sugar, Eggs, Butter, Milk.",
        spice: "Mild",
        spiceColor: "text-emerald-600 bg-emerald-50 border-emerald-200",
        image: "https://media.istockphoto.com/id/1370520449/photo/slice-of-chocolate-cake-with-glaze.jpg?s=612x612&w=0&k=20&c=KK-h7w4l0FNA0YMWvkr1X8UrAAB77z0f5tTByBYgReM=",
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
        image: "https://media.istockphoto.com/id/483686806/photo/berry-fruit-jelly-with-fresh-berries-summer-dessert.jpg?s=612x612&w=0&k=20&c=PeAEYFlpd5sBmuQ40MTkZIc97_8eNC_tA3JHaKxPgXw=",
        delay: "300"
    },
    {
        id: 17,
        name: "Ice Cream",
        price: 120,
        ingredients: "Milk, Cream, Sugar, Flavoring.",
        spice: "Mild",
        spiceColor: "text-emerald-600 bg-emerald-50 border-emerald-200",
        image: "https://media.istockphoto.com/id/2153490093/photo/three-glasses-of-ice-cream-with-balls-decorated-on-table.jpg?s=612x612&w=0&k=20&c=LUfk-0kBVxloYyom1lTBWZ7QOPTJJQG7tPsCdHdevwg=",
        delay: "300"
    },
    {
        id: 18,
        name: "Curd with Treacle",
        price: 180,
        ingredients: "Curd (buffalo milk), Treacle (kithul syrup).",
        spice: "Mild",
        spiceColor: "text-emerald-600 bg-emerald-50 border-emerald-200",
        image: "https://media.istockphoto.com/id/184917128/photo/curds-and-honey.jpg?s=612x612&w=0&k=20&c=DUtBlDZMEPRUmsKLV1E6sFkBA7H34Vo4ofbvVH97v1c=",
        delay: "300"
    },
    {
        id: 19,
        name: "Ceylon Tea",
        price: 150,
        ingredients: "Tea Leaves, Sugar, Milk (optional).",
        spice: "Mild",
        spiceColor: "text-emerald-600 bg-emerald-50 border-emerald-200",
        image: "https://media.istockphoto.com/id/1628961567/photo/herbal-green-tea-border-on-wooden-rustic-background-hot-cup-of-jasmine-tea-on-vintage.jpg?s=612x612&w=0&k=20&c=S9XEhtKBHKOXH6TihcE-4CpMT-El5PfairrTIpyFryQ=",
        delay: "300"
    },
    {
        id: 20,
        name: "Kola Kanda",
        price: 200,
        ingredients: "Rice, Herbal Leaves, Coconut Milk, Garlic, Salt.",
        spice: "Mild",
        spiceColor: "text-emerald-600 bg-emerald-50 border-emerald-200",
        image: "https://srilankatravellife.com/wp-content/uploads/2025/12/A-Glass-of-Kola-Kanda-with-Jaggery.webp",
        delay: "300"
    },
    {
        id: 21,
        name: "Mango Juice",
        price: 250,
        ingredients: "Mango, Water, Sugar.",
        spice: "Mild",
        spiceColor: "text-emerald-600 bg-emerald-50 border-emerald-200",
        image: "https://media.istockphoto.com/id/904617420/photo/fresh-mango-smoothie-in-the-glass.jpg?s=612x612&w=0&k=20&c=ogIRn5AfahJNU4W8UmQIZ-mJqL9tgOm9yH_-5WJmkSQ=",
        delay: "300"
    },
    {
        id: 22,
        name: "Lemon Juice",
        price: 170,
        ingredients: "Lemon, Water, Sugar, Salt.",
        spice: "Mild",
        spiceColor: "text-emerald-600 bg-emerald-50 border-emerald-200",
        image: "https://media.istockphoto.com/id/2216886533/photo/glasses-of-ice-with-lemon-soda-made-from-fruit-juice-next-to-a-cutting-board-with-lemon.jpg?s=612x612&w=0&k=20&c=iYskzW1OMaBiZAbgGNtmI6kiIfPHze1eUkiigyfAIpA=",
        delay: "300"
    },
    {
        id: 23,
        name: "Faluda",
        price: 280,
        ingredients: "Milk, Jelly, Basil Seeds, Vermicelli, Ice Cream, Syrup.",
        spice: "Mild",
        spiceColor: "text-emerald-600 bg-emerald-50 border-emerald-200",
        image: "https://media.istockphoto.com/id/1152134425/photo/falooda-faluda-is-a-popular-indian-dessert.jpg?s=612x612&w=0&k=20&c=fkRDvYWcPLDaU1zByysSTV9DsUyxGP2AUHBWZJSz2sk=",
        delay: "300"
    },
    {
        id: 24,
        name: "Kurakkan Kanda",
        price: 200,
        ingredients: "Kurakkan (finger millet), Water, Coconut Milk, Salt.",
        spice: "Mild",
        spiceColor: "text-emerald-600 bg-emerald-50 border-emerald-200",
        image: "https://d1uz88p17r663j.cloudfront.net/original/fedae75d14d3afdb4c1e62bc21a4ab89_kurakkan-kenda.jpg",
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
