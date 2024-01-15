import { Box, Image, Text, Link } from "@chakra-ui/react";
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
      paddingLeft={"80px"}
      paddingRight={"80px"}
      paddingBottom={"50px"}
      paddingTop={"50px"}
      width={"100%"}
      backgroundColor={"#585858"}
      justifyContent={'space-around'}
      alignItems={'center'}
      fontFamily={'Inter'}
      
    >
	
      <Image src={Logo} height={"70px"} width={"90px"} marginBottom={"10px"} marginRight={"90px"}/>
      <Box display={"flex"} color={'#FFF'} flexDirection={'column'}  fontWeight={"400"}>
        <Text paddingBottom={"5px"} >Dashboard</Text>
        <Text paddingBottom={"5px"} >Trilhas</Text>
        <Text paddingBottom={"5px"}>Meus conteúdos</Text>
      </Box>
      <Box display={"flex"} color={'#FFF'} flexDirection={'column'} fontWeight={"400"} marginLeft={"80px"}>
        <Text paddingBottom={"5px"}>Sobre o Pipoca Ágil</Text>
        <Text paddingBottom={"5px"}>Comunidade</Text>
        <Text paddingBottom={"5px"} >Políticas de privacidade</Text>
        <Text paddingBottom={"5px"}>Contate-nos</Text>
	
      </Box>
     
  
     
     
      <Box display={"flex"} color={'#FFF'} flexDirection={'column'} marginLeft={"200px"}  marginRight={"90px"}>
        <Text marginBottom={'10px'} marginLeft={'7px'} fontWeight={"700"}>Siga-nos nas redes sociais</Text>
	<Box display={"flex"} >
		<Link href="https://www.instagram.com/pipocaagil/" isExternal>
	<Image src={Instagram} padding={'5px'}  />
	</Link>
	<Link href="https://www.linkedin.com/company/pipoca-%C3%A1gil/mycompany/verification/" isExternal>
	<Image src={Linkedin}  padding={'5px'} />
	</Link>
	<Link href="https://web.facebook.com/pipocaagil/?_rdc=1&_rdr" isExternal>
	<Image src={Facebook}  padding={'5px'} />
	</Link>
	<Link href="https://twitter.com/pipoca_agil" isExternal>
	<Image src={X} padding={'5px'} />
	</Link>
	</Box>
      </Box>
      <Box display={"flex"} color={'#FFF'} flexDirection={'column'} marginTop={"5px"}>
        <Text fontWeight={"700"} marginLeft={'7px'}>Ouça-nos também</Text>
	<Box display={"flex"}>
		<Link href="https://open.spotify.com/show/5J1scP1l7m7kXK6v5RZS7J" isExternal>
	<Image src={Spotify} padding={'5px'}/>
	</Link>
	<Link href="https://www.youtube.com/channel/UCb2_j0yVyHR-Djxn7gyycqw" isExternal>
	<Image src={Youtube} padding={'5px'}/>
	</Link>
	</Box>
	
      </Box>
    </Box>
  );
}
