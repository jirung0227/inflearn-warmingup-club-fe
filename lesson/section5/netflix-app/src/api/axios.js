import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "62e805f4778f9525b95164b239ca8a6b",
    language: "ko-KR",
  },
});

export default instance;
