import React from "react";
import Footer from "../../components/Footer";
import Carousel from "react-elastic-carousel";
import { Box, Image, Text, Center, Grid, GridItem } from "@chakra-ui/react";
import Header from "../../components/Header";
import ImgSign from "../../assets/Dashboard/fundo_do_card_de_chamada_para_assinar.webp";
import Check from "../../assets/Dashboard/Group 2810.png";
import SignButton from "../../components/SignButton";
import IconModal from "../../assets/ModalImportant.png";
import LogoChannel from "../../assets/Dashboard/image 1.png";
import ThreePoints from "../../assets/Dashboard/Group.png";
import BgNewsletter from "../../assets/Dashboard/background-newsletter.webp";
import CheckChannel from "../../assets/Dashboard/Frame.png";
import ButtonSignNewsletter from "../../components/Dashboard/Newsletter/ButtonSignNewsletter";
import BgRelatedContent from "../../assets/Dashboard/related-content-bg.webp";
import RelatedContentItem from "../../components/Dashboard/RelatedContentItem";
import InfographicImage from "../../assets/Dashboard/infographic-image.png";
import Books from "../../assets/Dashboard/books.png";
import BlogArticles from "../../assets/Dashboard/blog-articles.png";
import Mindmap from "../../assets/Dashboard/mindmap-dashboard.png";
import { useState } from "react";
import { videos } from "../../services/videos";
import VideoComponent from "../../components/Dashboard/Video";
import "./styleDash.css";
import { motion } from "framer-motion";
import PadlockVideo from "../../assets/Dashboard/PadlockVideo.png";
import NotificationModal from "../Modals/NotificationModal";
export default function DashboardSubscriber() {
  const [showSuccessModal, setShowSuccessModal] = React.useState(false);

  const [video, setVideo] = useState({
    iframe:
      '<iframe width="560" height="315" src="https://www.youtube.com/embed/5JADwWwCe2g?si=Rh7b2q8LOeroGJ8v" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
    thumb:
      "https://i.ytimg.com/vi/5JADwWwCe2g/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLBlxz0f7F0mzx9EhjMzSdyenAmAAA",
    title: "Na Daily - Episódio 3 - 'Trabalhar em Equipe'",
    url: "https://www.youtube.com/embed/5JADwWwCe2g?si=Rh7b2q8LOeroGJ8v",
    datePost: "há 1 ano",
    views: "98",
    blocked: false,
  });
  const breakPoints = [{ width: 1200, itemsToShow: 4 }];

  const changeVideo = (video) => {
    setVideo(video);
  };
  return (
    <Box
      minHeight="100vh" // Garante que o conteúdo ocupa pelo menos a altura da viewport
      display="flex"
      flexDirection="column"
      fontFamily={"Comfortaa"}
    >
      <Header />
      <Box flex="1" padding={"85px 20px 0px 60px"}>
        <Box display={"flex"}>
          <Box display={"flex"} flexDirection={"column"}>
            <Box>
              <Text
                fontSize={"54.1px"}
                fontWeight={700}
                color={"#585858"}
                marginBottom={"64px"}
              >
                Acesso exclusivo aos quatro últimos vídeos
              </Text>
            </Box>
            <Box
              width={"649px"}
              borderRadius="10px"
              overflow={"hidden"}
              marginBottom={"50px"}
            >
              {!video.blocked ? (
                <iframe
                  width="649"
                  height="360"
                  src={video.url}
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
              ) : (
                <div
                  className=".videoDiv"
                  onClick={() => setShowSuccessModal(true)}
                >
                  <Image
                    src={video.thumb}
                    w={"649px"}
                    h={"360px"}
                    borderRadius={"10px"}
                  />
                  <Center h={0}>
                    <span className="spanImageBlockedDash">
                      {" "}
                      <Image src={PadlockVideo} w={"96.38px"} h={"116.53px"} />
                    </span>
                  </Center>
                </div>
              )}

              <Box
                display={"flex"}
                fontFamily={"Questrial"}
                width={"649px"}
                justifyContent={"space-between"}
                paddingTop={"16px"}
              >
                <Image
                  src={LogoChannel}
                  w={"36px"}
                  h={"36px"}
                  marginRight={"12px"}
                  marginLeft={"16px"}
                />
                <Box display={"flex"} flexDirection={"column"} flex={1}>
                  <Text
                    overflow={"hidden"}
                    textOverflow={"ellipsis"}
                    lineHeight={"20px"}
                    color={"black"}
                    fontSize={"16px"}
                    fontWeight={400}
                  >
                    {video.title}
                  </Text>
                  <Box display={"flex"}>
                    <Text fontSize={"12px"} fontWeight={400}>
                      Pipoca Ágil{" "}
                    </Text>
                    <Image
                      w={"15px"}
                      marginLeft={"8px"}
                      h={"15px"}
                      src={CheckChannel}
                    />
                  </Box>
                  <Text fontSize={"12px"} fontWeight={400}>
                    {video.views} views · {video.datePost}
                  </Text>
                </Box>
                <Image
                  src={ThreePoints}
                  w={"3px"}
                  h={"15px"}
                  marginTop={"12px"}
                  marginRight={"16px"}
                />
              </Box>
            </Box>
          </Box>

        
        </Box>
      </Box>

      <Box display={"flex"}>
        <Carousel breakPoints={breakPoints} showArrows={false} >
          {videos.map((video) => (
            <motion.div
              onClick={() => changeVideo(video)}
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <VideoComponent
                thumb={video.thumb}
                title={video.title}
                views={video.views}
                datePost={video.datePost}
                blocked={video.blocked}
              />
            </motion.div>
          ))}
        </Carousel>
      </Box>

      <Box
        bgImage={BgRelatedContent}
        backgroundSize="cover"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        h={"1230px"}
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Text
          color={"#FFF"}
          fontFamily={"Comfortaa"}
          fontSize={"40px"}
          fontWeight={700}
          marginBottom={"30px"}
          marginTop={"100px"}
        >
          Conteúdos Relacionados
        </Text>
        <Grid templateColumns="repeat(2, 2fr)" gap={5}>
          <GridItem>
            {" "}
            <RelatedContentItem
              title={"Infográfico"}
              text="Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati,"
              image={InfographicImage}
              colorBar={"#FCA382"}
            />
          </GridItem>
          <GridItem>
            {" "}
            <RelatedContentItem
              title={"Artigo de blog"}
              text="Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati,"
              image={BlogArticles}
              colorBar={"#E88DF0"}
            />
          </GridItem>
          <GridItem>
            {" "}
            <RelatedContentItem
              title={"Templates"}
              text="Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati,"
              image={Mindmap}
              colorBar={"#8D97F0"}
            />
          </GridItem>
          <GridItem>
            {" "}
            <RelatedContentItem
              title={"Livros indicados"}
              text="Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati,"
              image={Books}
              colorBar={"#D44DA6"}
            />
          </GridItem>
        </Grid>
      </Box>
      <Box display={"flex"} justifyContent={"center"}>
        <Box
          display={"flex"}
          flexDirection={"column"}
          zIndex={0}
          backgroundSize="cover"
          backgroundPosition="center"
          backgroundRepeat="no-repeat"
          backgroundImage={BgNewsletter}
          width="1381px"
          h={"540px"}
          justifyContent={"center"}
          margin={"150px 0px 100px 0px"}
        >
          <Text
            fontFamily={"Comfortaa"}
            fontSize={"49px"}
            color={"#FFF"}
            fontWeight={600}
            padding={"72px 575px 40px 112px"}
          >
            Assine nossa newsletter!
          </Text>
          <Text
            padding={"0px 378px 48px 112px"}
            fontFamily={"Questrial"}
            fontSize={"30px"}
            color={"#FFF"}
            fontWeight={400}
          >
            Fique por dentro de todos os episódios e receba os melhores momentos
            do podcast diretamente na sua caixa de entrada. Inscreva-se agora e
            não perca nada!
          </Text>
          <Box padding={"0px 499px 135px 112px"}>
            {" "}
            <ButtonSignNewsletter text={"Assinar"} />
          </Box>
        </Box>
      </Box>
      
      <Footer />
      {showSuccessModal ? (
        <NotificationModal
          message={
            "Para desfrutar deste conteúdo, torne-se um assinante Pipoca Ágil."
          }
          pathNavigate={"/dashboard"}
          icon={IconModal}
          isOpen={showSuccessModal}
          onClose={() => setShowSuccessModal(false)}
        />
      ) : null}
    </Box>
  );
}
