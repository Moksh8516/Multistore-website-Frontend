export async function fetchAllProducts() {
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:8080/products");
    const data = await response.json();
    resolve({ data });
  });
}
export async function fetchProductById(id) {
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:8080/products/" + id);
    const data = await response.json();
    resolve({ data });
  });
}

export async function fetchCategory() {
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:8080/category ");
    const data = await response.json();
    resolve({ data });
  });
}

export async function fetchBrand() {
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:8080/brands");
    const data = await response.json();
    resolve({ data });
  });
}

export async function fetchProductsByFilter(values, sort, page) {

  let queryString = "";
  for (let key in values) {
    queryString += `${key}=${values[key]}&`
  }

  for (let key in sort) {
    queryString += `${key}=${sort[key]}&`
  }

  for (let key in page) {
    queryString += `${key}=${page[key]}&`
  }

  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:8080/products?" + queryString);
    const data = await response.json();
    resolve({ data });
  });
}

