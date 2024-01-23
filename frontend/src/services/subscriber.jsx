import { goToDashboard, goToLoginPage } from "../routes/coordinator";
import { httpClient } from "./httpClient";

export const signup=(form, navigate)=>{
	httpClient.post("/user/create",form)
	.then(() =>{
		console.log(form)
		goToLoginPage(navigate("/dashboard"));
	})
	.catch((err) => {
		alert(err.response);	
	      });
}

export const login=(form,navigate)=>{

	 httpClient.post("/user/authorize",form)
	.then((data) =>{
		
		console.log(form)
		console.log(data);
		goToDashboard(navigate)
	 
	})
	.catch((err) => {
		console.log(err);
		alert(err.response.data);	
	      });
	      
}

