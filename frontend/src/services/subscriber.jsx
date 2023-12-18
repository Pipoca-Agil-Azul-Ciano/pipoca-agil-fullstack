import { goToLoginPage } from "../routes/coordinator";
import { httpClient } from "./httpClient";
export const signup=(form, navigate)=>{
	httpClient.post("/user/create",form)
	.then(() =>{
		console.log(form)
		goToLoginPage(navigate);
	})
	.catch((err) => {
		alert(err.response.data);	
	      });
}

export const login=(form)=>{
	httpClient.post("/user/authorize",form)
	.then(() =>{
		console.log(form)
		
	})
	.catch((err) => {
		alert(err.response.data);	
	      });
}

