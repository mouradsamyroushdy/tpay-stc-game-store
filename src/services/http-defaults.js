import axios from "axios";

export default function setHttpDefaults() {
  axios.defaults.baseURL = "http://localhost:3000/";
}
