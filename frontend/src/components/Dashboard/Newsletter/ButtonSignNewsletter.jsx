import React from "react";
import "../../../pages/Login/login.css";
import { Button,Text } from "@chakra-ui/react";
function ButtonSignNewsletter({ text, type, isLoading, isDisabled, ...props }) {
  return (
    <Button
    
      isDisabled={isDisabled}
      isLoading={isLoading}
      bgGradient={" linear-gradient(181deg, #FFF 1.27%, #979797 177.59%)"}
      {...props}
      _hover={{ bg: "linear-gradient(180deg, #C472D1 -36.46%, #C199E3 33.8%, #936AE2 80.44%, #835AE2 108.57%)" }}
      type={type}
      height={"55px"}
      width={" 226px"}
      padding={"10px"}
      borderRadius={"24px"}
    >
     <Text
       fontSize={"24px"}
       className="font-text-button"
       fontFamily={"Comfortaa"}
     fontWeight={700}
      bgGradient=" linear-gradient(267deg, #7F00FF -14.87%, #E100FF 105.66%)"
      bgClip="text"
    >
     {text}
    </Text>
    </Button>
  );
}

ButtonSignNewsletter.propTypes = {};

export default ButtonSignNewsletter;
