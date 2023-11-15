import React, { useState } from "react";
import {
  FormControl,
  Text,
  Box,
  Center,
  Image,
  Link,
} from "@chakra-ui/react";
import theme from "../../themes/theme";
import Rectangle from "../../assets/Login/asideImg.png";
import TextField from "../../components/TextField";
import IconeDeVoltar from "../../assets/Login/IconeDeVoltar.png";
import LogoPipocaAgil from "../../assets/Login/LogoPipocaAgil.png";
import "./login.css";
import Botao from "../../components/Botao";

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
      <div className="font-title">
        <Box
          display={"flex"}
          justifyContent={"space-evenly"}
          theme={theme}
          fontFamily={theme.fonts.pipocaFonts.heading}
          backgroundColor={"#E3E3E3"}
        >
          <Box marginRight={"auto"}>
            <Image src={Rectangle} height={"100vh"}  />
          </Box>
          <Box marginRight="40px">
            <Link href="/caminho/do/link">
              <Image
                src={IconeDeVoltar}
                marginTop="50px"
                boxSize="30px"
              />
            </Link>
          </Box>
          <Box position="absolute" top="6" right="4">
            <Image src={LogoPipocaAgil} alt="Logo Pipoca Ágil" />
          </Box>

          <Box
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
            marginRight={"auto"}
            marginTop="50px"
          >
            <Text
              fontSize="40px"
              theme={theme}
              color={theme.colors.pipocaColors.font}
              paddingTop={"30px"}
              fontWeight={700}
            >
              Fazer login em sua conta
            </Text>
            <Text
              fontSize="20px"
              color={theme.colors.pipocaColors.font}
              paddingBottom={10}
              fontWeight={400}
            >
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
                className="font-text"
              >
                <Box display={"flex"} paddingBottom={5} >
                  <Text
                    fontSize="16px"
                    color={"pipocaColors.font"}
                    marginRight={"10px"}
                    
                  >
                    Ainda não tem uma conta?
                  </Text>
                  <Link
                    fontSize="16px"
                    color={theme.colors.pipocaColors.link}
                    fontWeight={400}
                  >
                    Cadastre-se
                  </Link>
                </Box>

                <Link fontSize="16px" color={theme.colors.pipocaColors.link} fontWeight={400}>
                  Esqueceu a Senha?
                </Link>
              </Box>
              <Center marginTop={5} className="font-text">
                <Botao text={"Entrar"}/>
              </Center>
            </FormControl>
            <Box display={"flex"} marginTop={5} className="font-text">
              <Text fontSize="md" marginRight={"5px"} fontWeight={400}>
                Não consegue fazer login?
              </Text>

              <Link fontSize="md" color={theme.colors.pipocaColors.link} fontWeight={400}>
                Visite nossa Central de ajuda
              </Link>
            </Box>
          </Box>
        </Box>
      </div>
    </form>
  );
}

export default Login;
