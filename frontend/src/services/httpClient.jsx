import axios from "axios";
export const url='http://20.197.232.54:8080'

export const httpClient = axios.create({ baseURL: url });