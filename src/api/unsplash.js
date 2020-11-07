import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID T7QaVjuse9u5YpfCKP1nHuSBDRjmni3ElmXO5l5Tfsw",
  },
});
