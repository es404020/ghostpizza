import { Text, Image, Badge, Flex, Spacer, Heading, Box, Button, Link, Input, Select } from "@chakra-ui/react"
import pizzas from "../../Resources/pizzadata";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
} from "@chakra-ui/react"


import { useDisclosure } from "@chakra-ui/react"
import { addToCart } from "../../redux/Cart/cartAction";


export const Pizza = ({ pizza }) => {

const varientss= [
    "small",
    "medium",
    "large"
  ]
    const [quantity, setQuantity] = useState(1);
    const [varient, setVarient] = useState('small');
    const { isOpen, onOpen, onClose } = useDisclosure();
    const dispatch = useDispatch();

function addToCarts(){
   

    dispatch(addToCart(pizza,quantity,varient));

}
    function currencyFormat(num) {
        return '$' + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    }
    return (
        <Box key={pizza.name}   transition="transform .2s" shadow="2xl" p="5" _hover={{
            transform: 'scale(1.1)'
        }}>


            <Modal isOpen={isOpen} onClose={onClose}
                motionPreset="slideInBottom"
            >
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>{pizza.name}  <Badge colorScheme="green">{pizza.category}</Badge></ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Flex direction="column" alignItems="center" justify="center">
                            <Image src={pizza.image} />

                            <Text>
                                {pizza.description}
                            </Text>

                        </Flex>
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme="blue" onClick={onClose}>
                            Close
                        </Button>

                    </ModalFooter>
                </ModalContent>
            </Modal>

            <Flex align="center" wrap="wrap" justify="center" direction="column">
                <Box>
                    <Text fontWeight="semibold">{pizza.name}</Text>

                </Box>
                <Image  onClick={onOpen} src={pizza.image} />


                <Flex align="start" justify="space-around">

                    <Box mr='1'>
                        <Flex direction="column" align="center" justify="center">

                            <Text alignSelf="center">Varients:</Text>


                            <Select  value={varient} onChange={(e) => { setVarient(e.target.value) }}>

                                {varientss.map((va,ke) => {
                                    return <option key={ke} value={va}>{va}</option>
                                })}



                            </Select>

                        </Flex>
                    </Box>
                    <Box ml='1'>
                        <Flex direction="column" align="center" justify="center">

                            <Text alignSelf="center">Quantity:</Text>

                            <Select  value={quantity} onChange={(e) => { setQuantity(e.target.value) }}>

                                {[...Array(10).keys()].map((x, va) => {
                                    return <option key={va} value={va + 1}>{va + 1}</option>
                                })}



                            </Select>

                        </Flex>
                    </Box>
                </Flex>
                <Box mt="5">
                    <Flex align="start" alignItems="stretch" justify="start">

                        <Text fontWeight="bolder" mr="3" mt="2">Price:{currencyFormat(pizza.prices[0][varient] * quantity)}</Text>
                        <Button colorScheme="teal" variant="solid" onClick={addToCarts} width="100%">
                            Add To Cart
                        </Button>

                    </Flex>

                </Box>

            </Flex>

        </Box>

    )
}
