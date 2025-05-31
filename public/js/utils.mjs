export function setLocalStorage(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

export function getLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}

export function getCartItemCount() {
  const cart = getLocalStorage("so-cart") || [];
  return cart.length;
}
