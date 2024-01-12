import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";
import Logo from "../../assets/Dashboard/Footer/logo-footer.png";
import Youtube from '../../assets/Dashboard/Footer/YouTube.png'
import Facebook from '../../assets/Dashboard/Footer/Facebook.png'
import Linkedin from "../../assets/Dashboard/Footer/LinkedIn.png"
import X from "../../assets/Dashboard/Footer/TwitterX.png"
import Spotify from "../../assets/Dashboard/Footer/Spotify.png";
import Instagram from "../../assets/Dashboard/Footer/Instagram.png"
export default function Footer() {
  return (
    <Box
      display={"flex"}
      height={"216px"}
      width={"100%"}
      backgroundColor={"#585858"}
      justifyContent={'space-around'}
      alignItems={'center'}
    >
      <Image src={Logo} height={"70px"} width={"90px"} />
      <Box display={"flex"} color={'#FFF'} flexDirection={'column'}>
        <Text>Dashboard</Text>
        <Text>Trilhas</Text>
        <Text>Meus conteúdos</Text>
      </Box>
      <Box display={"flex"} color={'#FFF'} flexDirection={'column'}>
        <Text>Sobre o Pipoca Ágil</Text>
        <Text>Comunidade</Text>
        <Text>Políticas de privacidade</Text>
        <Text>Contate-nos</Text>
	
      </Box>
      <Box display={"flex"} color={'#FFF'} flexDirection={'column'}>
        <Text marginBottom={'10px'} marginLeft={'7px'}>Siga-nos nas redes sociais</Text>
	<Box display={"flex"} >
	<Image src={Instagram} padding={'5px'} height={"61px"} width={"48px"} />
	<Image src={Linkedin}  padding={'5px'}height={"61px"} width={"48px"} />
	<Image src={Facebook}  padding={'5px'}height={"61px"} width={"48px"} />
	<Image src={X} padding={'5px'} height={"61px"} width={"48px"} />
	</Box>
      </Box>
      <Box display={"flex"} color={'#FFF'} flexDirection={'column'}>
        <Text>Ouça-nos também</Text>
	<Box display={"flex"}>
	<Image src={Spotify} padding={'5px'} height={"61px"} width={"48px"} />
	<Image src={Youtube} padding={'5px'} height={"61px"} width={"48px"} />

	</Box>
      </Box>
    </Box>
  );
}
