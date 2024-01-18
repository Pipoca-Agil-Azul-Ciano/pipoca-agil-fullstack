import { goToDashboard, goToLoginPage } from "../routes/coordinator";
import { httpClient } from "./httpClient";
export const signup=(form, navigate)=>{
	httpClient.post("/user/create",form)
	.then(() =>{
		console.log(form)
		goToLoginPage(navigate);
	})
	.catch((err) => {
		alert(err.response);	
	      });
}

export const login=(form,navigate)=>{
	httpClient.post("/user/authorize",form)
	.then(() =>{
		console.log(form)
		goToDashboard(navigate)
	})
	.catch((err) => {
		alert(err.response);	
	      });
}

