import React, { useContext } from 'react'
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
import { axiosWithAuth } from '../Utils/axiosWithAuth'
import RoomContext from '../context/RoomContext'

const Controls = () => {
    const { updateRoom }
 = useContext(RoomContext)    
    // handle up, down, left, right functions
    const handleUp = (e) => {
        e.preventDefault()
        axiosWithAuth()
            .post('adv/move/', {"direction":"n"})
            .then(res => {
                console.log(res)
                updateRoom()
            })
            .catch(err => {
                console.log('error moving up ', err)
            })
    }

    const handleLeft = (e) => {
        e.preventDefault()
        axiosWithAuth()
            .post('adv/move/', {"direction":"w"})
            .then(res => {
                console.log(res)
                updateRoom()
            })
            .catch(err => {
                console.log('error moving left ', err)
            })
    }

    const handleRight = (e) => {
        e.preventDefault()
        axiosWithAuth()
            .post('adv/move/', {"direction":"e"})
            .then(res => {
                console.log(res)
                updateRoom()
            })
            .catch(err => {
                console.error(err)
            })
    }

    const handleDown = (e) => {
        e.preventDefault()
        axiosWithAuth()
            .post('adv/move/', {"direction":"s"})
            .then(res => {
                console.log(res)
                updateRoom()
            })
            .catch(err => {
                console.error(err)
            })
    }

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
                <Button variantColor='teal' onClick={handleUp}>
                    <FaArrowAltCircleUp />
                </Button>
            </Box>
            <Box maxW='m' borderWidth='1px' rounded='lg'>
                <Button variantColor='teal' onClick={handleLeft}>
                    <FaArrowAltCircleLeft />
                </Button>
                <Button variantColor='teal' onClick={handleRight}>
                    <FaArrowAltCircleRight />
                </Button>
            </Box>
            <Box maxW='m' borderWidth='1px' rounded='lg'>
                <Button variantColor='teal' onClick={handleDown}>
                    <FaArrowAltCircleDown />
                </Button>
            </Box>
        </Stack>
    )
}

export default Controls