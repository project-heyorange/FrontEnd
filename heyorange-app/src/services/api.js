import axios from "axios";

const Api = axios.create({
  baseURL: "/"
});

export default Api;
