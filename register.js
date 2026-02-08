document.getElementById("register-form").addEventListener("submit", function(e) {
  e.preventDefault();

  const username = document.getElementById("new-username").value.trim();
  const password = document.getElementById("new-password").value.trim();
  const confirmPassword = document.getElementById("confirm-password").value.trim();
  const message = document.getElementById("register-message");

  if(password !== confirmPassword) {
    message.style.color = "red";
    message.textContent = "Passwords do not match.";
    return;
  }

  // Save user in localStorage (mock database)
  let users = JSON.parse(localStorage.getItem("users")) || [];
  if(users.find(u => u.username === username)) {
    message.style.color = "red";
    message.textContent = "Username already exists.";
    return;
  }

  users.push({ username, password });
  localStorage.setItem("users", JSON.stringify(users));

  message.style.color = "green";
  message.textContent = "Registration successful! Redirecting to login...";
  setTimeout(() => {
    window.location.href = "login.html";
  }, 1500);
});

// Update cart count
let cart = JSON.parse(localStorage.getItem("cart")) || [];
document.getElementById("cart-count").innerText = cart.length;
