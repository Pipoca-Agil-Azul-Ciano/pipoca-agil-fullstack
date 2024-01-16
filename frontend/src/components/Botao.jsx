import React from "react";
import "../pages/Login/login.css";
import { Button } from "@chakra-ui/react";
function Botao({ text, type, isLoading, isDisabled, ...props }) {
  return (
    <Button
      isDisabled={isDisabled}
      isLoading={isLoading}
      bgGradient={"linear-gradient(180deg, #998AC6 0%, #866FAD 100%)"}
      {...props}
      color={"#FFF"}
      _hover={{ bg: "linear-gradient(180deg, #5121FA 0%, #866FAD 100%)" }}
      fontSize={"24px"}
      type={type}
      height={"64px"}
      width={"20em"}
      className="font-text-button"
      fontWeight={400}
    >
      {text}
    </Button>
  );
}

Botao.propTypes = {};

export default Botao;
