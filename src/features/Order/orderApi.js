import axios from "axios";

export const createOrder = async (order) => {
  try {
    const response = await axios.post(" http://localhost:8080/order", order)

    return response.data
  } catch (error) {
    console.error(error)
  }
}