import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { goToDashboard, goToDashboardSubscriber, goToHomePage } from "../routes/coordinator"

const useProtectedPage = () => {
  const navigate = useNavigate()

  useEffect(() => {
    if (sessionStorage.getItem("user")==="SUBSCRIBER") {
      goToDashboardSubscriber(navigate)
    } else if(sessionStorage.getItem("user")==="REGISTERED"){
	goToDashboard(navigate)
    }else{
	goToHomePage(navigate)
    }
  }, [navigate])

  return
}

export default useProtectedPage