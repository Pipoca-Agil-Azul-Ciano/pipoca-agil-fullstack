import React from "react";
import { Center, Input } from "@chakra-ui/react";

      
function TextField({ field, hasError,isCheck, ...props } ) {
  return (
    <Center>
    
      <Input
     
      {...field} {...props}

        focusBorderColor={hasError ? "red.500" : isCheck? '#2B6CB0':"#575450"}
        width={"30.5em"}
        placeholdersize="md"
        borderColor={ hasError ? "red.500" : isCheck? '#2B6CB0':"#575450"}
        height={"64px"}
        borderRadius={10}

      />
      
    </Center>
  );
}

TextField.propTypes = {};

export default TextField;
