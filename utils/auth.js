import axios from "axios";

const API_URL = "http://68.183.183.118:4088/api/v1/users/";

// Expected data
// {
//   email: "tony@a.com",
//   firstName: "Tony",
//   lastName: "Stark",
//   password: "test1234",
//   role: "admin",
// }
export async function signupUser(type, data) {
  const res = await axios.post(`${API_URL}${type}`, data);
  console.log(res);
  return res;
}

export async function createUser() {
  // axios.post(url, { firstName, lastName, email, password })
}

export async function login() {
  // axios.post(url, { email, password })
}
