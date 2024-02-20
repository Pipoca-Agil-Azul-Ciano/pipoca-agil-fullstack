import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";

export default function CardTrail({ title, logo, description, ilustration }) {
  return (
    <Box
      w={"437px"}
      h={"339px"}
      backgroundColor={"#E3E3E3"}
      display={"flex"}
      flexDirection={"column"}
      fontFamily={"Questrial"}
      borderRadius={8}
      padding={"15px"}
      _hover={{"cursor":"pointer"}}
      justifyContent={"space-between"}
    >
      <Image src={logo} w={50} h={50}/>
      <Box display={"flex"} justifyContent={"space-between"}>
        <Box display={"flex"} flexDirection={"column"}>
          <Text fontSize={"24px"}>{title}</Text>
          <Text fontSize={"16px"}>{description}</Text>
        </Box>
        <Image src={ilustration} w={154} h={210}/>
      </Box>
    </Box>
  );
}
