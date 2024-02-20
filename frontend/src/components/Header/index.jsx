import { Box, Image, Link, Text } from "@chakra-ui/react";
import React from "react";
import Logo from "../../assets/Dashboard/Footer/logo.png";
import Profile from "../../assets/Dashboard/profile.png";
import { useNavigate } from "react-router-dom";
import Logout from "../../assets/Dashboard/logout.png"
export default function Header() {
  const navigate = useNavigate()
  const user=sessionStorage.getItem("user")
  const logout=()=>{
    sessionStorage.clear()
    setTimeout(() => {
    navigate("/")
  }, "2000");
  }
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
      <Box display={"flex"} alignItems={"center"} _hover={{"cursor":"pointer"}} onClick={()=>{user==="SUBSCRIBER"?navigate("/dashboardsubscriber"):navigate("/dashboard")}}>
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
          }}onClick={()=>{user==="SUBSCRIBER"?navigate("/dashboardsubscriber"):navigate("/dashboard")}}>
          <Text >Dashboard</Text>
        </Link>

        <Link padding={"16px" } marginRight={"40px"} _hover={{
            textDecoration: "none", // Remover sublinhado no hover
            color: "#FFF", // Cor que você deseja no hover
          }} href="#trails">
          <Text>Trilhas</Text>
        </Link>
        <Link padding={"16px"} marginRight={"30px"} _hover={{
            textDecoration: "none", // Remover sublinhado no hover
            color: "#FFF", // Cor que você deseja no hover
          }}  href="#dashboard">
          <Text>Conteúdos</Text>
        </Link>
        <Link padding={"16px"} onClick={()=>navigate("/profile")}>
          <Image src={Profile} height={"56px"} width={"56px"} />
        </Link>
        <Link padding={"16px"} onClick={() =>logout()}>
          <Image src={Logout} height={"30px"} width={"30px"} />
        </Link>

      </Box>
    </Box>
  );
}
