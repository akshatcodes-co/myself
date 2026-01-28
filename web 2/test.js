const products = [
    { id: 1, name: "Premium Headphones", price: "₹1,999", img: "https://via.placeholder.com/200" },
    { id: 2, name: "Smart Watch v2", price: "₹9,499", img: "https://via.placeholder.com/200" },
    { id: 3, name: "Mechanical Keyboard", price: "₹1,299", img: "https://via.placeholder.com/200" },
    { id: 4, name: "Wireless Mouse", price: "₹799", img: "https://via.placeholder.com/200" },
    { id: 5, name: "DSLR Camera", price: "₹45,999", img: "https://via.placeholder.com/200" },
    { id: 6, name: "Gaming Laptop", price: "₹72,000", img: "https://via.placeholder.com/200" },
];

const productList = document.getElementById('product-list');

function displayProducts() {
    productList.innerHTML = products.map(product => `
        <div class="product-card">
            <img src="${product.img}" alt="${product.name}">
            <p class="product-name">${product.name}</p>
            <p class="price">${product.price}</p>
            <p style="color: #878787; font-size: 0.9rem;">Free Delivery</p>
        </div>
    `).join('');
}

displayProducts();