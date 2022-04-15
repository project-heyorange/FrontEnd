import axios from "axios";

const Api = axios.create({
  baseURL: "http://localhost:7010/heyorange"
});

export default Api;
