import React, { useState } from "react";
import {
  Box,
  Image,
  Link as ChakraLink,
  Text,
  FormErrorMessage,
  Center,
  FormControl,
  Checkbox,
} from "@chakra-ui/react";
import theme from "../../themes/theme";
import { Formik, Form, Field } from "formik";
import { useNavigate, Link as LinkSignup } from "react-router-dom";
import Rectangle from "../../assets/Signup/signup-img.png";
import TextField from "../../components/TextField";
import IconeDeVoltar from "../../assets/Login/IconeDeVoltar.png";
import LogoPipocaAgil from "../../assets/Login/LogoPipocaAgil.png";
import "./signup.css";
import Botao from "../../components/Botao";
import * as Yup from "yup";
import { signup } from "../../services/subscriber";
const currentDate = new Date();
const SignupSchema = Yup.object().shape({
  name: Yup.string()
  .required('Campo obrigatório')
  .matches(/^[a-zA-Z]+$/, 'O nome não pode conter números ou caracteres especiais'),
  lastName:Yup.string()
  .required('Campo obrigatório')
  .matches(/^[a-zA-Z]+$/, 'O sobrenome não pode conter números ou caracteres especiais'),
  email: Yup.string().email('E-mail inválido').required('Campo obrigatório'),
  birthDate: Yup.date()
  .required('Campo obrigatório')
    .max(currentDate, 'A data de nascimento não pode ser no futuro')
    .min(currentDate.getFullYear() - 100, 'Você não pode ter mais de 100 anos')
    .test('minimum-age', 'Você deve ter pelo menos 18 anos', function (value) {
      const minAgeDate = new Date();
      minAgeDate.setFullYear(minAgeDate.getFullYear() - 18);
      return value <= minAgeDate;
    })
    .transform((originalValue, originalObject) => {
      // Converte string para objeto Date
      return new Date(originalValue);
    }),
  password: Yup.string()
    .required('Campo obrigatório')
    .min(8, 'A senha deve ter pelo menos 8 caracteres')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/,
      'A senha deve conter pelo menos uma letra maiúscula, uma letra minúscula, um número e um caracter especial'
    ),
    confirmPassword: Yup.string()
    .required('Campo obrigatório')
    .oneOf([Yup.ref('password'), null], 'As senhas não coincidem'),
});
const initialValues = {
  name:"",
  lastName:"",
  email: "",
  birthDate:"",
  password: "",
 confirmPassword:""
};



function Signup() {
  const [isChecked,setIsChecked]=useState(true);
  


  const handleSubmit = async (values) => {
    try {
      await signup({fullName:values.name+" "+values.lastName,
      email:values.email,password:values.password,dateBirth:values.birthDate},navigate)
    } catch (error) {
      console.error("Erro na requisição:", error);
      alert("Falha no cadastro. Verifique suas informações.");
    }
  };
  
  const handleCheckBox=()=>setIsChecked(!isChecked)

  const navigate = useNavigate();



  return (
 <Formik
    validationSchema={SignupSchema}
    initialValues={initialValues}
    onSubmit={handleSubmit}>
      {({ errors, touched }) => (
    <Form>
      <div className="font-title">
        <Box
          display={"flex"}
          justifyContent={"space-evenly"}
          theme={theme}
          fontFamily={theme.fonts.pipocaFonts.heading}
          backgroundColor={"#E3E3E3"}
        >
        <Box marginRight={"auto"} display={"flex"} flexDirection={"row"}>
            <Image src={Rectangle} height={"100vh"} />
            <ChakraLink href="/caminho/do/link">
              <Image src={IconeDeVoltar} marginTop="50px" marginLeft="30px" boxSize="50px" />
            </ChakraLink>
          </Box>
          <Box position="absolute" top="6" right="4">
            <Image src={LogoPipocaAgil} alt="Logo Pipoca Ágil" />
          </Box>

          <Box
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
            marginRight={"130px"}
            marginTop="50px"
          >
            <Text
              fontSize="40px"
              theme={theme}
              color={theme.colors.pipocaColors.font}
              paddingTop={"30px"}
              fontWeight={700}
            >
              Boas-vindas ao Pipoca Ágil
            </Text>
            <Text
              fontSize="20px"
              color={theme.colors.pipocaColors.font}
              paddingBottom={10}
              fontWeight={400}
            >
              Cadastre-se gratuitamente como inscrito.
            </Text>

            <FormControl>
            <FormControl>
            <Field as={TextField}  name="name" placeholder="Nome" type="text"/>
            <FormErrorMessage name="name" />
            {errors.name && touched.name ? (
              <Text marginLeft={10} color="red.500">{errors.name}</Text>
            ) : null}
          </FormControl>
              <br />
              <FormControl>
            <Field   as={TextField} name="lastName" placeholder="Sobrenome" type="text"/>
            <FormErrorMessage name="lastName" />
            {errors.lastName && touched.lastName ? (
              <Text marginLeft={10} color="red.500">{errors.lastName}</Text>
            ) : null}
          </FormControl>
              <br />
              <FormControl>
            <Field as={TextField} name="email" placeholder="E-mail" type="email"/>
            <FormErrorMessage name="email" />
            {errors.email && touched.email ? (
              <Text marginLeft={10} color="red.500">{errors.email}</Text>
            ) : null}
          </FormControl>
              <br />
               <FormControl>
            <Field as={TextField} 
             name="birthDate" placeholder="Data de Nascimento" type="text"  onFocus={(e) => (e.target.type = 'date')}
       />
            <FormErrorMessage name="birthDate" />
            {errors.birthDate && touched.birthDate ? (
              <Text marginLeft={10} color="red.500">{errors.birthDate}</Text>
            ) : null}
          </FormControl>
             
              <br />
              <FormControl>
            <Field
              as={TextField}
              name="password"
              placeholder="Senha com 8 caracteres"
              type="password"
          
           
            />
            <FormErrorMessage name="password" />
            {errors.password && touched.password ? (
              <Text marginLeft={10} color="red.500">{errors.password}</Text>
            ) : null}
          </FormControl>
              <br />
              <FormControl>
            <Field
              as={TextField}
              name="confirmPassword"
              placeholder="Repita a senha com 8 caracteres"
              type="password"
            />
            <FormErrorMessage name="confirmPassword" />
            {errors.confirmPassword && touched.confirmPassword ? (
              <Text marginLeft={10} color="red.500">{errors.confirmPassword}</Text>
            ) : null}
          </FormControl>
              <Box
                display={"flex"}
                flexDirection={"row"}
                justifyContent={"space-around"}
                className="font-text"
              >

                <Box
                  display={"flex"}
                  paddingBottom={5}
                  marginTop={5}
                  textAlign={"center"}
                  alignItems={"start"}
                >
                        <Checkbox paddingRight={"12px"} paddingTop={"23px"}  size="lg" marginBottom={"10px"} onChange={handleCheckBox}></Checkbox>
                  <Box className="font-text">
                    Declaro que, ao continuar, concordo com os{" "}
                    <Text
                      fontSize="16px"
                      color={theme.colors.pipocaColors.link}
                      fontWeight={400}
                      as={LinkSignup}
                      to="/"
                    >
                      Termos de serviço
                    </Text>{" "}
                    e <br />
                    <Text
                      fontSize="16px"
                      color={theme.colors.pipocaColors.link}
                      fontWeight={400}
                      as={LinkSignup}
                      to="/"
                    >
                      Políticas de privacidade
                    </Text>
                  </Box>
                </Box>
              </Box>
              <Center marginTop={5} className="font-text">
                <Botao text={"Cadastrar"} type={"submit"} isDisabled={isChecked}/>
              </Center>
            </FormControl>
            <Box display={"flex"} marginTop={3} className="font-text">
              <Text fontSize="md" marginRight={"5px"} fontWeight={400}>
                Já possui uma conta?
              </Text>
              <ChakraLink
                fontSize="md"
                color={theme.colors.pipocaColors.link}
                fontWeight={400}
                as={LinkSignup}
                to="/"
              >
                Faça login
              </ChakraLink>
            </Box>
          </Box>
        </Box>
      </div>
      </Form>
        )}
    </Formik>
  );
}

export default Signup;
