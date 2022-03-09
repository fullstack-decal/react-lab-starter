import React, { useState, useEffect } from 'react'
import { Box, Button, Flex, Spacer, IconButton, Modal, ModalContent, ModalFooter, ModalOverlay, ModalHeader, ModalCloseButton, ModalBody } from '@chakra-ui/react'
import { Search2Icon, HamburgerIcon, PlusSquareIcon, ExternalLinkIcon, ChevronDownIcon } from '@chakra-ui/icons'

import mountains from '../Images/mountains.png'

const FrontPage = () => {
    const [ opened, setOpen ] = useState(false);
    const [ count, setCount ] = useState(0);

    useEffect(() => {
        if (opened) {
            document.title = "Patagonia - Learn More";
        } else {
            document.title = "Patagonia - Home";
        }
      });
    

    const buttonOpen = (e) => {
        setOpen(true);
        setCount(count + 1);
    }
    
    const buttonClose = (e) => {
        setOpen(false);
    }

    return (
        <Box height="1000px" align="center" bgImage={mountains} bgRepeat="no-repeat" bgSize="cover" bgPos="center">
            <Box color="white" fontWeight={700} height={90} bgColor="none">
                <Flex height={90} pt={10} justifyContent="center" alignItems="center">
                    <Box width="13%" fontSize="32px">
                        patagonia
                    </Box>
                    <Spacer/>
                    <Box ml="200px" px="50px" mt={4}>
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
                    <IconButton
                        onClick={buttonOpen}
                        colorScheme='clear'
                        aria-label='Explore'
                        icon={<HamburgerIcon h={6} w={6} />}
                        />    
                    </Box>
                    <Spacer/>
                </Flex>
            </Box>
            <Box paddingTop={260} color="white" fontWeight={700} fontSize="3.8rem">
                Keep the Tongass Roadless
            </Box>
            <Box width="45%" color="white" fontSize="1.3rem">
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
            <Modal isOpen={opened} onClose={buttonClose} size="6xl">
                <ModalOverlay />
                <ModalContent>
                <ModalHeader>Login</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <Box float="left" >
                        Company
                    </Box>
                    <Box float="right" alignItems="center">
                        Customer Service
                    </Box>
                    <br/>
                    <Box>
                        This modal has been clicked {count} times!
                    </Box>
                </ModalBody>
                <ModalFooter>
                    <Button colorScheme='blue' mr={3} onClick={buttonClose}>
                    Close
                    </Button>
                    <Button variant='ghost'>Go to Product</Button>
                </ModalFooter>
                </ModalContent>
            </Modal>
            <Box mt={300}>
                <ChevronDownIcon w={8} h={8} color="white"/>
            </Box>
        </Box>
    )
}

export default FrontPage