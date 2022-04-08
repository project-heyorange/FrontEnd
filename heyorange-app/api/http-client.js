import axios from "axios";

const HttpClient = axios.create();

HttpClient.interceptors.request.use(async (config) => {
  const newConfig = { ...config };
  return newConfig;
});

export default HttpClient;