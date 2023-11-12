import React from "react";
import {
  FormControl,
  FormLabel,
  FormHelperText,
  Text,
  Button,
  Box,
  Center,
  Image,
} from "@chakra-ui/react";
import Rectangle from "../../assets/Login/Rectangle 1.png";
import TextField from "../../components/TextField";
import { auto } from "@popperjs/core";
import theme from "../../themes/theme";
function Login() {
  return (
    <Box
      display={"flex"}
      justifyContent={"space-evenly"}
      theme={theme}
      fontFamily={"pipocaFonts.body"}
      backgroundColor={"#E3E3E3"}
    >
      <Box marginRight={auto}>
        <Image src={Rectangle} height={"100vh"} width={"100%"} />
      </Box>
      <Box
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        marginRight={auto}
      >
        <Text fontSize="40px" color={"pipocaColors.font"} paddingTop={"30px"}>
          Fazer login em sua conta
        </Text>
        <Text fontSize="20px" color={"pipocaColors.font"} paddingBottom={10}>
          Bem vindo de volta ao podcast mais animado do mundo ágil!
        </Text>
        <FormControl >
          <TextField placeholder={"Email"} type={"email"} />
          <br />
          <TextField placeholder={"Senha"} type={"password"} />
          <Box
            display={"flex"}
            flexDirection={"row"}
            justifyContent={"space-around"}
          >
            <Box display={"flex"} paddingBottom={5}>
              <Text fontSize="16px" color={"pipocaColors.font"} marginRight={'5px'}>
                Ainda não tem uma conta?
              </Text>
              <Text fontSize="16px" color={"pipocaColors.font"}>
                Cadastre-se
              </Text>
            </Box>

            <Text fontSize="16px" color={"pipocaColors.font"}>
              Esqueceu a Senha?
            </Text>
          </Box>
      <Center marginTop={5}>
          <Button colorScheme="blue" fontSize={"24px"} type="submit" height={"64px"} width={"20em"}>Entrar</Button></Center>
        </FormControl>
       <Box display={'flex'} marginTop={5}>
        <Text fontSize="md" marginRight={'5px'}>Não consegue fazer login?</Text>
        <Text fontSize="md">Visite nossa Central de ajuda</Text>
        </Box>
      </Box>
    </Box>
  );
}

export default Login;
