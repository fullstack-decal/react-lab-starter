import React from 'react'
import { Box } from '@chakra-ui/react'
import forest from '../Images/forest.png'

const Category = ({ name, link, background }) => {
    console.log(name)
    return (
        <Box>
            <Box width={500} height={500} bgImage={forest} bgRepeat="no-repeat" bgSize="cover" bgPos="center" rounded='lg' maxH={300} maxW={300}>
                <Box align="center" color="white">
                    {name} 
                </Box>

            </Box>
        </Box>
    )
}

export default Category