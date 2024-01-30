import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";
import styles from "./Style.module.css";

function RelatedContentItem({ title, text, image, colorBar }) {
  return (
    <Box display={"flex"} flexDirection={"column"} position="relative">
      <div className={styles.related} style={{ '--card-bottom-color': colorBar }}>
        <Box display={"flex"} flexDirection={"column"}>
          <Text
            color={"black"}
            fontFamily={"Comfortaa"}
            fontSize={"32px"}
            fontWeight={"300"}
            textAlign={"center"}
            padding=" 32px 56px 16px 56px"
          >
            {title}
          </Text>
          <Text
            color={"#514B4B"}
            textAlign={"center"}
            fontFamily={"Montserrat"}
            padding={"0px 24px 88px 24px"}
            fontSize={"24px"}
            fontWeight={"400"}
            lineHeight={"35px"}
          >
            {text}
          </Text>
        </Box>

        <Image
          zIndex={1}
          src={image}
          h={" 377px"}
          w={"330.633px"}
          borderRadius={"0px 36px 30px 0px"}
        />
      </div>
    </Box>
  );
}
export default RelatedContentItem;
