// export function addToCart(items) {
//   return new Promise(async (resolve) => {
//     const response = await fetch("http://localhost:8080/cart", {
//       method: "POST",
//       body: JSON.stringify(items),
//       headers: { 'content-type': 'application/json' },
//     })
//     const data = await response.json()
//     console.log(data)
//     resolve({ data })
//   })

import axios from "axios"

// }
export async function addToCart(items) {
  console.log(items)
  try {
    const response = axios.post("http://localhost:4040/api/cart/items", items)
    const data = response.data
    return data
  } catch (error) {
    console.error(error)
  }
}

export function fecthItemsByUserId(userId) {
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:8080/cart?user=" + userId)
    const data = await response.json()
    resolve({ data })
  })
}

export function updateCart(update) {
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:8080/cart/" + update.id, {
      method: "PATCH",
      body: JSON.stringify(update),
      headers: { 'content-type': 'application/json' },
    })
    const data = await response.json();
    resolve({ data })
  })
}

export function deleteCartItem(itemId) {
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:8080/cart/" + itemId, {
      method: "DELETE",
      headers: { 'content-type': 'application/json' },
    })
    const data = await response.json();
    resolve({ data: { id: itemId } })
  })
}