import React, { useEffect, useState, useContext } from 'react'
import {
    Stack,
    Box
} from '@chakra-ui/core'
import { axiosWithAuth } from '../Utils/axiosWithAuth'
import Context from '../context/context'


const Display = () => {
    const [roomData, setRoomData] = useContext(Context)
    // Get room info
    // probably in some kind of useEffect to update every time a player moves rooms
    useEffect(() => {
        axiosWithAuth()
            .get('/adv/init')
            .then(res => {
                console.log(res)
                setRoomData(res.data)
            })
            .catch(err => {
                console.error(err)
            })
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
                {roomData.players > 0 ? 
                <>
                <p>Other players in room:</p>
                {roomData.players.map(player => {
                    return(<p>{player}</p>)
                })}
                </> : 
                <>
                </>
                }
            </Stack>
        </Box>
    )
}

export default Display