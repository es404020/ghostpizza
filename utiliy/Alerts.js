import React from 'react'
import { Alert, AlertIcon, AlertTitle, AlertDescription } from '@chakra-ui/react';

const Alerts = ({ error }) => {
    return (
        <Alert status="error"
            variant="subtle"
            flexDirection="row"
            alignItems="center"
            justifyContent="center"

        >

            <AlertIcon />

            {error.message}
        </Alert>
    )
}

export default Alerts
