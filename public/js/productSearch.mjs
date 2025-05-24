import { getLocalStorage } from "./utils.mjs";

export function setupProductSearch() {
  const searchInput = document.getElementById("product-search");

  if (!searchInput) return;

  searchInput.addEventListener("input", () => {
    const searchTerm = searchInput.value.toLowerCase();
    const products = getLocalStorage("products") || [];
    const filtered = products.filter(product =>
      product.name.toLowerCase().includes(searchTerm)
    );
    renderFilteredProducts(filtered);
  });
}

function renderFilteredProducts(products) {
  const productList = document.querySelector(".product-list");
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
