import React from 'react'
import { Box } from '@chakra-ui/react'
import forest from '../Images/forest.png'

const Category = ({ name, link, background }) => {
    console.log(name)
    return (
        <Box>
            <Box width={400} h={400} bgImage={forest} bgRepeat="no-repeat" bgSize="cover" bgPos="center" rounded='lg' maxH={500} maxW={500}>
                <Box align="center" color="white" pt="35%" fontSize={42} fontWeight={700}>
                    {name} 
                </Box>
            </Box>
        </Box>
    )
}

export default Category