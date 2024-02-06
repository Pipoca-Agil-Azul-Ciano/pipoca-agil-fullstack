import React from "react";
import { ReactTyped } from "react-typed";
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
import PhotoGallery from "../../components/Home/PhotoGallery";

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
          marginTop={"176px"}
          marginLeft={"332px"}
          fontFamily={"Comfortaa"}
          fontSize={40}
          fontWeight={600}
        >
          <ReactTyped
            strings={[
              "<span style='color: #F1F1F1;'>Podcast de </span><strong style='color: #FFC52F;'>Agilidade</strong>",
              "<span style='color: #F1F1F1;'>Mais </span><strong style='color: #FFC52F;'>animado</strong>",
              "<span style='color: #F1F1F1;'>Do mundo </span><strong style='color: #FFC52F;'>Ágil</strong>",
            ]}
            typeSpeed={20}
            backSpeed={30}
            loop
            style={{ width: "500px" }}
          />
        </Center>

        <Center
          display={"flex"}
          justifyContent={"center"}
          alignContent={"center"}
          marginTop={"120px"}
          marginLeft={"120px"}
        >
          <CustomButton text={"Saiba Mais"} linkTo={"#section3"} />
        </Center>
      </Box>
      <Box
        backgroundSize="cover"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        bgImage={Secao2}
        h={"1429px"}
      id="section2"
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
        <Box marginTop={"1200px"} id="section4">
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
        id="section5"
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
        id="section8"
        h={"1429px"}
        w={"1440px"}
        position={"relative"}
      >
        <PhotoGallery id="section7"/>
      </Box>
      <FooterHome />
    </Box>
  );
}
