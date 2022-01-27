import React from 'react'
import { Box, HStack } from '@chakra-ui/react'
import Category from './Category'

const Categories = () => {
    return (
        <Box mt={20} m={20}>
            <HStack spacing={7} overflow="scroll" mr={-50}>
                <Category name="Browse Used" link="" background=""/>
                <Category name="Patagonia Provisions" link="" background=""/>
                <Category name="Men's" link="" background=""/>
                <Category name="Women's" link="" background=""/>
                <Category name="Kids' & Baby" link="" background=""/>
            </HStack>
            
        </Box>
    )
}

export default Categories