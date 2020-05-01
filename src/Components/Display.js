import React from 'react'
import {
    Box
} from '@chakra-ui/core'

const Display = () => {
    // Get room info
    // probably in some kind of useEffect to update every time a player moves rooms

    return(
        <Box maxW="lg" borderWidth='10px' rounded='md'>
            <Box
                mt="3"
                as="h2"
                lineHeight="tight"
            >
            Display the room info here!
            </Box>
        </Box>
    )
}

export default Display