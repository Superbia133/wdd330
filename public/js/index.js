import { setupProductSearch } from "./productSearch.mjs";
import { getLocalStorage, setLocalStorage, getCartItemCount } from "./utils.mjs";

// Mock product data - in real usage, fetch from JSON or API
const products = [
  { id: 1, name: "Hiking Tent", FinalPrice: 129.99 },
  { id: 2, name: "Sleeping Bag Pro", FinalPrice: 89.5 },
  { id: 3, name: "Trail Backpack", FinalPrice: 59.99 },
  { id: 4, name: "Hammock Deluxe", FinalPrice: 74.0 }
];

// Save products to localStorage
setLocalStorage("products", products);

// Initial render of all products
renderProductList(products);

// Setup product search feature
setupProductSearch();

// Update the cart item count in the icon
updateCartCount();

function renderProductList(products) {
  const productList = document.querySelector(".product-list");
  if (!productList) return;

  productList.innerHTML = "";

  products.forEach(product => {
    const item = document.createElement("li");
    item.innerHTML = `
      <h2>${product.name}</h2>
      <p>$${product.FinalPrice}</p>
    `;
    productList.appendChild(item);
  });
}

function updateCartCount() {
  const count = getCartItemCount();
  const cartIcon = document.querySelector(".cart-count");
  if (cartIcon) {
    cartIcon.textContent = count > 0 ? count : "";
  }
}
