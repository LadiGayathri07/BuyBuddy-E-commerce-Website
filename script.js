// ✅ Product List
const products = [
    {
        id: 1,
        name: "Floral Kurti",
        category: "Clothing",
        price: 499,
        image: "https://clothsvilla.com/cdn/shop/products/blue-color-kurti-for-festive-season-looknbook-art_1024x1024.jpg?v=1680884662"
    },
    {
        id: 2,
        name: "Men's Casual Shirt",
        category: "Clothing",
        price: 699,
        image: "https://www.ottostore.com/cdn/shop/files/OTTOXDQ_2392copya_500x.jpg?v=1748846266"
    },
    {
        id: 3,
        name: "Gold-Plated Earrings",
        category: "Accessories",
        price: 299,
        image: "https://img.tatacliq.com/images/i19//437Wx649H/MP000000023433748_437Wx649H_202408251637061.jpeg"
    },
    {
        id: 4,
        name: "Bluetooth Earbuds",
        category: "Electronics",
        price: 1299,
        image: "https://www.skullcandy.com/cdn/shop/files/active_headphopnes.png?format=pjpg&v=1739379468&width=1500"
    },
    {
        id: 5,
        name: "Yoga Mat",
        category: "Fitness",
        price: 399,
        image: "https://images.meesho.com/images/products/439815737/pvvrf_400.webp"
    },
    {
        id: 6,
        name: "Decorative Wall Clock",
        category: "Home Decor",
        price: 899,
        image: "https://images.meesho.com/images/products/484742908/knxyy_400.webp"
    },
    {
        id: 7,
        name: "Lipstick Combo Set",
        category: "Beauty",
        price: 199,
        image: "https://images.meesho.com/images/products/458477799/0uyfq_400.webp"
    },
    {
        id: 8,
        name: "Women's Sandals",
        category: "Footwear",
        price: 649,
        image: "https://images.meesho.com/images/products/546817159/eofgk_400.webp"
    },
    {
        id: 9,
        name: "Non-Stick Fry Pan",
        category: "Kitchen",
        price: 549,
        image: "https://images.meesho.com/images/products/487523403/jar9f_512.webp"
    },
    {
        id: 10,
        name: "Printed Bedsheet",
        category: "Home Decor",
        price: 799,
        image: "https://images.meesho.com/images/products/441437019/i9cyz_400.webp"
    },
    {
        id: 11,
        name: "Running Shoes",
        category: "Footwear",
        price: 1199,
        image: "https://5.imimg.com/data5/ANDROID/Default/2024/5/420504799/KG/WL/PF/160274098/product-500x500.jpg"
    },
    {
        id: 12,
        name: "Makeup Brushes Set",
        category: "Beauty",
        price: 399,
        image: "https://sagansinghmakeup.in/cdn/shop/files/61qKF1EpRqL._SL1000.jpg?v=1727199965"
    },
    {
        id: 13,
        name: "Wireless Keyboard",
        category: "Electronics",
        price: 999,
        image: "https://www.kawaiifashionshop.com/wp-content/uploads/2022/03/Notebook-Office-3-in-1-Mini-2-4G-Wireless-Keyboard-Mouse-and-Number-Pad-Round-Punk.jpg"
    },
    {
        id: 14,
        name: "Women's Handbag",
        category: "Accessories",
        price: 749,
        image: "https://production-storage.nimbuzz.com/600x600/product-1727445792604.jpeg"
    },
    {
        id: 15,
        name: "Smart Watch",
        category: "Electronics",
        price: 2299,
        image: "https://m.media-amazon.com/images/I/71HqlGY1rgL.jpg"
    },
    {
        id: 16,
        name: "Resistance Bands",
        category: "Fitness",
        price: 299,
        image: "https://images.meesho.com/images/products/559635781/eyjig_400.webp"
    },
    {
        id: 17,
        name: "Printed Apron Set",
        category: "Kitchen",
        price: 299,
        image: "https://images.meesho.com/images/products/533882959/nhchq_400.webp"
    },
    {
        id: 18,
        name: "LED String Lights",
        category: "Home Decor",
        price: 399,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiidtR1hBDrxxATlPpNF1GnzSQ-TZUgWWltQ&s"
    },
    {
        id: 19,
        name: "Casual T-shirt",
        category: "Clothing",
        price: 349,
        image: "https://images.meesho.com/images/products/494887218/jsjmg_400.webp"
    },
    {
        id: 20,
        name: "Necklace",
        category: "Accessories",
        price: 399,
        image: "https://m.media-amazon.com/images/I/81j+3qglXgL._SL1500_.jpg"
    }
];



// ✅ Load Cart from localStorage or initialize
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// ✅ Update cart count on header
function updateCartCount() {
    const cartCountEl = document.getElementById("cart-count");
    if (cartCountEl) {
        cartCountEl.textContent = cart.length;
    }
}

// ✅ Add product to cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    if (cart.length >= 10) {
        alert("❌ Cart limit reached! You can only add up to 10 items.");
        return;
    }

    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartCount();
}

// ✅ Render product cards to the page
function renderProducts(filteredList = products) {
    const container = document.querySelector("main");
    if (!container) return;
    container.innerHTML = ""; // Clear old content

    filteredList.forEach((p) => {
        const card = document.createElement("div");
        card.className = "bg-white rounded shadow-md overflow-hidden flex flex-col h-[450px]";
        card.innerHTML = `
 <img src="${p.image}" alt="${p.name}" class="w-[250px] h-[280px] object-cover mx-auto rounded-md mb-3 border border-gray-200 shadow-sm" />
  <div class="p-4 flex flex-col justify-between flex-grow">
    <div>
      <h2 class="font-bold text-lg mb-1">${p.name}</h2>
      <p class="text-gray-700 mb-1">₹${p.price}</p>
      <p class="text-blue-500 text-sm mb-4">${p.category}</p>
    </div>
    <button 
      class="bg-pink-600 text-white px-4 py-2 rounded hover:bg-pink-700 transition"
      data-id="${p.id}">
      Add to Cart
    </button>
  </div>
`;

        container.appendChild(card);
    });

    // Attach button logic
    document.querySelectorAll("button[data-id]").forEach((btn) => {
        btn.addEventListener("click", () => {
            const id = parseInt(btn.getAttribute("data-id"));
            addToCart(id);
        });
    });
}


// 🔍 Listen to Search and Category Inputs
document.getElementById("search").addEventListener("input", handleFilter);
document.getElementById("category-filter").addEventListener("change", handleFilter);

// 🔁 Filter and Re-render Products
function handleFilter() {
    const searchText = document.getElementById("search").value.toLowerCase();
    const selectedCategory = document.getElementById("category-filter").value;

    const filtered = products.filter((p) => {
        const matchesSearch = p.name.toLowerCase().includes(searchText);
        const matchesCategory = selectedCategory === "all" || p.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    renderProducts(filtered);
}


// ✅ Initialize
renderProducts();
updateCartCount();
