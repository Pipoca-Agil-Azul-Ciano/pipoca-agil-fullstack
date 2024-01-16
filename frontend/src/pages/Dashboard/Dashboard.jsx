import React from 'react'
import Footer from '../../components/Footer'
import { Box } from '@chakra-ui/react'
import Header from '../../components/Header'

export default function Dashboard() {
  return (
    <Box
    minHeight="100vh" // Garante que o conteúdo ocupa pelo menos a altura da viewport
    display="flex"
    flexDirection="column">
      <Header/>
         <Box flex="1">
    {/* Conteúdo da página aqui */}
    Dashboard
  </Box>
	<Footer/>
    </Box>
  )
}
