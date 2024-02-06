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
		if(data.status===200){
		const token=data.data.hash;
		verifyUserType(token,navigate)
		sessionStorage.setItem("user",data.data.userType);
		sessionStorage.setItem("token",token);
	}
		
	})
	.catch((err) => {
		console.log(err);
		alert(err.response.data);	
		return err;
	      });
	    
	      return res
}
export const activatePlan=(token)=>{

	const res= httpClient.post("/user/subscription/activatePlan",{"userHash":token})
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
export const changePassword=(email)=>{

	const res= httpClient.post("/user/password-recovery",{"email":email})
	.then((data) =>{
	
		return data
		
		
		
	})
	.catch((err) => {
		console.log(err);
		alert(err.response.data);	
		return err.response.data
	      });
	   
	      return res
}

