import { Box, Image,Text } from '@chakra-ui/react'
import React from 'react'
import QuotationUp from "../../../assets/Home/SubsPhotos/image 7.png"
import QuotationDown from "../../../assets/Home/SubsPhotos/image 8.png"
export default function SubsComments({photo, comment}) {
  return (
    <Box display={"flex"} flexDirection={"column"} 
	borderRadius={"35px"}
	alignItems={"center"} 
	textAlign={"center"}
    backgroundColor={"white"} w={"314px"} h={"584px"}>
	<Image src={photo} w={"124px"} h={"124px"} marginTop={"42px"} marginBottom={"46px"}/>
	<Image src={QuotationUp} marginRight={"210px"}/>
	<Text fontFamily={"Montserrat"} padding={"10px"} fontSize={"24px"}>{comment}</Text>
	<Image src={QuotationDown}  marginLeft={"210px"}/>
    </Box>
  )
}
