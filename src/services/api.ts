import axios from "axios";

const api = axios.create({
  baseURL: "https://tryvia.ptr.red",
});

export default api;