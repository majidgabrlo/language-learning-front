import axios from "axios";

const instance = axios.create({
  baseURL: "https://text-translator2.p.rapidapi.com/translate",
  headers: {
    "content-type": "application/x-www-form-urlencoded",
    "X-RapidAPI-Key": "792d2f2d2emsh70932a9b3174f98p12370djsn6c06b968109b",
    "X-RapidAPI-Host": "text-translator2.p.rapidapi.com",
  },
});

export default instance;
