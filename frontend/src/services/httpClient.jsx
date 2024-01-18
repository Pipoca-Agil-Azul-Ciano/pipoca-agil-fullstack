import axios from "axios";
export const url='http://20.226.19.81:8080'

export const httpClient = axios.create({ baseURL: url });