import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";
import Logo from "../../assets/Dashboard/logo-footer.png";
export default function Footer() {
  return (
    <Box
      display={"flex"}
      height={"216px"}
      width={"100%"}
      backgroundColor={"#585858"}
    >
      <Image src={Logo} height={"70px"} width={"90px"} />
      <Box display={"flex"} color={'#FFF'} flexDirection={'column'}>
        <Text>Dashboard</Text>
        <Text>Trilhas</Text>
        <Text>Meus conteúdos</Text>
      </Box>
      <Box>
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Text></Text>
      </Box>
      <Box>
        <Text></Text>
      </Box>
      <Box>
        <Text></Text>
      </Box>
    </Box>
  );
}
