import { Text, Image, Badge, Flex, Spacer, Heading, Box, Button, Link, Input, Select, HStack, Center } from "@chakra-ui/react"
import { useDispatch, useSelector } from "react-redux";
import { addToCart,RemoveForCart } from "../../redux/Cart/cartAction";
import currencyFormat from '../../utiliy/currency'
const Cartlist = ({ pizza }) => {


    const dispatch = useDispatch();


    return (



        <Flex alignItems="center" justify="space-evenly" >
            <Flex direction="column">
                <Box mb="5">
                    <Text fontWeight="bold">{pizza.name}[{pizza.varient}]</Text>
                </Box>
                <Box mb="5">
                    <Text>Price:{currencyFormat(pizza.price)}*{pizza.quantity}={currencyFormat(pizza.price * pizza.quantity)} </Text>
                </Box>

                <HStack>

                    <Text>Quantity:</Text>

                    <Center w="40px" h="40px" bg="green" color="white" onClick={() => {dispatch(addToCart(pizza, pizza.quantity + 1, pizza.varient)) }}>
                        <Box as="span" fontWeight="bold" fontSize="lg">

                            +


                        </Box>
                    </Center>
                    <Text>{pizza.quantity}</Text>
                    <Center w="40px" h="40px" bg="tomato" color="white" onClick={() => {dispatch(addToCart(pizza, pizza.quantity - 1, pizza.varient)) }}>

                        <Box as="span" fontWeight="bold" fontSize="lg">

                            -


                        </Box>

                    </Center>
                </HStack>
            </Flex>

            <Flex>

                <Image src={pizza.image} height="200px" width="200px" />
                <Center w="40px" h="40px" bg="tomato" color="white"  onClick={() => {dispatch(RemoveForCart(pizza)) }}>

                    <Box as="span" fontWeight="bold" fontSize="lg">

                        |||


                    </Box>

                </Center>

            </Flex>
        </Flex>


    )
}

export default Cartlist
