import {
  Box,
  Center,
  Link as ChakraLink,
  Image,
  FormControl,
  FormErrorMessage,
  Text,
  InputGroup,
  InputRightElement,
  Tooltip,
} from "@chakra-ui/react";
import React, { useState } from "react";
import Icon from "../../assets/success-logo.webp";

import SuccessModal from "../Modals/SuccessModal";
import Eye from "../../assets/eye-open.svg";
import IconError from "../../assets/errorIcon.png";
import EyeClosed from "../../assets/eye-closed.svg";
import Alert from "../../assets/alert.gif";
import CheckGif from "../../assets/check.gif";
import theme from "../../themes/theme";
import Background from "../../assets/background-password-recovery.svg";
import IconeDeVoltar from "../../assets/Login/IconeDeVoltar.png";
import PadlockOpen from "../../assets/padlock-open.png";
import Botao from "../../components/Botao";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import TextField from "../../components/TextField";
import { useNavigate } from "react-router-dom";
function NewPassword() {
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const PasswordSchema = Yup.object().shape({
    password: Yup.string()
      .required("Informe a nova senha.")
      .min(8, "Senha deve ter no mínimo 8 caracteres")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]/,
        "Senha fora do formato"
      ),
    confirmPassword: Yup.string()
      .required("Informe a nova senha.")
      .oneOf([Yup.ref("password"), null], "As senhas não conferem"),
  });
  const initialValues = {
    password: "",
    confirmPassword: "",
  };
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
  const navigate = useNavigate();
  const handleSubmit = async (values) => {
    setShowSuccessModal(true);
  };
  return (
    <Formik
      validationSchema={PasswordSchema}
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
          <Box
            theme={theme}
            color={theme.colors.pipocaColors.font}
            backgroundImage={Background}
            backgroundColor={"#E3E3E3"}
            style={{
              backgroundImage: `url(${Background}) no-repeat center center fixed`,
              width: "100%",
              height: "100vh",
              backgroundSize: "cover",
            }}
          >
            <Box marginRight={"auto"} display={"flex"} flexDirection={"row"}>
              <ChakraLink onClick={() => navigate("/password-recovery/")}>
                <Image
                  src={IconeDeVoltar}
                  marginTop="50px"
                  marginLeft="60px"
                  boxSize="50px"
                />
              </ChakraLink>
            </Box>
            <Center>
              <Box
                display={"flex"}
                justifyContent={"space-around"}
                alignItems={"center"}
                border={"0.5px solid #575450"}
                borderRadius={"25px"}
                backgroundColor={"#E3E3E3"}
                boxShadow={"0px 4px 4px 0px rgba(0, 0, 0, 0.25)"}
                padding={"20px"}
                marginTop={"100px"}
                height={"658px"}
                width={"874px"}
                flexDirection={"column"}
              >
                <Image src={PadlockOpen} marginTop={"20px"} />
                <Text
                  fontFamily={"Comfortaa"}
                  fontSize={"40px"}
                  fontWeight={700}
                  marginBottom={"-40px"}
                >
                  Criar uma nova senha
                </Text>
                <Text
                  marginTop={"30px"}
                  fontSize={"24px"}
                  fontWeight={400}
                  fontFamily={theme.fonts.pipocaFonts.placeholder}
                  textAlign={"center"}
                >
                  A nova senha deve conter pelo menos 8 caracteres.
                </Text>
                <FormControl marginTop={"10px"} id="password-tooltip">
                  {(errors.password && touched.password) ||
                  (errors.confirmPassword && touched.confirmPassword) ? (
                    <Box display={"flex"} marginLeft={170}>
                      <Image src={IconError} marginRight={1} />
                      <Text fontSize={"12px"} color="red.500">
                        {errors.password || errors.confirmPassword}
                      </Text>
                    </Box>
                  ) : null}
                  <Tooltip
                    width={"240px"}
                    offset={[40, -160]}
                    borderRadius={10}
                    paddingBottom={"12px"}
                    paddingTop={"12px"}
                    paddingRight={"8px"}
                    paddingLeft={"8px"}
                    arrowSize={20}
                    hasArrow={true}
                    placement="right-end"
                    backgroundColor={"#E3E3E3"}
                    label={
                      <Box className="tooltip" fontFamily={"Comfortaa"}>
                        <Text
                          fontFamily="Comfortaa"
                          fontSize="16px"
                          color={"black"}
                          fontWeight={700}
                          paddingLeft={"8px"}
                          marginBottom={"12px"}
                        >
                          Senha deve
                        </Text>
                        <ul style={{ listStyleType: "none", margin: "10px" }}>
                          <li>
                            <Box display={"flex"}>
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
                                marginBottom={"8px"}
                              >
                                Conter 8 caracteres
                              </Text>
                            </Box>
                          </li>
                          <li>
                            <Box display={"flex"}>
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
                            <Box display={"flex"}>
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
                            <Box display={"flex"}>
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
                    <InputGroup display={"flex"} justifyContent={"center"}>
                      <Field
                        as={TextField}
                        name="password"
                        errorBorderColor="crimson"
                        hasError={errors.password && touched.password}
                        placeholder="Digite a nova senha"
                        type={showPassword ? "text" : "password"}
                        isCheck={
                          errors.password === undefined &&
                          values.password !== ""
                        }
                        onChange={(e) => {
                          handlePasswordChange(e, values, setFieldValue);
                        }}
                      />

                      <InputRightElement
                        marginRight={"11.5rem"}
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
                </FormControl>

                <FormControl marginBottom={"30px"}>
                  <InputGroup display={"flex"} justifyContent={"center"}>
                    <Field
                      as={TextField}
                      name="confirmPassword"
                      placeholder="Repetir senha"
                      type={showConfirmPassword ? "text" : "password"}
                      isCheck={
                        errors.confirmPassword === undefined &&
                        values.confirmPassword !== ""
                      }
                      hasError={
                        errors.confirmPassword && touched.confirmPassword
                      }
                    />
                    <InputRightElement
                      marginRight={"11.5rem"}
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
                </FormControl>
                <Botao
                  text={"Recuperar"}
                  type={"submit"}
                  marginBottom={"70px"}
                />
              </Box>
            </Center>
          </Box>
          {showSuccessModal ? (
            <SuccessModal
              message={"Senha redefinida com sucesso!"}
              icon={Icon}
              pathNavigate={"/"}
              isOpen={showSuccessModal}
              onClose={() => setShowSuccessModal(false)}
            />
          ) : null}
        </Form>
      )}
    </Formik>
  );
}

export default NewPassword;
