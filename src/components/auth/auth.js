import axios from "axios";

// function extractErrorMessageFromHtml(html) {
//   const preTagRegex = /<pre>(.*?)<\/pre>/;
//   const match = html.match(preTagRegex);
//   if (match) {
//     const errorMessage = match[1].trim();
//     return errorMessage;
//   } else {
//     return 'Unknown error';
//   }
// }

export function createUser(userData) {
  return new Promise(async (resolve) => {
    const response = await fetch("api/v1/user/register", {
      method: "POST",
      body: JSON.stringify(userData),
      headers: { 'Content-Type': 'application/json' },
    })
    const data = await response.json()
    resolve({ data })
  })
}

export async function checkUser(userData) {
  try {
    const response = await axios.post("/api/v1/user/login", userData)
    const data = response.data;
    return { data }
  } catch (error) {
    if (error.response.status === 401) {
      console.log({ error: "Invalid Password" })
      return (error); // This will reject the promise with the error
    }
  }
}

export async function logout() {
  try {
    const response = await axios.post("/api/v1/user/logout")
    const data = response.data;
    console.log(data)
    return { data }
  } catch (error) {
    console.error("Error in logout:", error.toJSON());
    throw error; // This will reject the promise with the error
  }
}

export async function forgetPassword(email) {
  try {
    const response = await axios.post("api/v1/user/forgot-password", email)
    const data = response.data;
    return (data)
  } catch (error) {
    console.log(error)
  }
}

export async function ResetPassword(newPassword) {
  try {
    const response = await axios.patch(`http://localhost:4040/api/v1/user/reset-Password/${newPassword.token}`, newPassword.data)
    const data = response.data
    return (data)
  } catch (error) {
  }
  console.log(error)
}

export async function updateProfile(data) {
  try {
    const response = await axios.patch("api/v1/user/update-profile", data)
    const data = response.data
    return (data)
  } catch (error) {
    console.error(error)
  }
}
export async function updatePassword(data) {
  try {
    const response = await axios.patch("api/v1/user/update-password", data)
    return (response.data)
  } catch (error) {
    console.error(error)
  }
}

export async function updateProfileImage(data) {
  try {
    const response = await axios.patch("api/v1/user/update-profile-image", data)
    const data = response.data
    return (data)
  } catch (error) {
    console.error(error)
  }
}

export async function getProfile() {
  try {
    const response = await axios.get("api/v1/user/profile")
    return (response.data)
  } catch (error) {
    console.error(error)
  }
}
export async function reLoginUser() {
  try {
    const response = await axios.post("api/v1/user/refresh-token")
    return (response.data)
  } catch (error) {
    console.error(error)
  }
}