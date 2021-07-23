import { Flex, Spacer, Heading, Box, Button, Link as RLink,Text } from "@chakra-ui/react"
import { useDispatch, useSelector } from "react-redux";
import Link from 'next/link'
import { useRouter } from 'next/router'
const Headers = () => {

    const dispatch = useDispatch();
    const loginSelector = useSelector(store => store.LoginReducers)
    const {  user,accesstoken } = loginSelector;
    const router = useRouter()
    const cartSlector = useSelector(store => store.cartReducer);
    const style = {
        marginRight: 10
       
      }
    

    return (
        <Box boxShadow="md" p="4" position="fixed" width="100%" top="0" zIndex="2" mb="120px"  bg="white" >
            <Flex justify="space-between">
                <Box p="2">
                    <Heading size="md">Ghost Pizza</Heading>
                </Box>

                <Box>

                    <Flex justify="space-between">

                        {accesstoken ?(<Text mr="5">Username:{user.username}</Text>) :(
                             <RLink marginY="3" as={Link}  href="/login" fontWeight="bold">
                             <a style={style}> Login</a>  
       
                               </RLink>
                        ) }
                       
                        <RLink marginY="3"  as={Link}  href="/cart"  fontWeight="bold">
                          <a > Cart ({cartSlector.cartItem.length})</a>

                        </RLink>

                    </Flex>

                </Box>
            </Flex>
        </Box>
    )
}

export default Headers


