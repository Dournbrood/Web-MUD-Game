import React from 'react'
import { Stack } from '@chakra-ui/core'
import Map from '../Components/Map'
import Controls from '../Components/Controls'
import Display from '../Components/Display'

const LandingPage = () => {
    return(
        <Stack spacing={6} align="center">
            <Map width={500} height={500} />
            <Display />
            <Controls />
        </Stack>
    )
}

export default LandingPage