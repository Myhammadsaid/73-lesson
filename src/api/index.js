import axios from "axios";

const mainUrl = axios.create({
  baseURL: "https://66361b32415f4e1a5e2648a4.mockapi.io/api",
});

export default mainUrl;
