import React from 'react'
import {
    Button,
    Box,
    Stack
} from '@chakra-ui/core'
import {
    FaArrowAltCircleDown,
    FaArrowAltCircleLeft,
    FaArrowAltCircleRight,
    FaArrowAltCircleUp
} from 'react-icons/fa'

const Controls = () => {
    // handle up, down, left, right functions

    // return jsx UI
    return(
        <Stack spacing={0} align="center">
            <Box maxW="md" borderWidth='10px' rounded='lg'>
                <Box
                    color="gray.500"
                    fontWeight="semibold"
                    letterSpacing="wide"
                    fontSize="m"
                    textTransform="uppercase"
                    ml="2"
                >
                    Use the controls below to navigate the map.
                </Box>
            </Box>
            <Box maxW='m' borderWidth='1px' rounded='lg'>
                <Button variantColor='teal'>
                    <FaArrowAltCircleUp />
                </Button>
            </Box>
            <Box maxW='m' borderWidth='1px' rounded='lg'>
                <Button variantColor='teal'>
                    <FaArrowAltCircleLeft />
                </Button>
                <Button variantColor='teal'>
                    <FaArrowAltCircleRight />
                </Button>
            </Box>
            <Box maxW='m' borderWidth='1px' rounded='lg'>
                <Button variantColor='teal'>
                    <FaArrowAltCircleDown />
                </Button>
            </Box>
        </Stack>
    )
}

export default Controls