import React from 'react'
import { Box, Button, Stack, Flex, Spacer, Image } from '@chakra-ui/react'
import { Search2Icon, HamburgerIcon, PlusSquareIcon, ExternalLinkIcon } from '@chakra-ui/icons'

import mountains from '../Images/mountains.png'

const FrontPage = () => {
    return (
        <Box height="900px" align="center" bgImage={mountains} bgRepeat="no-repeat" bgSize="cover" bgPos="center" >
            <Box color="white" fontWeight={700}>
                <Flex height={100} pt={10} justifyContent="center" alignItems="center">
                    <Box width="13%" fontSize="32px">
                        patagonia
                    </Box>
                    <Spacer/>
                    <Box ml="250px" px="50px" mt={4}>
                        Shop
                    </Box>
                    <Box px="50px" mt={4}>
                        Activism
                    </Box>
                    <Box px="50px" mt={4}>
                        Sports
                    </Box>
                    <Box pl="50px" mt={4}>
                        Stories
                    </Box>
                    <Spacer/>
                    <Spacer/>
                    <Box px="20px" mt={4}>
                        <Search2Icon h={6} w={6} />
                    </Box>
                    <Box px="20px" mt={4}>
                        <PlusSquareIcon h={6} w={6} />
                    </Box>
                    <Box px="20px" mt={4}>
                        <HamburgerIcon h={6} w={6} />
                    </Box>
                    <Spacer/>
                </Flex>
            </Box>
            <Box paddingTop={210} color="white" fontWeight={700} fontSize="3.8rem">
                Keep the Tongass Roadless
            </Box>
            <Box width="35%" color="white" fontSize="1.2rem">
                Make your voice heard about restoring the Roadless Rule protection in the Tongass National Forest.    
            </Box>

            <Box w="100%" textAlign="center" mt={10}>
                <Button w="200px" h="50px" mx={5} colorScheme='white' color='black' rounded="xl" variant="solid" bgColor="white" fontWeight={700}>
                    <ExternalLinkIcon color="black" /><Spacer/>Watch the Video
                </Button>
                <Button w="200px" h="50px" mx={5}variant='outline' rounded="xl" color="white" fontWeight={700}>
                    Submit a Comment
                </Button>
            </Box>
        </Box>
    )
}

export default FrontPage