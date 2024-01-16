import { Box, Image, Link, Text } from "@chakra-ui/react";
import React from "react";
import Logo from "../../assets/Dashboard/Footer/logo.png";
import Profile from "../../assets/Dashboard/profile.png";

export default function Header() {
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
      marginTop="auto"
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
        <Link padding={"16px"} marginRight={"40px"} _hover={{
            textDecoration: "none", // Remover sublinhado no hover
            color: "#FFF", // Cor que você deseja no hover
          }}>
          <Text >Dashboard</Text>
        </Link>

        <Link padding={"16px" } marginRight={"40px"} _hover={{
            textDecoration: "none", // Remover sublinhado no hover
            color: "#FFF", // Cor que você deseja no hover
          }}>
          <Text>Trilhas</Text>
        </Link>
        <Link padding={"16px"} marginRight={"30px"} _hover={{
            textDecoration: "none", // Remover sublinhado no hover
            color: "#FFF", // Cor que você deseja no hover
          }}>
          <Text>Meus conteúdos</Text>
        </Link>
        <Link padding={"16px"} >
          <Image src={Profile} height={"56px"} width={"56px"} />
        </Link>
      </Box>
    </Box>
  );
}
