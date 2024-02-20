import React from "react";
import TextField from "../../components/TextField";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { Link } from "react-router-dom";
import ProfilePhoto from "../../assets/Profile/person.png";
import ProfilePhotoEdit from "../../assets/Profile/Component 72.png";
import {
  Box,
  Image,
  Flex,
  Text,
  FormErrorMessage,
  Center,
  FormControl,
  InputGroup,
  InputRightElement,
  Tooltip,
} from "@chakra-ui/react";
import Alert from "../../assets/alert.gif";
import CheckGif from "../../assets/check.gif";
import Eye from "../../assets/eye-open.svg";
import EyeClosed from "../../assets/eye-closed.svg";
import { Formik, Form, Field } from "formik";
import Icon from "../../assets/success-logo.webp";
import Botao from "../../components/Botao";
import * as Yup from "yup";
import SuccessModal from "../Modals/SuccessModal";
import { editUserProfile, getUserProfile } from "../../services/subscriber";
import { useNavigate } from "react-router-dom";
import NotificationModal from "../Modals/NotificationModal";
import IconModal from "../../assets/ModalImportant.png";
export default function Profile() {
  const [user, setUser] = React.useState({
    fullName: "",
    email: "",
    birthDate: "",
    password: "",
  });
  const [contador, setContador] = React.useState(0);
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [pathNavigate, setPathNavigate] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [birthDate, setBirthDate] = React.useState("");
  const [showPassword, setShowPassword] = React.useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);
  const [showSuccessModal, setShowSuccessModal] = React.useState(false);
  const [showNotificationModal, setShowNotificationModal] =
    React.useState(false);
  const currentDate = new Date();
  const SignupSchema = Yup.object().shape({
    name: Yup.string()
      .matches(
        /^[a-zA-Z ]+$/,
        "O nome não pode conter números ou caracteres especiais"
      )
      .required("Campo obrigatório*"),
    email: Yup.string().email("E-mail inválido").required("Campo obrigatório*"),
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
        return new Date(originalValue);
      }),
    password: Yup.string()
      .min(8, "Senha deve ter no mínimo 8 caracteres")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]/,
        "Senha fora do formato"
      )
      .required("Campo obrigatório*"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "As senhas não coincidem")
      .required("Confirme a nova senha*"),
  });

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
  let initialValues = {
    name: name,
    email: email,
    birthDate: birthDate,
    password: password,
    confirmPassword: "",
  };
  const navigate = useNavigate();
  const logout = () => {
    sessionStorage.clear();
    setTimeout(() => {
      navigate("/");
    }, "2000");
  };
  function formateDate(data) {
    const elementosData = data.split("-");
    const dataFormatada =
      elementosData[2] + "/" + elementosData[1] + "/" + elementosData[0];
    return dataFormatada;
  }
  React.useEffect(() => {
    const getUser = async () => {
      try {
        const token = sessionStorage.getItem("token");
        await getUserProfile(token)
          .then((data) => {
            setUser({
              fullName: data.data.fullName,
              email: data.data.email,
              birthDate: data.data.dateBirth,
              password: data.data.password,
            });
            setName(data.data.fullName);
            setEmail(data.data.email);
            setPassword(data.data.password);
            setBirthDate(formateDate(data.data.dateBirth));
          })
          .catch((err) => {
            console.log(err);
          });
      } catch (error) {
        console.error("Erro ao buscar dados do usuário:", error);
      }
    };
    getUser();
  }, [contador]);

  const handleSubmit = async () => {
    try {
      const token = sessionStorage.getItem("token");
      const result = await editUserProfile(
        {
          fullName: name,
          email: email,
          password: password,
          dateBirth: new Date(birthDate),
        },
        token
      );
      if (result.status === 200) {
        setMessage("Usuário editado com sucesso!");
        setPathNavigate("/profile");
        setContador(contador + 1);
        setShowSuccessModal(true);
      } else {
        setMessage(result.response.data);
        setPathNavigate("/profile");
        setShowNotificationModal(true);
      }
    } catch (error) {
      console.error("Erro na requisição:", error);
    }
  };

  return (
    <Box bgColor={"#DCDCDC"} h={"100%"} fontFamily={"Inter"}>
      <Header />
      <Center marginTop={"30px"} marginBottom={"100px"}>
        <Flex
          bgColor={"#DCDCDC"}
          w={"1290px"}
          h={"808px"}
          borderRadius={"36px"}
          boxShadow="4px 4px 8px rgba(0, 0, 0, 0.3)"
        >
          <Flex
            w={"320px"}
            h={"808px"}
            bgColor={"#747474"}
            borderRadius={"35px"}
            boxShadow="4px 4px 8px rgba(0, 0, 0, 0.3)"
            flexDirection={"column"}
            color={"#E3E3E3"}
            justifyContent={"space-between"}
          >
            <Flex flexDirection={"column"} justifyContent={"space-between"}>
              <Center>
                <Flex flexDirection={"column"} padding={"30px"}>
                  <Flex justifyContent={"center"}>
                    <Image src={ProfilePhoto} />
                  </Flex>
                  <Text fontSize={"24px"} fontWeight={"semi-bold"}>
                    {user.fullName}
                  </Text>
                </Flex>
              </Center>
              <Flex flexDirection={"column"} bgColor={"#0000002D"}>
                <Flex
                  flexDirection={"column"}
                  justifyContent={"center"}
                  padding={"10px"}
                  h={"72px"}
                >
                  Gerenciamento de Assinaturas
                </Flex>
                <Flex
                  flexDirection={"column"}
                  justifyContent={"center"}
                  padding={"10px"}
                  h={"72px"}
                >
                  Configurações da conta
                </Flex>
                <Flex
                  flexDirection={"column"}
                  justifyContent={"center"}
                  padding={"10px"}
                  h={"72px"}
                >
                  Editar Perfil
                </Flex>
              </Flex>
            </Flex>
            <Flex
              bgColor={"#0000002D"}
              h={"66px"}
              w={"320px"}
              borderRadius={"0px 0px 35px 35px"}
              textAlign={"center"}
              flexDirection={"column"}
              justifyContent={"center"}
            >
              <Link onClick={() => logout()} _hover={{ cursor: "pointer" }}>
                Sair da conta
              </Link>
            </Flex>
          </Flex>
          <Flex>
            <Flex flexDirection={"column"} padding={"50px"}>
              <Text fontSize={"36px"}>Meu perfil</Text>
              <Text fontSize={"24px"}>
                Editar as configurações do meu perfil
              </Text>
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
                    <Box
                      display={"flex"}
                      flexDirection={"column"}
                      alignItems={"center"}
                      marginTop="50px"
                    >
                      <FormControl>
                        <FormControl marginBottom={"1em"}>
                          <Field
                            as={TextField}
                            bgColor="white"
                            name="name"
                            onChange={(e) => setName(e.target.value)}
                            value={name}
                            placeholder="Nome"
                            type="text"
                            hasError={errors.name && touched.name}
                          />
                          <FormErrorMessage name="name" />
                          {errors.name && touched.name ? (
                            <Text
                              fontSize={"12px"}
                              marginLeft={2}
                              color="red.500"
                            >
                              {errors.name}
                            </Text>
                          ) : null}
                        </FormControl>

                        <FormControl marginBottom={"1em"}>
                          <Field
                            as={TextField}
                            name="email"
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            bgColor="white"
                            placeholder="E-mail"
                            type="email"
                            hasError={errors.email && touched.email}
                          />
                          <FormErrorMessage name="email" />
                          {errors.email && touched.email ? (
                            <Text
                              fontSize={"12px"}
                              marginLeft={2}
                              color="red.500"
                            >
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
                            onChange={(e) => setBirthDate(e.target.value)}
                            value={birthDate}
                            bgColor="white"
                            hasError={errors.birthDate && touched.birthDate}
                            onFocus={(e) => (e.target.type = "date")}
                          />
                          <FormErrorMessage name="birthDate" />
                          {errors.birthDate && touched.birthDate ? (
                            <Text
                              fontSize={"12px"}
                              marginLeft={2}
                              color="red.500"
                            >
                              {errors.birthDate}
                            </Text>
                          ) : null}
                        </FormControl>
                        <FormControl
                          marginBottom={"16px"}
                          id="password-tooltip"
                        >
                          <Tooltip
                            width={"170px"}
                            offset={[-95, 10]}
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
                                <ul
                                  style={{
                                    listStyleType: "none",
                                    margin: "10px",
                                  }}
                                >
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
                                        color={
                                          values.isLengthValid ? "black" : "red"
                                        }
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
                                          values.isUpperCaseValid
                                            ? "black"
                                            : "red"
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
                                          values.isLowerCaseValid
                                            ? "black"
                                            : "red"
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
                                        color={
                                          values.isNumberValid ? "black" : "red"
                                        }
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
                                          values.isSpecialCharValid
                                            ? "black"
                                            : "red"
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
                              <Box paddingLeft={"0.5em"}></Box>

                              <Field
                                as={TextField}
                                bgColor="white"
                                name="password"
                                errorBorderColor="crimson"
                                hasError={errors.password && touched.password}
                                placeholder="Senha com 8 caracteres"
                                type={showPassword ? "text" : "password"}
                                onChange={(e) => {
                                  handlePasswordChange(
                                    e,
                                    values,
                                    setFieldValue
                                  );
                                  setPassword(e.target.value);
                                }}
                              />

                              <InputRightElement
                                width="4.5rem"
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
                            <Text
                              fontSize={"12px"}
                              marginLeft={2}
                              color="red.500"
                            >
                              {errors.password}
                            </Text>
                          ) : null}
                        </FormControl>

                        <FormControl>
                          <InputGroup paddingLeft={"0.5em"}>
                            <Field
                              as={TextField}
                              name="confirmPassword"
                              bgColor="white"
                              placeholder="Repita a senha com 8 caracteres"
                              value={confirmPassword}
                              onChange={(e) =>
                                setConfirmPassword(e.target.value)
                              }
                              type={showConfirmPassword ? "text" : "password"}
                              hasError={
                                errors.confirmPassword &&
                                touched.confirmPassword
                              }
                            />
                            <InputRightElement
                              width="4.5rem"
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
                            <Text
                              fontSize={"12px"}
                              marginLeft={2}
                              color="red.500"
                            >
                              {errors.confirmPassword}
                            </Text>
                          ) : null}
                        </FormControl>

                        <Center marginTop={5} className="font-text">
                          <Botao
                            text={"Salvar"}
                            onClick={() => handleSubmit()}
                          />
                        </Center>
                      </FormControl>

                      {showSuccessModal ? (
                        <SuccessModal
                          message={message}
                          pathNavigate={pathNavigate}
                          icon={Icon}
                          isOpen={showSuccessModal}
                          onClose={() => setShowSuccessModal(false)}
                        />
                      ) : null}
                      {showNotificationModal ? (
                        <NotificationModal
                          message={message}
                          pathNavigate={pathNavigate}
                          icon={IconModal}
                          isOpen={showNotificationModal}
                          onClose={() => setShowNotificationModal(false)}
                        />
                      ) : null}
                    </Box>
                  </Form>
                )}
              </Formik>
            </Flex>
            <Flex
              marginLeft={"80px"}
              marginTop={"100px"}
              flexDirection={"column"}
            >
              <Image src={ProfilePhotoEdit} />
            </Flex>
          </Flex>
        </Flex>
      </Center>
      <Footer />
    </Box>
  );
}
