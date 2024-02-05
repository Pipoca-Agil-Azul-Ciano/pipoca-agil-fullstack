import React from "react";
import Secao1 from "../../assets/Home/Seção 1.png";
import Secao2 from "../../assets/Home/Seção 2.png";
import Carousel from "react-elastic-carousel";
import Secao3e4 from "../../assets/Home/Seção 3 e 4.png";
import Secao567 from "../../assets/Home/Seção 5 6 7.png";
import Secao8 from "../../assets/Home/Seção 8.png";
import { Box, Center } from "@chakra-ui/react";
import HeaderHome from "../../components/Home/Header";
import { subs } from "../../services/subscomments";
import SubsComments from "../../components/Home/SubsComments";
import CustomButton from "../../components/Home/CustomButton";
import FooterHome from "../../components/Home/Footer";

export default function Home() {
  const breakPoints = [{ width: 1200, itemsToShow: 4 }];
  return (
    <Box display={"flex"} flexDirection={"column"}>
      <Box
        backgroundSize="cover"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        bgImage={Secao1}
        h={"1129px"}
        w={"1440px"}
      >
        <Center>
          <HeaderHome />
        </Center>
        <Center
          display={"flex"}
          justifyContent={"center"}
          alignContent={"center"}
          marginTop={"320px"}
          marginLeft={"120px"}
        >
          <CustomButton text={"Saiba Mais"} linkTo={"#section3"}/>
        </Center>
      </Box>
      <Box
        backgroundSize="cover"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        bgImage={Secao2}
        h={"1429px"}
        w={"1440px"}
      ></Box>
      <Box
        backgroundSize="cover"
        backgroundPosition="center"
	id="section3"
        backgroundRepeat="no-repeat"
        bgImage={Secao3e4}
        h={"2882px"}
        w={"1440px"}
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
      >
        <Box marginTop={"1200px"}>
          <Carousel breakPoints={breakPoints} showArrows={false}>
            {subs.map((sub) => (
              <div
              >
                <SubsComments photo={sub.image} comment={sub.comment} />
              </div>
            ))}
          </Carousel>
        </Box>
      </Box>
      <Box
        backgroundSize="cover"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        bgImage={Secao567}
        h={"3882px"}
        w={"1440px"}
      >

<Center
          display={"flex"}
          justifyContent={"center"}
          alignContent={"center"}
          marginTop={"2340px"}
        >
          <CustomButton text={"Inscrever-se"} />
        </Center>
      </Box>
      <Box
        backgroundSize="cover"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        bgImage={Secao8}
        h={"1429px"}
        w={"1440px"}
      ></Box>
      <FooterHome />
    </Box>
  );
}
