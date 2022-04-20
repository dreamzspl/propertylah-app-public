import axios from "axios";

export const APIQns = axios.create({
  baseURL: "http://68.183.183.118:4088/api/v1/questions"
});

export const APIAns = axios.create({
  baseURL: "http://68.183.183.118:4088/api/v1/answers"
});
