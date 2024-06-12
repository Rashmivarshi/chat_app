import axios from "axios";

export const API = axios.create({
  baseURL: "https://chatnat.onrender.com/",
});

export const fetchdata = async () => await API.get("/api/chat");
