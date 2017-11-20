import axios from "axios";

//globals for axios
const apiUrl = "http://localhost:4010/api";

axios.defaults.baseURL = apiUrl;

export function getArticlesApi() {
  return axios.get(`${apiUrl}/articles`);
}
