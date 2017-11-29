import axios from "axios";

//globals for axios
const apiUrl = "http://localhost:4010/api";
// const apiUrl = "https://swjaguars-api.herokuapp.com/api";

axios.defaults.baseURL = apiUrl;

export function getMessagesApi() {
  return axios.get(`${apiUrl}/articles`);
}

export function getLastMessageApi() {
  return axios.get(`${apiUrl}/articles/last`);
}

export function newMessageApi(message) {
  return axios.post(`${apiUrl}/articles`, message);
}

export function getMessageApi(id) {
  return axios.get(`${apiUrl}/articles/${id}`);
}

export function updateMessageApi(message) {
  if (message._id !== "0") {
    return axios.put(`${apiUrl}/articles/${message._id}`, message);
  } else {
    return axios.post(`${apiUrl}/articles`, message);
  }
}

export function deleteMessageApi(id) {
  return axios.delete(`${apiUrl}/articles/${id}`);
}
