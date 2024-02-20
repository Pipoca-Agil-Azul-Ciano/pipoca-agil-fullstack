import axios from "axios";
export const url = "http://4.228.88.39:8080";

export const httpClient = axios.create({ baseURL: url });
