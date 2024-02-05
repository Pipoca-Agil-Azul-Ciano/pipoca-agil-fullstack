import { goToDashboard, goToLoginPage,goToDashboardSubscriber } from "../routes/coordinator";
import { httpClient } from "./httpClient";

export const signup=(form, navigate)=>{
	httpClient.post("/user/create",form)
	.then(() =>{
		console.log(form)
		goToLoginPage(navigate("/dashboard"));
	})
	.catch((err) => {
		console.log(err.response);	
	      });
}

export const login=(form,navigate)=>{

	
	const res= httpClient.post("/user/authorize",form)
	.then((data) =>{
		
		console.log(form)
		console.log(data);
		verifyUserType(data.data.hash,navigate)
		sessionStorage.setItem("user",data.data.userType);
		sessionStorage.setItem("token",data.data.hash);
		
		
	})
	.catch((err) => {
		console.log(err);
		alert(err.response);	
		return err;
	      });
	    
	      return res
}
export const activatePlan=(token)=>{

	const res= httpClient.post("/user/activatePlan",{"userHash":token})
	.then((data) =>{
		
		console.log(token)
		console.log(data);
	
	})
	.catch((err) => {
		console.log(err);
		alert(err.response);	
		return err;
	      });
	    
	      return res
}
export const verifyUserType=(token,navigate)=>{

	const res= httpClient.post("/user/verify",{"userHash":token})
	.then((data) =>{
	
		console.log("RESPOSTA DO VERIFY:",data);
		if (data.data==="SUBSCRIBE") {
			goToDashboardSubscriber(navigate)
		}else{
			goToDashboard(navigate)
		}
		
		
	})
	.catch((err) => {
		console.log(err);
		alert(err.response);	
		return err;
	      });
	    
	      return res
}