import { Box, Image, Text, Link } from "@chakra-ui/react";
import React from "react";
import Logo from "../../../assets/Dashboard/Footer/logo.png";
import SwitchButton from "../SwitchButton.jsx";
export default function HeaderHome() {
  return (
    <Box
      display={"flex"}
      height={"100px"}
      padding={"40px 56px 37px"}
      width={"100%"}
      backgroundColor={"#585858"}
      justifyContent={"space-between"}
      alignItems={"center"}
      fontFamily={"Inter"}
      margin="30px"
      borderRadius={"30px"}
    >
      <Box display={"flex"} alignItems={"center"}>
        <Image
          src={Logo}
          height={"70px"}
          width={"90px"}
          marginBottom={"5px"}
          marginRight={"40px"}
        />
      </Box>
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
        padding={"8px 0px"}
        color={"rgba(255, 255, 255, 0.50)"}
      >
        <Link
          padding={"16px"}
          marginRight={"20px"}
          _hover={{
            textDecoration: "none", // Remover sublinhado no hover
            color: "#FFF", // Cor que você deseja no hover
          }}
          href="#section2"
        >
          <Text>Sobre</Text>
        </Link>
        <Link
          padding={"16px"}
          marginRight={"20px"}
          _hover={{
            textDecoration: "none", // Remover sublinhado no hover
            color: "#FFF", // Cor que você deseja no hover
          }}
          href="#section3"
        >
          <Text>Recomendação de Trilhas</Text>
        </Link>
        <Link
          padding={"16px"}
          marginRight={"20px"}
          _hover={{
            textDecoration: "none", // Remover sublinhado no hover
            color: "#FFF", // Cor que você deseja no hover
          }}

          href="#section4"
        >
          <Text>Clube de assinantes</Text>
        </Link>
        <Link
          padding={"16px"}
          marginRight={"20px"}
          _hover={{
            textDecoration: "none", // Remover sublinhado no hover
            color: "#FFF", // Cor que você deseja no hover
          }}
          href="#section8"
        >
          <Text>Comunidade</Text>
        </Link>

        <SwitchButton />
      </Box>
    </Box>
  );
}
