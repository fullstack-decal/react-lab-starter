import * as React from 'react'
import { Box } from '@chakra-ui/react'

import Categories from './Components/Categories'
import FrontPage from './Components/FrontPage'
import Header from './Components/Header'

import { ChakraProvider } from '@chakra-ui/react'

const App = () => {
  return (
    <ChakraProvider>
      <Header/>
      <FrontPage/>
      <Categories/>
      <Box ml="50px">
        Credit: https://www.patagonia.com/home/
        <br/>
        Original: https://web.archive.org/web/20220112093640/patagonia.com/home/
      </Box>
    </ChakraProvider>
  )
}

export default App