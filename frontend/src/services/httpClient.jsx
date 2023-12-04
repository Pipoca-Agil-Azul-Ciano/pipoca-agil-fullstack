import axios from "axios";
export const url='http://localhost:8080'

export const httpClient = axios.create({ baseURL: url });