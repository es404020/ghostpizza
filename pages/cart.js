import { useDispatch, useSelector } from "react-redux";
import { Flex, Spacer, Heading, Box, Button, Container,Text } from "@chakra-ui/react"
import Cartlist from "../components/layouts/Cartlist";
import currencyFormat from "../utiliy/currency"
const Cart = () => {

  

  const cartSlector = useSelector(store => store.cartReducer)



  const  cartItems=cartSlector.cartItem;
  const subtotal= cartItems.reduce((x,item)=>{
    return x + item.price;

  },0)

  return (


  <Flex direction="column"mt="5" >

    <Text fontWeight="bold" textAlign="center">Cart List</Text>



      {
       cartSlector.cartItem.map((item,i)=>{
         return <Cartlist key={i} pizza={item} />
       }) 

      }
<Text textAlign="center">subtotal:{currencyFormat(subtotal)}</Text>


  </Flex>


    // <Flex height="100vh" alignItems="center" justifyContent="center">

    //   <Box boxShadow="xs" p="6" width="600px" height="300px" rounded="md" bg="white" >
    //     heheh
    //   </Box >

    // </Flex>

  )
}

export default Cart
