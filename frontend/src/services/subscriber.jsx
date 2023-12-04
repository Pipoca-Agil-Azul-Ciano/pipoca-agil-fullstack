import { goToLoginPage } from "../routes/coordinator";
import { httpClient } from "./httpClient";
import axios from 'axios'
export const signup=(form, navigate, setSpan)=>{
	const config={
		method: 'post',
		url: 'http://localhost:8080' + "/user/create",
		headers: {  'Content-Type': 'application/json',
		'Access-Control-Allow-Origin': 'http://localhost:3000', },
		data: { fullName:"Gui Oliveira",
		
		email: "gui123@email.com",
		password: "Naruto2200",
		birthDate:"2001-12-24",
		},
	}
	axios(config)
	.then(() =>{
		console.log(form)
		goToLoginPage(navigate);
	})
	.catch((err) => {
		console.log(err.config.data);
		setSpan(err);
	      });
}