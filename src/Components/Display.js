import React, { useEffect, useState, useContext } from 'react'
import {
    Stack,
    Box
} from '@chakra-ui/core'
import { axiosWithAuth } from '../Utils/axiosWithAuth'
import RoomContext from '../context/RoomContext'


const Display = () => {
    const { roomData, updateRoom} = useContext(RoomContext)

    useEffect(() => {
        updateRoom()
    }, [])

    return(
        <Box maxW="lg" borderWidth='10px' rounded='md'>
            <Stack spacing={0} align="center">
                <Box 
                    mt="1"
                    fontWeight="semibold"
                    as="h4"
                    lineHeight="tight"
                    isTruncated
                >
                    Current Room: 
                </Box>
                <Box 
                    mt="1"
                    as="h2"
                    lineHeight="tight"
                    isTruncated
                >
                    {roomData.title}
                </Box>
                <Box 
                    mt="1"
                    fontWeight="semibold"
                    as="p"
                    lineHeight="tight"
                    isTruncated
                >
                    {roomData.description}
                </Box>
                <p>Other players in this room:</p>
                {roomData.players ? roomData.players.map(player => {
                    return(<p>{player}</p>)
                }) : <Box 
                        mt="1"
                        fontWeight="semibold"
                        as="p"
                        lineHeight="tight"
                        isTruncated
                    >
                        None
                    </Box>
                }
            </Stack>
        </Box>
    )
}

export default Display