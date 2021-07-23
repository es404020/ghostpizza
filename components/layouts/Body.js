import { Box, Text,Flex } from "@chakra-ui/react"

import { Grid, GridItem } from "@chakra-ui/react"
import { Pizza } from "./Pizza"
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPizzas } from "../../redux/Pizza/pizzaAction";
import Loader from "../../utiliy/loader";
import Alerts from "../../utiliy/Alerts";
import pizzass from "../../Resources/pizzadata"



const Body = () => {

    const dispatch = useDispatch();
    const pizzaSelector = useSelector(store => store.getAllPizzasTReducer)





    const { error, loading } = pizzaSelector;

    useEffect(() => {
        dispatch(getAllPizzas())
        return () => {

        }
    }, [dispatch])



    return (



        <Box m="6"  position="relative"  >
          

            {loading ? (
                <Flex minHeight='100vh' width='full' align='center' justifyContent='center' >

                    <Loader />
                </Flex>


            ) : error ? (
                <Flex minHeight='100vh' align='center' justifyContent='center' >
<Box width="50%">
<Alerts error={error} mt="100" ml="auto" mr="auto" />
</Box>
                  
                </Flex>
            ) : (
                <Grid templateColumns={["repeat(1, 5fr)", "repeat(3, 5fr)", "repeat(5, 5fr)"]} colSpan='auto' row gap={6}>

                    {pizzass.map((pizz, key) => {

                        return <Pizza key={key} pizza={pizz} />

                    })}
                </Grid>
            )}

        </Box>

    )
}

export default Body

