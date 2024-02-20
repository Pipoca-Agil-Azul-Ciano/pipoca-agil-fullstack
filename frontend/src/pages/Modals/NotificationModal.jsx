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

const NotificationModal = ({
  isOpen,
  onClose,
  message,
  pathNavigate,
  icon,
}) => {
  const navigate = useNavigate();
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      onClose(); // Fechar o modal após 3 segundos
      navigate(pathNavigate); // Navegar para a tela de login
    }, 3000);

    return () => clearTimeout(timeoutId); // Limpar o timeout se o componente for desmontado
  }, [onClose, navigate, pathNavigate]);

  return (
    <Center w={"499px"} h={"331.43"}>
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
                <Image src={icon} w={"88px"} height={"88px"} />
              </Center>
            </ModalHeader>
            <ModalBody>
              <Text
                fontFamily={"Inter"}
                theme={theme}
                color={"black"}
                fontSize={"22px"}
                fontWeight={"Regular"}
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

export default NotificationModal;
