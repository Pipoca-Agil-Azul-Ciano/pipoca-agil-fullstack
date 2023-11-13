import React from "react";
import { Center, Input } from "@chakra-ui/react";
function TextField({ placeholder, type }) {
  return (
    <Center>
      <Input
        type={type}
        focusBorderColor="#866FAD"
        placeholder={placeholder}
        width={"30em"}
        placeholderSize="md"
        borderColor={"#575450"}
        height={"64px"}
	borderRadius={10}
      />
    </Center>
  );
}

TextField.propTypes = {};

export default TextField;
