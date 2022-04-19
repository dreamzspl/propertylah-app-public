import axios from "axios";

const API_URL = "http://68.183.183.118:4088/api/v1/users/";

// Expected data - should be validated before reaching here
// {
//   email: "tony@a.com",
//   firstName: "Tony",
//   lastName: "Stark",
//   password: "test1234",
//   role: "admin", - default: user set by userModel
// }

// success data
// {
//   "status": "success",
//   "data": {
//       "createdAt": "2022-04-18T10:19:12.628Z",
//       "updatedAt": "2022-04-18T10:19:12.628Z",
//       "id": 7,
//       "email": "test117@a.com",
//       "password": "$2b$10$ZiYR0/ztbyEiDeGZDmrIgOR5URskF2SKLw05oajZU1L4JCnKowMXO",
//       "firstName": "Tony",
//       "lastName": "Stark",
//       "role": "user",
//       "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NywiaWF0IjoxNjUwMjc3MTUyLCJleHAiOjE2NTAzNjM1NTJ9.KcByLVktBi_ksYWmDAyqdyDHY7nDWqSpF_S7QGX5eWA"
//   }
// }

// error data
// {
//   "status": "error",
//   "message": "email must be unique"
// }
export async function signupUser(data) {
  try {
    const res = await axios.post(`${API_URL}signup`, data);
    if (res.data.status === "success") {
      const { id, firstName, role, token } = res.data.data;
      return { id, firstName, role, token };
    }
  } catch (error) {
    // Network Errors

    // Known Errors - process the error message for known errors
    if ((error.response.data.message = "email must be unique"))
      throw new Error("This email has already been registered.");

    // Unknown Errors - return server's error message directly
    throw new Error(error.response.data.message);
  }
}

export async function login(data) {
  try {
    const res = await axios.post(`${API_URL}login`, data);
    if (res.data.status === "success") {
      const { id, firstName, role, token } = res.data.data;
      return { id, firstName, role, token };
    }
  } catch (error) {
    throw new Error(error.response.data.message);
  }
}
