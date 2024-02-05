import React, { useState } from "react";

import "./stylesSwitchButton.css";

function SwitchButton() {
  const [isChecked, setIsChecked] = useState(false);

  const toggleSwitch = () => {
    setIsChecked(!isChecked);
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
