import React from 'react'
import {  Stack,Grid, Skeleton } from "@chakra-ui/react"
const Loader = () => {
    return (
        <Grid templateColumns={["repeat(1, 5fr)", "repeat(3, 5fr)", "repeat(5, 5fr)"]} colSpan='auto' row gap={6}>

        
                <Skeleton height="200px" height="200px">

                </Skeleton>
                <Skeleton height="200px" height="200px">

                </Skeleton>
                <Skeleton height="200px" height="200px">

                </Skeleton>
                <Skeleton height="200px" height="200px">

                </Skeleton>
                <Skeleton height="200px" height="200px">

                </Skeleton>
                <Skeleton height="200px" height="200px">

</Skeleton>

         
        </Grid>
    )
}

export default Loader
