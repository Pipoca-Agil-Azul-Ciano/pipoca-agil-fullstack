import React from "react";
import "../../../pages/Login/login.css";
import { Button,Text } from "@chakra-ui/react";
function ButtonSignNewsletter({ text, type, isLoading, isDisabled,bgColor,colorTextButton,hoverBgColor, ...props }) {
  return (
    <Button
    
      isDisabled={isDisabled}
      isLoading={isLoading}
      bgGradient={bgColor}
      {...props}
      _hover={{  bg: hoverBgColor,color:"white" }}
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
      bgGradient={colorTextButton}
      bgClip="text"
      _hover={{color:"white"}}
    >
     {text}
    </Text>
    </Button>
  );
}

ButtonSignNewsletter.propTypes = {};

export default ButtonSignNewsletter;
