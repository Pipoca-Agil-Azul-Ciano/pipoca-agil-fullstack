import axios from "axios";
export const url='http://localhost:8080'

export const httpClient = axios.create({ baseURL: url,
	headers: {
	  'Content-Type': 'application/json',
	  'Access-Control-Allow-Origin': 'http://localhost:3000',
	  // Adicione outros cabeçalhos conforme necessário
	}, });