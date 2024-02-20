// SuccessModal.js
import React, { useEffect } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  Image,
  Center,
  Text,
} from "@chakra-ui/react";
import theme from "../../themes/theme";
import { useNavigate } from "react-router-dom";
import Background from "../../assets/success-background.webp";

const SuccessModal = ({ isOpen, onClose, message, pathNavigate, icon }) => {
  const navigate = useNavigate();
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      onClose(); // Fechar o modal após 3 segundos
      navigate(pathNavigate); // Navegar para a tela de login
    }, 3000);

    return () => clearTimeout(timeoutId); // Limpar o timeout se o componente for desmontado
  }, [onClose, navigate, pathNavigate]);

  return (
    <Center>
      <Modal isOpen={isOpen} isCentered>
        <ModalOverlay />
        <Center>
          <ModalContent
            borderRadius={"32px"}
            textAlign={"center"}
            style={{
              backgroundImage: `url(${Background})`,
              backgroundSize: "cover",
              width: "425px",
              height: "270px",
            }}
          >
            <ModalHeader marginTop={"50px"} padding={0}>
              <Center>
                <Image src={icon} w={"71px"} height={"63px"} />
              </Center>
            </ModalHeader>
            <ModalBody>
              <Text
                fontFamily={"Comfortaa"}
                theme={theme}
                color={theme.colors.pipocaColors.font}
                fontSize={"32px"}
                fontWeight={700}
                textShadow={"0px 4px 4px rgba(0, 0, 0, 0.25)"}
              >
                {message}
              </Text>
            </ModalBody>
          </ModalContent>
        </Center>
      </Modal>
    </Center>
  );
};

export default SuccessModal;
