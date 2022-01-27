import * as React from 'react'
import Categories from './Components/Categories'
import FrontPage from './Components/FrontPage'
import Header from './Components/Header'

// 1. import `ChakraProvider` component
import { ChakraProvider } from '@chakra-ui/react'

const App = () => {
  // 2. Use at the root of your app
  return (
    <ChakraProvider>
      <Header/>
      <FrontPage/>
      <Categories/>
    </ChakraProvider>
  )
}

export default App