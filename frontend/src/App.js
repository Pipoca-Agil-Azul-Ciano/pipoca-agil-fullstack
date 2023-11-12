import Routes from "./routes/routes";
import { ChakraProvider } from '@chakra-ui/react'

import theme from './themes/theme'

function App() {
  return (
    <ChakraProvider >
     <Routes/>
     </ChakraProvider>
  );
}

export default App;
