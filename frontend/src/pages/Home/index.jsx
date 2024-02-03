import React from 'react'
import Secao1 from "../../assets/Home/Home 2.png"
import Secao2 from "../../assets/Home/Seção 2.png"
import Secao3 from "../../assets/Home/Seção 3.png"
import Secao4 from "../../assets/Home/Seção 4.png"
import Secao5 from "../../assets/Home/Seção 5.png"
import Secao6 from "../../assets/Home/Seção 6.png"
import Secao7 from "../../assets/Home/Seção 7.png"
import Secao8 from "../../assets/Home/Seção 8.png"
import { Box, Center } from '@chakra-ui/react'
import Footer from '../../components/Footer'
import HeaderHome from '../../components/Home/Header'

export default function Home() {
  return (
	<Box display={"flex"} flexDirection={"column"}>
    <Box backgroundSize="cover"
        backgroundPosition="center"
        backgroundRepeat="no-repeat" bgImage={Secao1} h={"1129px"} w={"1440px"}>
	<Center><HeaderHome/></Center>	
	</Box>
    <Box backgroundSize="cover"
        backgroundPosition="center"
        backgroundRepeat="no-repeat" bgImage={Secao2} h={"1429px"} w={"1440px"}></Box>
    <Box backgroundSize="cover"
        backgroundPosition="center"
        backgroundRepeat="no-repeat" bgImage={Secao3} h={"1582px"} w={"1440px"}></Box>
 <Box backgroundSize="cover"
        backgroundPosition="center"
        backgroundRepeat="no-repeat" bgImage={Secao4} h={"1548px"} w={"1440px"}></Box>
	 <Box backgroundSize="cover"
        backgroundPosition="center"
        backgroundRepeat="no-repeat" bgImage={Secao5} h={"1554px"} w={"1440px"}></Box>
	 <Box backgroundSize="cover"
        backgroundPosition="center"
        backgroundRepeat="no-repeat" bgImage={Secao6} h={"1429px"} w={"1440px"}></Box>
	 <Box backgroundSize="cover"
        backgroundPosition="center"
        backgroundRepeat="no-repeat" bgImage={Secao7} h={"1429px"} w={"1440px"}></Box>
	 <Box backgroundSize="cover"
        backgroundPosition="center"
        backgroundRepeat="no-repeat" bgImage={Secao8} h={"1429px"} w={"1440px"}>
		
	</Box>
	<Footer/>
    </Box>
    
  )
}
