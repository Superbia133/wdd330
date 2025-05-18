function updateCartCount() {
  const cartItems = JSON.parse(localStorage.getItem("so-cart")) || [];
  const countElement = document.getElementById("cart-count");

  if (countElement) {
    if (cartItems.length > 0) {
      countElement.textContent = cartItems.length;
      countElement.style.display = "inline";
    } else {
      countElement.style.display = "none";
    }
  }
}

document.addEventListener("DOMContentLoaded", updateCartCount);
