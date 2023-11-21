import React from 'react'
import "../pages/Login/login.css";
import {
  Button
} from "@chakra-ui/react";
function Botao({text}) {
  return (
    <Button
                  bgGradient={
                    "linear-gradient(180deg, #998AC6 0%, #866FAD 100%)"
                  }
                  color={"#FFF"}
                  _hover={{ bg: "#866FAD" }}
                  fontSize={"24px"}
                  type="submit"
                  height={"64px"}
                  width={"20em"}
                  className="font-text-button"
                  fontWeight={400}
                >
                 {text}
                </Button>
  )
}

Botao.propTypes = {}

export default Botao
