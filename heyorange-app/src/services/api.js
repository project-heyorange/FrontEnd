import axios from "axios";

const Api = axios.create({
  baseURL: "https://api.thecatapi.com/"
});

export default Api;

//parametros para imagem 
//api/images/get?format=src&type=png