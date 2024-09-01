import axios from "axios";

export async function fetchAllProducts() {
  try {
    const response = await axios.get("api/product");
    const data = response.data;
    return { data }
  } catch (error) {
    console.error("fectAllProducts", error)
  }
}

export async function fetchProductById(id) {
  try {
    const response = await axios.get(`http://localhost:4040/api/product/${id}`)
    const data = response.data;
    return (data)
  } catch (error) {
    console.log(error)
  }
}

export async function fetchCategory() {
  try {
    const response = await axios.get("/api/categories")
    const data = response.data
    return (data)
  } catch (error) {
    console.error("Error in Fetch Brand Section", error)
  }
}

export async function fetchBrand() {
  try {
    const response = await axios.get("api/brands")
    const data = response.data
    return (data)
  } catch (error) {
    console.error("Error in Fetch Brand Section", error)
  }
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
    const response = await axios.get(`api/product?${queryString}`);
    const data = response.data;
    return (data)
  } catch (error) {
    console.error("Error in fetchProductsByFilter Section", error)
  }

}

