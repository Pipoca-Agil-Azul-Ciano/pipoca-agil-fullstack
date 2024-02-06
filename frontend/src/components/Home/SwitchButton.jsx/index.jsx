import React, { useState } from "react";

import "./stylesSwitchButton.css";
import { goToLoginPage, goToSignup } from "../../../routes/coordinator";
import { useNavigate } from "react-router-dom";

function SwitchButton() {
  const [isChecked, setIsChecked] = useState(false);
  const navigate=useNavigate()
  const toggleSwitch = () => {
  
    setIsChecked(!isChecked);
    setTimeout(() => {
      if (isChecked) {
        goToSignup(navigate)
      }else{
        goToLoginPage(navigate)
      
      }
    }, "2000");
  };
  return (
    <div
      className={`switch ${isChecked ? "checked" : ""}`}
      onClick={toggleSwitch}
    >
      <span onClick={() => toggleSwitch()}>
        {isChecked ? "Cadastre-se" : "Entre"}
      </span>
      <div className="switch-handle">
        {!isChecked ? "Cadastre-se" : "Entre"}
      </div>
    </div>
  );
}

export default SwitchButton;
