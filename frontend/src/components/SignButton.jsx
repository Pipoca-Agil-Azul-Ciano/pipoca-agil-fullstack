import React from "react";
import "../pages/Login/login.css";
import { Button } from "@chakra-ui/react";
function SignButton({ text, type, isLoading, isDisabled,bgColor,colorTextButton,hoverBgColor, ...props }) {

  return (
    <Button
      isDisabled={isDisabled}
      isLoading={isLoading}
      color={"#FFF"}
      bgGradient={bgColor}
      {...props}
      _hover={{  bg: hoverBgColor,color:"white" }}
      fontSize={"14px"}
      type={type}
      height={"48px"}
      width={" 169px"}
      className="font-text-button"
      fontWeight={400}
      padding={"12px 24px"}
      borderRadius={"24px"}
    >
      {text}
    </Button>
  );
}

SignButton.propTypes = {};

export default SignButton;
