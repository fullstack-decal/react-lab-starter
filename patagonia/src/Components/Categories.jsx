import React from 'react'
import { Box, HStack } from '@chakra-ui/react'
import Category from './Category'

const Categories = () => {
    return (
        <Box mt={20} m={20}>
            <HStack spacing={7}>
                <Category name="Browse Used" link="" background=""/>
                <Category name="Browse Used" link="" background=""/>
                <Category name="Browse Used" link="" background=""/>
                <Category name="Browse Used" link="" background=""/>
                <Category name="Browse Used" link="" background=""/>

            </HStack>
            
        </Box>
    )
}

export default Categories