export async function fetchProducts(amount = 1) {
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:8080/products");
    const result = await response.json();
    resolve({ result });
  });
}