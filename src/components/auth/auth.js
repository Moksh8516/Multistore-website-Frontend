export function createUser(userData) {
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:4040/api/v1/user/register", {
      method: "POST",
      body: JSON.stringify(userData),
      headers: { 'Content-Type': 'application/json' },
    })
    const data = await response.json()
    resolve({ data })
  })
}

export function checkUser(userData) {
  return new Promise(async (resolve) => {

    const response = await fetch("http://localhost:4040/api/v1/user/login", {
      method: "POST",
      body: JSON.stringify(userData),
      headers: { 'Content-Type': 'application/json' },
    })
    const data = await response.json()
    resolve({ data })

  })
}

export function logout() {
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:4040/api/v1/user/logout", {
      method: "POST"
    })
    const data = await response.json()
    resolve({ data })
  })
}

