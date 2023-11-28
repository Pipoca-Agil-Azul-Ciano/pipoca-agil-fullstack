import React from "react";
import {
  Box,
  Image,
  Link as ChakraLink,
  Text,
  FormControl,
  FormErrorMessage,
  Center
} from "@chakra-ui/react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { Link as LinkSignup, useNavigate } from "react-router-dom";
import Rectangle from "../../assets/Login/asideImg.png";
import IconeDeVoltar from "../../assets/Login/IconeDeVoltar.png";
import LogoPipocaAgil from "../../assets/Login/LogoPipocaAgil.png";
import Botao from "../../components/Botao";
import TextField from "../../components/TextField";

const LoginSchema = Yup.object().shape({
  email: Yup.string().email('E-mail inválido').required('Campo obrigatório'),
  password: Yup.string()
    .required('Campo obrigatório')
    .min(8, 'A senha deve ter pelo menos 8 caracteres')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/,
      'A senha deve conter pelo menos uma letra maiúscula, uma letra minúscula, um número e um caracter especial'
    ),
});

const initialValues = {
  email: "",
  password: "",
};


function Login() {
  const navigate = useNavigate();
  
  const handleSubmit = (values) => {
    // Simulação de autenticação
    console.log('Login bem-sucedido! Dados do usuário:', values);
  };
  return (
    <Formik
      validationSchema={LoginSchema}
      initialValues={initialValues}
      onSubmit={handleSubmit}
    >
         {({ errors, touched }) => (
      <Form>
        <Box
          className="font-title"
          display={"flex"}
          justifyContent={"space-evenly"}
          backgroundColor={"#E3E3E3"}
         
        >
          <Box marginRight={"auto"} display={"flex"} flexDirection={"row"}>
            <Image src={Rectangle} height={"100vh"} />
            <ChakraLink href="/caminho/do/link">
              <Image src={IconeDeVoltar} marginTop="50px" boxSize="50px" />
            </ChakraLink>
            <Box position="absolute" top="6" right="4">
            <Image src={LogoPipocaAgil} alt="Logo Pipoca Ágil" />
          </Box>
          </Box>
          
          

          <Box
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
            marginTop="50px"
            marginRight={"90px"}
          >
           
            <Text
              fontSize="40px"
              color={"#000"}
              paddingTop={"30px"}
              fontWeight={700}
            >
              Fazer login em sua conta
            </Text>
            <Text
              fontSize="20px"
              color={"#000"}
              paddingBottom={10}
              fontWeight={400}
            >
              Bem-vindo de volta ao podcast mais animado do mundo ágil!
            </Text>

            <FormControl>
              <Field as={TextField} name="email" placeholder="Email" type="email"/>
              <FormErrorMessage name="email" />
              {errors.email && touched.email ? (
                <Text marginLeft={20} color="red.500">{errors.email}</Text>
              ) : null}
            </FormControl>
          <br/>
            <FormControl>
              <Field
                as={TextField}
                name="password"
                placeholder="Senha"
                type="password"
              />
              <FormErrorMessage name="password" />
              {errors.password && touched.password ? (
                <Text marginLeft={20} color="red.500">{errors.password}</Text>
              ) : null}
            </FormControl>

        

            <Box
              display={"flex"}
              flexDirection={"row"}
              justifyContent={"space-around"}
              className="font-text"
            >
              <Box display={"flex"} paddingBottom={5} marginRight={"50px"}>
                <Text fontSize="16px" color={"#000"} marginRight={"10px"}>
                  Ainda não tem uma conta?
                </Text>
                <ChakraLink
                  fontSize="16px"
                  color={"#3182CE"}
                  fontWeight={400}
                  as={LinkSignup}
                  to="/signup"
                >
                  Cadastre-se
                </ChakraLink>
              </Box>

              <ChakraLink fontSize="16px" color={"#3182CE"} fontWeight={400} >
                Esqueceu a Senha?
              </ChakraLink>
            </Box>

            <Center marginTop={5} className="font-text">
              <Botao text={"Entrar"} type={"submit"}   isLoading={false}/>
            </Center>
          </Box>
        </Box>
      </Form>
         )}
    </Formik>
  );
}

export default Login;
