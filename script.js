const products = [
  { id: 1, name: "T-Shirt", price: 29, image: "https://images.pexels.com/photos/32963962/pexels-photo-32963962.jpeg" },
  { id: 2, name: "Earrings", price: 49, image: "images/earrings.jpg" },
  { id: 3, name: "Sneakers", price: 69, image: "images/sneakers.jpg"},
   { id: 4, name: "Laptop", price: 1999, image: "images/laptop.jpg"},
   { id: 4, name: "Jacket", price: 299, image: "images/jacket.jpg"},
   { id: 4, name: "Phone", price: 980, image: "images/iphone.jpg"},
   { id: 4, name: "Jeans", price: 199, image: "images/jeans.jpg"}
   
];

let cart = JSON.parse(localStorage.getItem("cart")) || [];

function renderProducts() {
  const productList = document.getElementById("product-list");
  products.forEach(product => {
    const div = document.createElement("div");
    div.className = "product";
    div.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>$${product.price}</p>
      <button onclick="addToCart(${product.id})">Add to Cart</button>
    `;
    productList.appendChild(div);
  });
}

function addToCart(id) {
  const product = products.find(p => p.id === id);
  cart.push(product);
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
  showToast(`${product.name} added to cart!`);
}

function updateCartCount() {
  document.getElementById("cart-count").innerText = cart.length;
}

// Toast notification
function showToast(message) {
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.textContent = message;
  document.body.appendChild(toast);

  setTimeout(() => {
    toast.classList.add("show");
  }, 100);

  setTimeout(() => {
    toast.classList.remove("show");
    setTimeout(() => toast.remove(), 500);
  }, 2000);
}



renderProducts();
updateCartCount();





