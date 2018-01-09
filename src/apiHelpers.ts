import axios from "axios";

//globals for axios
const apiUrl = "http://localhost:4010/api";
// const apiUrl = "https://swjaguars-api.herokuapp.com/api";

const googleURL = process.env.REACT_APP_GCALURL;
const googleCalendarApiKey = process.env.REACT_APP_GCALKEY;
console.log(process.env.REACT_APP_GCALURL);

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

export function getCalendarEvents() {
  return axios.get(
    `https://content.googleapis.com/calendar/v3/calendars/${googleURL}@group.calendar.google.com/events?orderBy=startTime&singleEvents=true&fields=items&key=${googleCalendarApiKey}`
  );
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

export function getFilteredPicturesApi(page, mindate = "2016-01-01") {
  return axios.get(
    `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=de46dbf17065c15da8c2a8308bc91a49&group_id=2999138%40N21&extras=date_taken&format=json&nojsoncallback=1&min_upload_date=${mindate}&sort=date-taken-desc&per_page=50&page=${page}`
  );
}
