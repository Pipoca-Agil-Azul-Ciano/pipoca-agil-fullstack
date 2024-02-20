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
  InputGroup,
  InputRightElement,
  Tooltip,
} from "@chakra-ui/react";
import IconError from "../../assets/errorIcon.png";
import Alert from "../../assets/alert.gif";
import CheckGif from "../../assets/check.gif";
import theme from "../../themes/theme";
import Eye from "../../assets/eye-open.svg";
import EyeClosed from "../../assets/eye-closed.svg";
import { Formik, Form, Field } from "formik";
import Icon from "../../assets/success-logo.webp";
import { Link as LinkSignup } from "react-router-dom";
import Rectangle from "../../assets/Signup/signup-img.png";
import TextField from "../../components/TextField";
import IconeDeVoltar from "../../assets/Login/IconeDeVoltar.png";
import LogoPipocaAgil from "../../assets/Login/LogoPipocaAgil.png";
import "./signup.css";
import Botao from "../../components/Botao";
import * as Yup from "yup";
import { signup } from "../../services/subscriber";
import SuccessModal from "../Modals/SuccessModal";
const currentDate = new Date();
const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .required("Campo obrigatório")
    .matches(
      /^[a-zA-Z]+$/,
      "O nome não pode conter números ou caracteres especiais"
    ),
  lastName: Yup.string()
    .required("Campo obrigatório")
    .matches(
      /^[a-zA-Z]+$/,
      "O sobrenome não pode conter números ou caracteres especiais"
    ),
  email: Yup.string().email("E-mail inválido").required("Campo obrigatório"),
  birthDate: Yup.date()
    .required("Campo obrigatório")
    .max(currentDate, "Data de Nascimento inválida")
    .min(currentDate.getFullYear() - 100, "Data de Nascimento inválida")
    .test(
      "minimum-age",
      "Cadastro permitido apenas para maiores de 18 anos",
      function (value) {
        const minAgeDate = new Date();
        minAgeDate.setFullYear(minAgeDate.getFullYear() - 18);
        return value <= minAgeDate;
      }
    )
    .transform((originalValue, originalObject) => {
      // Converte string para objeto Date
      return new Date(originalValue);
    }),
  password: Yup.string()
    .required("Campo obrigatório")
    .min(8, "Senha deve ter no mínimo 8 caracteres")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]/,
      "Senha fora do formato"
    ),
  confirmPassword: Yup.string()
    .required("Campo obrigatório")
    .oneOf([Yup.ref("password"), null], "As senhas não coincidem"),
  check: Yup.bool()
    .oneOf(
      [true],
      `É necessário concordar com os termos de políticas e privacidade`
    )
    .required(
      `É necessário concordar com os termos de políticas e privacidade`
    ),
});
const initialValues = {
  name: "",
  lastName: "",
  email: "",
  birthDate: "",
  password: "",
  confirmPassword: "",
  check: false,
};

function Signup() {
  const [isChecked, setIsChecked] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const getPasswordRules = (value) => {
    const isLengthValid = value.length >= 8;
    const isUpperCaseValid = /[A-Z]/.test(value);
    const isLowerCaseValid = /[a-z]/.test(value);
    const isNumberValid = /\d/.test(value);
    const isSpecialCharValid = /[@$!%*?&#]/.test(value);

    return {
      isLengthValid,
      isUpperCaseValid,
      isLowerCaseValid,
      isNumberValid,
      isSpecialCharValid,
    };
  };

  const handlePasswordChange = (e, values, setFieldValue) => {
    const newPasswordValue = e.target.value;
    const rules = getPasswordRules(newPasswordValue);
    setFieldValue("password", newPasswordValue);
    setFieldValue("isLengthValid", rules.isLengthValid);
    setFieldValue("isUpperCaseValid", rules.isUpperCaseValid);
    setFieldValue("isLowerCaseValid", rules.isLowerCaseValid);
    setFieldValue("isNumberValid", rules.isNumberValid);
    setFieldValue("isSpecialCharValid", rules.isSpecialCharValid);
  };
  const handleSubmit = async (values) => {
    try {
      await signup(
        {
          fullName: values.name + " " + values.lastName,
          email: values.email,
          password: values.password,
          dateBirth: values.birthDate,
        },
        () => setShowSuccessModal(true)
      );
    } catch (error) {
      console.error("Erro na requisição:", error);
    }
  };

  const handleCheckBox = (setFieldValue) => () => {
    setFieldValue("check", !isChecked);
    setIsChecked(!isChecked);
  };
  return (
    <Formik
      validationSchema={SignupSchema}
      initialValues={{
        ...initialValues,
        isLengthValid: false,
        isUpperCaseValid: false,
        isLowerCaseValid: false,
        isNumberValid: false,
        isSpecialCharValid: false,
      }}
      onSubmit={handleSubmit}
    >
      {({ errors, touched, setFieldValue, values }) => (
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
                <ChakraLink href="/">
                  <Image
                    src={IconeDeVoltar}
                    marginTop="50px"
                    marginLeft="30px"
                    boxSize="50px"
                  />
                </ChakraLink>
              </Box>
              <ChakraLink href="/">
                <Box position="absolute" top="6" right="4">
                  <Image src={LogoPipocaAgil} alt="Logo Pipoca Ágil" />
                </Box>
              </ChakraLink>
              <Box
                display={"flex"}
                flexDirection={"column"}
                alignItems={"center"}
                marginRight={"150px"}
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
                  <FormControl marginBottom={"1em"}>
                    <Field
                      as={TextField}
                      name="name"
                      placeholder="Nome"
                      type="text"
                      hasError={errors.name && touched.name}
                    />
                    <FormErrorMessage name="name" />
                    {errors.name && touched.name ? (
                      <Text fontSize={"12px"} marginLeft={10} color="red.500">
                        {errors.name}
                      </Text>
                    ) : null}
                  </FormControl>

                  <FormControl marginBottom={"1em"}>
                    <Field
                      as={TextField}
                      name="lastName"
                      placeholder="Sobrenome"
                      type="text"
                      hasError={errors.lastName && touched.lastName}
                    />
                    <FormErrorMessage name="lastName" />
                    {errors.lastName && touched.lastName ? (
                      <Text fontSize={"12px"} marginLeft={10} color="red.500">
                        {errors.lastName}
                      </Text>
                    ) : null}
                  </FormControl>

                  <FormControl marginBottom={"1em"}>
                    <Field
                      as={TextField}
                      name="email"
                      placeholder="E-mail"
                      type="email"
                      hasError={errors.email && touched.email}
                    />
                    <FormErrorMessage name="email" />
                    {errors.email && touched.email ? (
                      <Text fontSize={"12px"} marginLeft={10} color="red.500">
                        {errors.email}
                      </Text>
                    ) : null}
                  </FormControl>

                  <FormControl marginBottom={"16px"}>
                    <Field
                      as={TextField}
                      name="birthDate"
                      placeholder="Data de Nascimento"
                      type="text"
                      hasError={errors.birthDate && touched.birthDate}
                      onFocus={(e) => (e.target.type = "date")}
                    />
                    <FormErrorMessage name="birthDate" />
                    {errors.birthDate && touched.birthDate ? (
                      <Text fontSize={"12px"} marginLeft={10} color="red.500">
                        {errors.birthDate}
                      </Text>
                    ) : null}
                  </FormControl>

                  <FormControl marginBottom={"16px"} id="password-tooltip">
                    <Tooltip
                      width={"170px"}
                      offset={[-95, -30]}
                      paddingBottom={"12px"}
                      paddingTop={"12px"}
                      paddingRight={"8px"}
                      paddingLeft={"8px"}
                      borderRadius={10}
                      hasArrow={true}
                      arrowSize={20}
                      placement="right-start"
                      backgroundColor={"#E3E3E3"}
                      label={
                        <Box className="tooltip" fontFamily={"Comfortaa"}>
                          <Text
                            paddingLeft={"8px"}
                            marginBottom={"12px"}
                            fontFamily="Comfortaa"
                            fontSize="14px"
                            color={"black"}
                            fontWeight={700}
                          >
                            Senha deve
                          </Text>
                          <ul style={{ listStyleType: "none", margin: "10px" }}>
                            <li>
                              <Box display={"flex"} marginBottom={"8px"}>
                                {" "}
                                {values.isLengthValid ? (
                                  <Image
                                    src={CheckGif}
                                    w={"21px"}
                                    h={"20px"}
                                    marginRight={"10px"}
                                  />
                                ) : (
                                  <Image
                                    w={"21px"}
                                    h={"20px"}
                                    marginRight={"10px"}
                                    src={Alert}
                                  />
                                )}
                                <Text
                                  fontSize={"12px"}
                                  color={values.isLengthValid ? "black" : "red"}
                                >
                                  Conter 8 caracteres
                                </Text>
                              </Box>
                            </li>
                            <li>
                              <Box display={"flex"} marginBottom={"8px"}>
                                {" "}
                                {values.isUpperCaseValid ? (
                                  <Image
                                    src={CheckGif}
                                    w={"21px"}
                                    h={"20px"}
                                    marginRight={"10px"}
                                  />
                                ) : (
                                  <Image
                                    w={"21px"}
                                    h={"20px"}
                                    marginRight={"10px"}
                                    src={Alert}
                                  />
                                )}
                                <Text
                                  fontSize={"12px"}
                                  color={
                                    values.isUpperCaseValid ? "black" : "red"
                                  }
                                >
                                  Pelo menos uma letra maiúscula
                                </Text>
                              </Box>
                            </li>
                            <li>
                              <Box display={"flex"} marginBottom={"8px"}>
                                {" "}
                                {values.isLowerCaseValid ? (
                                  <Image
                                    src={CheckGif}
                                    w={"21px"}
                                    h={"20px"}
                                    marginRight={"10px"}
                                  />
                                ) : (
                                  <Image
                                    w={"21px"}
                                    h={"20px"}
                                    marginRight={"10px"}
                                    src={Alert}
                                  />
                                )}
                                <Text
                                  fontSize={"12px"}
                                  color={
                                    values.isLowerCaseValid ? "black" : "red"
                                  }
                                >
                                  Uma letra minúscula
                                </Text>
                              </Box>
                            </li>
                            <li>
                              <Box display={"flex"} marginBottom={"8px"}>
                                {" "}
                                {values.isNumberValid ? (
                                  <Image
                                    src={CheckGif}
                                    w={"21px"}
                                    h={"20px"}
                                    marginRight={"10px"}
                                  />
                                ) : (
                                  <Image
                                    w={"21px"}
                                    h={"20px"}
                                    marginRight={"10px"}
                                    src={Alert}
                                  />
                                )}
                                <Text
                                  fontSize={"12px"}
                                  color={values.isNumberValid ? "black" : "red"}
                                >
                                  Um número
                                </Text>
                              </Box>
                            </li>
                            <li>
                              <Box display={"flex"}>
                                {" "}
                                {values.isSpecialCharValid ? (
                                  <Image
                                    src={CheckGif}
                                    w={"21px"}
                                    h={"20px"}
                                    marginRight={"10px"}
                                  />
                                ) : (
                                  <Image
                                    w={"21px"}
                                    h={"20px"}
                                    marginRight={"10px"}
                                    src={Alert}
                                  />
                                )}
                                <Text
                                  fontSize={"12px"}
                                  color={
                                    values.isSpecialCharValid ? "black" : "red"
                                  }
                                >
                                  E um caractere especial (!,@,#,%)
                                </Text>
                              </Box>
                            </li>
                          </ul>
                        </Box>
                      }
                      isInvalid={!values.isPasswordValid}
                    >
                      <InputGroup>
                        <Box paddingLeft={"2.5em"}></Box>

                        <Field
                          as={TextField}
                          name="password"
                          errorBorderColor="crimson"
                          hasError={errors.password && touched.password}
                          placeholder="Senha com 8 caracteres"
                          type={showPassword ? "text" : "password"}
                          onChange={(e) => {
                            handlePasswordChange(e, values, setFieldValue);
                          }}
                        />

                        <InputRightElement
                          width="4.5rem"
                          marginRight={"2rem"}
                          marginTop={"0.8em"}
                        >
                          {showPassword ? (
                            <Image
                              src={Eye}
                              onClick={() => setShowPassword(false)}
                            />
                          ) : (
                            <Image
                              src={EyeClosed}
                              onClick={() => setShowPassword(true)}
                            />
                          )}
                        </InputRightElement>
                      </InputGroup>
                    </Tooltip>
                    <FormErrorMessage name="password" />
                    {errors.password && touched.password ? (
                      <Text fontSize={"12px"} marginLeft={10} color="red.500">
                        {errors.password}
                      </Text>
                    ) : null}
                  </FormControl>

                  <FormControl>
                    <InputGroup>
                      <Box paddingLeft={"2.5em"}></Box>
                      <Field
                        as={TextField}
                        name="confirmPassword"
                        placeholder="Repita a senha com 8 caracteres"
                        type={showConfirmPassword ? "text" : "password"}
                        hasError={
                          errors.confirmPassword && touched.confirmPassword
                        }
                      />
                      <InputRightElement
                        width="4.5rem"
                        marginRight={"2rem"}
                        marginTop={"0.6em"}
                      >
                        {showConfirmPassword ? (
                          <Image
                            src={Eye}
                            onClick={() => setShowConfirmPassword(false)}
                          />
                        ) : (
                          <Image
                            src={EyeClosed}
                            onClick={() => setShowConfirmPassword(true)}
                          />
                        )}
                      </InputRightElement>
                    </InputGroup>
                    <FormErrorMessage name="confirmPassword" />
                    {errors.confirmPassword && touched.confirmPassword ? (
                      <Text fontSize={"12px"} marginLeft={10} color="red.500">
                        {errors.confirmPassword}
                      </Text>
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
                      flexDirection={"row"}
                    >
                      <FormControl display={"flex"}>
                        <Checkbox
                          paddingRight={"12px"}
                          paddingTop={"10px"}
                          size="lg"
                          marginBottom={"10px"}
                          onChange={handleCheckBox(setFieldValue)}
                        ></Checkbox>

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
                      </FormControl>
                    </Box>
                  </Box>
                  <Box display={"flex"} justifyContent={"space-around"}>
                    {errors.check && touched.check ? (
                      <>
                        <Image marginLeft={10} src={IconError} />
                        <Text
                          fontSize={"12px"}
                          marginRight={20}
                          color="red.500"
                        >
                          {errors.check}
                        </Text>
                      </>
                    ) : null}
                  </Box>
                  <Center marginTop={5} className="font-text">
                    <Botao text={"Cadastrar"} type={"submit"} />
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
                    to="/login"
                  >
                    Faça login
                  </ChakraLink>
                </Box>
                {showSuccessModal ? (
                  <SuccessModal
                    message={"Cadastro realizado com sucesso!"}
                    pathNavigate={"/login"}
                    icon={Icon}
                    isOpen={showSuccessModal}
                    onClose={() => setShowSuccessModal(false)}
                  />
                ) : null}
              </Box>
            </Box>
          </div>
        </Form>
      )}
    </Formik>
  );
}

export default Signup;
