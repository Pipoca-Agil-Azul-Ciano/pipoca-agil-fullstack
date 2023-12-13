import axios from "axios";
export const url='https://pipoca-backend.onrender.com'

export const httpClient = axios.create({ baseURL: url });