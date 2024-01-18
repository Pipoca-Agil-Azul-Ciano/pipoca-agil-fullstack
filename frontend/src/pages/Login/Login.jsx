import React,  { useState } from "react";
import {
  Box,
  Image,
  Link as ChakraLink,
  Text,
  FormControl,
  FormErrorMessage,
  Center,
  InputGroup,
  InputRightElement
} from "@chakra-ui/react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import Eye from "../../assets/eye-open.svg"
import EyeClosed from "../../assets/eye-closed.svg"
import { Link as LinkSignup, useNavigate } from "react-router-dom";
import Rectangle from "../../assets/Login/asideImg.png";
import IconeDeVoltar from "../../assets/Login/IconeDeVoltar.png";
import LogoPipocaAgil from "../../assets/Login/LogoPipocaAgil.png";
import Botao from "../../components/Botao";
import TextField from "../../components/TextField";
import theme from "../../themes/theme";
import { login } from "../../services/subscriber";
const LoginSchema = Yup.object().shape({
  email: Yup.string().required('Campo obrigatório'),
  password: Yup.string()
    .required('Campo obrigatório')
    ,
});

const initialValues = {
  email: "",
  password: "",
};


function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const handleSubmit = async (values) => {
    try {
      await login(
        {
          email: values.email,
          password: values.password,
         
        },navigate("/dashboard"))
         
    } catch (error) {
      console.error("Erro na requisição:", error);
      alert("Falha no cadastro. Verifique suas informações.");
    }
  };


  const navigate = useNavigate();

  
  return (
    <Formik
      validationSchema={LoginSchema}
      initialValues={initialValues}
      onSubmit={handleSubmit}
    >
         {({ errors, touched, values  }) => (
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
              <InputGroup display={"flex"} justifyContent={"center"}>
              <Field
                as={TextField}
                name="password"
                placeholder="Senha"
                hasError={errors.password && touched.password}
                isCheck={errors.password === undefined && values.password !==''}
                type={showPassword ? 'text' : 'password'}
              />
               <InputRightElement
                        width="auto"
                        marginRight={"6rem"}
                        marginTop={"0.8em"}
                      >
                      {showPassword ? (
                          <Image src={Eye}
                            onClick={() => setShowPassword(false)}
                          />
                        ) : (
                          <Image src={EyeClosed} onClick={() => setShowPassword(true)} />
                        )}
                      </InputRightElement>
                    
                    </InputGroup>
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
                <Text fontSize="16px" color={"#000"} marginRight={"8px"}>
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

              <ChakraLink fontSize="16px" color={"#3182CE"} fontWeight={400} onClick={()=>navigate("/password-recovery")}>
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
