import axios from "axios";

const API_URL = "http://68.183.183.118:4088/api/v1/users/";

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

export async function update(data) {}
