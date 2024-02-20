import { Box, Text, Image, Center } from "@chakra-ui/react";
import React from "react";
import LogoChannel from "../../../assets/Dashboard/image 1.png";
import ThreePoints from "../../../assets/Dashboard/Group.png";
import CheckChannel from "../../../assets/Dashboard/Frame.png";
import "./style.css";
import PadlockVideo from "../../../assets/Dashboard/PadlockVideo.png";
export default function VideoComponent({
  thumb,
  title,
  views,
  datePost,
  blocked,
}) {
  return (
    <Box padding={"13px"} w={"291px"} _hover={{"cursor":"pointer"}}>
      <Center>
        {blocked ? (
          <div>
            <Image src={thumb} w={"291px"} h={"161px"} borderRadius={"10px"} />
            <Center h={0}>
              <span className="spanImageBlocked">
                {" "}
                <Image src={PadlockVideo} w={"50.38px"} h={"70.53px"} />
              </span>
            </Center>
          </div>
        ) : (
          <Image src={thumb} w={"291px"} h={"161px"} borderRadius={"10px"} />
        )}
      </Center>
      <Box
        display={"flex"}
        fontFamily={"Questrial"}
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
            {title}
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
            {views} views · {datePost}
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
  );
}
