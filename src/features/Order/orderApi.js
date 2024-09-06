import axios from "axios";

export const createOrder = async (order) => {
  try {
    const response = await axios.post("/api/order", order)
    const data = response.data
    return data
  } catch (error) {
    console.error(error)
  }
}

export const fetchOrder = async (id) => {
  try {
    const response = await axios.get(`/api/order`, id)
    console.log(response)
    return response.data
  } catch (error) {
    console.error(error)
  }
}