import React from "react";
import Footer from "../../components/Footer";
import { Box, Image, Text, Center } from "@chakra-ui/react";
import Header from "../../components/Header";
import ImgSign from "../../assets/Dashboard/fundo_do_card_de_chamada_para_assinar.webp";
import Check from "../../assets/Dashboard/Group 2810.png";
import SignButton from "../../components/SignButton";
export default function Dashboard() {
  return (
    <Box
      minHeight="100vh" // Garante que o conteúdo ocupa pelo menos a altura da viewport
      display="flex"
      flexDirection="column"
      fontFamily={"Comfortaa"}
    >
      <Header />
      <Box flex="1" padding={"85px 20px 0px 60px"}>
        <Box display={"flex"} >
          <Box display={"flex"} flexDirection={"column"} >
            <Box >
            <Text fontSize={"61px"} fontWeight={700} color={"#585858"} marginBottom={"64px"}>
              Acesso exclusivo aos quatro últimos vídeos
            </Text>
            </Box>
            <Box width={"649px"}  borderRadius="10px" overflow={"hidden"}   marginBottom={"100px"}>
              <iframe
                width="649"
                height="360"
                src="https://www.youtube.com/embed/5JADwWwCe2g?si=cDGxyoynvRY5zmX4"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </Box>
          </Box>

          <Image
            src={ImgSign}
            marginTop="200px"
            w={"577px"}
            h={"432px"}
            zIndex={0}
           
          />

<Center>
            <Box
              position="absolute"
              top="54%"
              left="81%"
              transform="translate(-50%, -50%)"
              backgroundColor="#FFF"
              padding="20px"
              borderRadius="20px"
              width={"400px"}
              height={"271px"}
              zIndex="1"
              display={"flex"}
              alignContent={"center"}
              flexDirection={"column"}
              flexWrap={"wrap"}
            
            >
              <Center>
                <Text
                  color={"#000"}
                  fontSize={"24px"}
                  fontWeight={700}
                  marginTop={"10px"}
                
                >
                  Assine o Pipoca Ágil
                </Text>
              </Center>
              <Box
                fontFamily={"Inter"}
                fontSize={"16px"}
                fontWeight={400}
                marginTop={"20px"}
              >
                <Box display={"flex"} margin={"5px"}>
                  <Center>
                    <Image
                      src={Check}
                      w={"16px"}
                      h={"16px"}
                      marginRight={"5px"}
                    />{" "}
                    <Text>Acesso ilimitado à todos os conteúdos.</Text>
                  </Center>
                </Box>
                <Box display={"flex"} margin={"5px"}>
                  <Center>
                    <Image
                      src={Check}
                      w={"16px"}
                      h={"16px"}
                      marginRight={"5px"}
                    />{" "}
                    <Text>Acesso exclusivo à 4 vídeos do canal.</Text>
                  </Center>
                </Box>
                <Box display={"flex"} margin={"5px"}>
                  <Center>
                    <Image
                      src={Check}
                      w={"16px"}
                      h={"16px"}
                      marginRight={"5px"}
                    />{" "}
                    <Text>Totalmente gratuito.</Text>
                  </Center>
                </Box>
                <Center marginTop={"30px"}>
                  <SignButton text={"Assinar"} />
                </Center>
              </Box>
            </Box>
          </Center>
        </Box>
      </Box>
      <Footer />
    </Box>
  );
}
