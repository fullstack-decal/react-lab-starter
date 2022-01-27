import React from 'react'
import { Box, Flex, Spacer } from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'

const Header = () => {
    return (
        <Flex width="100%" background="#2B0096" height="50px" color="white" justifyContent="center" alignItems="center" pt="16px" fontWeight={700} fontSize="14px">
                <Box ml={30} w='270px' h='10'>Patagonia San Francisco, CA</Box>
                <Spacer/>
                <Box w='470px' h='10'>Free Shipping On Orders Over $75*<ChevronDownIcon color="white" w ={6} h={6}/></Box>
                <Spacer/>
                <Box w='100px' h='10'>Login</Box>
        </Flex>
    )
}

export default Header