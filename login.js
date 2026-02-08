document.getElementById("login-form").addEventListener("submit", function(e) {
  e.preventDefault();

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();
  const message = document.getElementById("login-message");

  let users = JSON.parse(localStorage.getItem("users")) || [];
  const user = users.find(u => u.username === username && u.password === password);

  if(user) {
    localStorage.setItem("loggedInUser", username);
    message.style.color = "green";
    message.textContent = "Login successful! Redirecting...";
    setTimeout(() => {
      window.location.href = "index.html";
    }, 1500);
  } else {
    message.style.color = "red";
    message.textContent = "Invalid username or password.";
  }
});

let cart = JSON.parse(localStorage.getItem("cart")) || [];
document.getElementById("cart-count").innerText = cart.length;
