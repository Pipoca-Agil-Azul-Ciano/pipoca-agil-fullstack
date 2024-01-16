import React from "react";
import "../pages/Login/login.css";
import { Button } from "@chakra-ui/react";
function SignButton({ text, type, isLoading, isDisabled, ...props }) {
  return (
    <Button
      isDisabled={isDisabled}
      isLoading={isLoading}
      bgGradient={" linear-gradient(180deg, #8D73CC 0%, #835AE2 100%)"}
      {...props}
      color={"#FFF"}
      _hover={{ bg: "linear-gradient(180deg, #C472D1 -36.46%, #C199E3 33.8%, #936AE2 80.44%, #835AE2 108.57%)" }}
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
