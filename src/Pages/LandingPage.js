import React from 'react'
import { Stack } from '@chakra-ui/core'
import Map from '../Components/Map'
import Controls from '../Components/Controls'

const LandingPage = () => {
    return(
        <Stack spacing={4} align="center">
            <Map width={500} height={500} />
            <Controls />
        </Stack>
    )
}

export default LandingPage