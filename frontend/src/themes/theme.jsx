import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {

  pipocaColors:{
	font:"#665454",
	link:"#3B4CE4"
    },
   
    },
  fonts:{
    pipocaFonts:{
      title: "'Comfortaa', sans-serif",
      body: "'Comfortaa', sans-serif",
      placeholder:`'Questrial'`,
      link:"#3B4CE4",
      Checkbox: "#665454"
            },
  }
});
export default theme