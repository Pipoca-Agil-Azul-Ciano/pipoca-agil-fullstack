import React from "react";
import { Center, Input } from "@chakra-ui/react";

function TextField({ field, ...props } ) {
  return (
    <Center>
    
      <Input
     
      {...field} {...props}
        focusBorderColor="#866FAD"
        width={"30.5em"}
        placeholdersize="md"
        borderColor={"#575450"}
        height={"64px"}
        borderRadius={10}
       
      />
    </Center>
  );
}

TextField.propTypes = {};

export default TextField;
