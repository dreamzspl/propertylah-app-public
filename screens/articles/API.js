import axios from "axios";

export const APIArticles = axios.get({
  baseURL: "http://68.183.183.118:4088/api/v1/articles"
});
