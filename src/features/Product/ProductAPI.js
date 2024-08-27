import axios from "axios";

export async function fetchAllProducts() {
  try {
    const response = await axios("api/product");
    console.log(response)
    const data = response.data;
    return { data }
  } catch (error) {
    console.error("fectAllProducts", error)
  }
}

export async function fetchProductById(id) {
  try {
    const response = await axios.get(`api/product/${id}`)
    console.log(response)
    return { response }
  } catch (error) {
    console.error(error)
  }
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


  try {
    const response = await axios.get(`api/product${queryString}`);
    const data = response.data;
    return (data)
  } catch (error) {
    console.error("fetchProductsByFilter", error)
  }

}

