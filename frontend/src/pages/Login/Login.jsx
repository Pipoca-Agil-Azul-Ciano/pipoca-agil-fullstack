import React, { useState } from "react";
import {
  FormControl,
  Text,
  Button,
  Box,
  Center,
  Image,
} from "@chakra-ui/react";
import theme from "../../themes/theme";
import Rectangle from "../../assets/Login/asideImg.png";
import TextField from "../../components/TextField";

function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [isEmailValido, setIsEmailValido] = useState(true);
  const [isSenhaValida, setIsSenhaValida] = useState(true);

  const handleEmailChange = (event) => {
    const novoEmail = event.target.value;
    console.log("Novo Email:", novoEmail);
    setEmail(novoEmail);
    setIsEmailValido(validarEmail(novoEmail));
  };

  const validarEmail = (email) => {
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const valido = regexEmail.test(email);
    console.log("Email Válido:", valido);
    return valido;
  };

  const handleSenhaChange = (event) => {
    const novaSenha = event.target.value;
    console.log("Nova Senha:", novaSenha);
    setSenha(novaSenha);
    setIsSenhaValida(validarSenha(novaSenha));
  };

  const validarSenha = (senha) => {
    const valido = senha.length >= 8 && /[A-Z]/.test(senha);
    console.log("Senha Válida:", valido);
    return valido;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Formulário enviado!");
    console.log("Email Válido:", isEmailValido);
    console.log("Senha Válida:", isSenhaValida);
    if (isEmailValido && isSenhaValida) {
      console.log("Login bem-sucedido!");
    } else {
      console.log("Por favor, corrija os campos inválidos.");
    }
  };
 
  return (
    <form onSubmit={handleSubmit}>
      <Box
        display={"flex"}
        justifyContent={"space-evenly"}
        theme={theme}
        fontFamily={theme.fonts.pipocaFonts.heading}
        backgroundColor={"#E3E3E3"}
      >
        <Box marginRight={"auto"}>
          <Image src={Rectangle} height={"100vh"} width={"100%"} />
        </Box>
        <Box
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          marginRight={"auto"}
        >
          <Text
            fontSize="40px"
            theme={theme}
            color={theme.colors.pipocaColors.font}
            paddingTop={"30px"}
          >
            Fazer login em sua conta
          </Text>
          <Text fontSize="20px" color={theme.colors.pipocaColors.font} paddingBottom={10}>
            Bem vindo de volta ao podcast mais animado do mundo ágil!
          </Text>
          <FormControl>
            <TextField
              id="emailField"
              placeholder={"Email"}
              type={"email"}
              value={email}
              onChange={handleEmailChange}
              error={isEmailValido ? "" : "E-mail inválido."}
            />
            <br />
            <TextField
              id="senhaField"
              placeholder={"Senha"}
              type={"password"}
              value={senha}
              onChange={handleSenhaChange}
              error={
                isSenhaValida
                  ? ""
                  : "A senha deve ter pelo menos 8 caracteres e uma letra maiúscula."
              }
            />
            <Box
              display={"flex"}
              flexDirection={"row"}
              justifyContent={"space-around"}
            >
              <Box display={"flex"} paddingBottom={5}>
                <Text
                  fontSize="16px"
                  color={"pipocaColors.font"}
                  marginRight={"5px"}
                >
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
              <Button
                bgGradient={"linear-gradient(180deg, #998AC6 0%, #866FAD 100%)"}
                color={"#FFF"}
                _hover={{ bg: "#866FAD" }}
                fontSize={"24px"}
                type="submit"
                height={"64px"}
                width={"20em"}
              >
                Entrar
              </Button>
            </Center>
          </FormControl>
          <Box display={"flex"} marginTop={5}>
            <Text fontSize="md" marginRight={"5px"}>
              Não consegue fazer login?
            </Text>
            <Text fontSize="md">Visite nossa Central de ajuda</Text>
          </Box>
        </Box>
      </Box>
    </form>
  );
}

export default Login;
