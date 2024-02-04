import React from "react";
import "../../../pages/Login/login.css";
import { Button,Link,Text } from "@chakra-ui/react";
function CustomButton({ text, type, isLoading, isDisabled,linkTo, ...props }) {
  return (
    <Link href={linkTo}>
    <Button
    
      isDisabled={isDisabled}
      isLoading={isLoading}
      bgGradient={" linear-gradient(181deg, #FFF 1.27%, #979797 177.59%)"}
      {...props}
      _hover={{ bg: "linear-gradient(189deg, rgba(127,0,255,1) 35%, rgba(225,0,255,1) 100%)",color:"white" }}
      type={type}
      height={"55px"}
      width={" 285px"}
      padding={"10px"}
      borderRadius={"24px"}
    >
     <Text
       fontSize={"24px"}
       className="font-text-button"
       fontFamily={"Comfortaa"}
     fontWeight={700}
      bgGradient=" linear-gradient(267deg, #7F00FF -14.87%, #E100FF 105.66%)"
      _hover={{color:"white"}}
      bgClip="text"
    >
     {text}
    </Text>
    </Button>
    </Link>
  );
}

CustomButton.propTypes = {};

export default CustomButton;
