import axios from "axios";

export const API = axios.create({
  baseURL: "http://localhost:5000/",
});

export const fetchdata = async () => await API.get("/api/chat");
