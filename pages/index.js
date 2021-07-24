

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Flex, Text,Image, Spacer, Heading, Progress, Box, Button, List, ListItem, ListIcon, HStack, Icon, InputGroup, InputLeftElement, Input, Grid, Select, Table, Circle, Tbody, Tfoot, Tr, Th, Td, Avatar, Square, position } from "@chakra-ui/react"
import Headers from '../components/layouts/Headers';
import Body from '../components/layouts/Body';
import { useRouter } from 'next/router';
import { MdCheckCircle, MdDashboard, MdGroupWork, MdInsertLink, MdNotifications, MdPeople, MdPerson, MdReceipt, MdSend, MdSettings, MdShoppingBasket, MdShoppingCart } from 'react-icons/md'
import { AiFillPieChart } from 'react-icons/ai';
import { FaPen } from 'react-icons/fa';

import { PhoneIcon, SearchIcon } from "@chakra-ui/icons";

export default function Home() {

  const router = useRouter();
  const loginSelector = useSelector(store => store.LoginReducers)
  const { accesstoken } = loginSelector;


  // useEffect(() => {


  //   if(!accesstoken){
  //     //router.push('/login')
  //   }
  //   return () => {

  //   }
  // }, [accesstoken])



  return (



    // <Box>
    //   <Headers />
    //   <Body />
    // </Box>

    <Box  ml="2">
      <Flex display="flex" direction="row" p="5" height="100%" alignItems="baseline" boxSizing="border-box" position="relative" maxW="100vw">
        <Flex w="14%" height="95vh" direction="column" style={{
          borderRight: "2px solid #E9F1FB",
       
        }} justifyContent="space-between">





          <Flex direction="column" alignContent="space-evenly">
            <Flex alignItems="start" mb="5" pt="5" >
              <HStack display="inline">
                <Icon as={MdGroupWork} w={10} h={10} color="#357ae2" display="inline" />
                <Text display="inline" alignSelf="center" color="#357ae2" mb="8" fontWeight="extrabold" pt={8} fontSize="xl">


                  Tumbas</Text>
              </HStack>
            </Flex>

            <Text color="#405281" fontWeight="bold" my="5" fontSize="md">Menu</Text>
            <List spacing={7} mb="5">
              <ListItem color="#357ae2" fontWeight="semibold" style={{
                borderRight: "4px solid #357ae2"
              }}>
                <ListIcon as={MdDashboard} w={5} h={5} /> Overview

                {/* <Text></Text> */}



              </ListItem>
              <ListItem fontWeight="medium"  transition="transform .2s" fontSize="sm" color="#96a3c4" _hover={{
            transform: 'scale(1.1)',
            color: "#357ae2",
        }}  >


                <ListIcon as={MdReceipt} w={5} h={5} /> Orders


              </ListItem>
              <ListItem fontWeight="medium" fontSize="sm" color="#96a3c4"  transition="transform .2s" fontSize="sm" color="#96a3c4" _hover={{
            transform: 'scale(1.1)',
            color: "#357ae2",
        }} >


                <ListIcon as={MdShoppingBasket} w={5} h={5} /> Products


              </ListItem>
              <ListItem fontWeight="medium" fontSize="sm" color="#96a3c4"  transition="transform .2s" fontSize="sm" color="#96a3c4" _hover={{
            transform: 'scale(1.1)',
            color: "#357ae2"
        }} >


                <ListIcon as={MdSettings} w={5} h={5} /> Settings


              </ListItem>

            </List>
            <Spacer />
            <Flex direction="column" >



              <Text color="#405281" fontWeight="bold" my="5" fontSize="md">Business</Text>
              <List spacing={7}>
                <ListItem fontWeight="medium" fontSize="sm" color="#96a3c4" fontSize="sm"  transition="transform .2s"  _hover={{
            transform: 'scale(1.1)',
            color: "#357ae2"
        }}>


                  <ListIcon as={MdSend} w={5} h={5} fontWeight="bold" /> Shipment


                </ListItem>
                <ListItem fontWeight="medium" fontSize="sm" color="#96a3c4"  transition="transform .2s"  _hover={{
            transform: 'scale(1.1)',
            color: "#357ae2"
        }}>
                  <ListIcon as={MdPeople} w={5} h={5} /> Employee




                </ListItem>



              </List>



            </Flex>

          </Flex>



          <Flex direction="column" w="80%">
            <Text color="#405281" fontWeight="bold" fontSize="sm">@ Tumbas. 2020</Text>
            <Text color="#96a3c4" fontSize="xs">Platform for Solution of all types of business to the more
              advance
            </Text>

          </Flex>


        </Flex>

        <Flex w="70%" height="95vh" direction="column" style={{
          borderRight: "2px solid #E9F1FB",
        
        }}  px={20} Flex="2">
          {/* //bg="#f5f9fe" */}
          <InputGroup mb="5">
            <InputLeftElement pointerEvents="none" children={<SearchIcon color="gray.500" />} />

            <Input bg="#f5f9fe" borderLeftRadius="15px" borderRightRadius="15px" type="text" placeholder="Search for product" />
          </InputGroup>
          <Text color="#273b71" fontWeight="bold" my="5" fontSize="md">Overview</Text>

          <Grid templateColumns="repeat(4,2fr)" gap="6">
            <Box borderRadius="10px" style={{
              border: "2px solid #E9F1FB",
            }} w="100%" h="150" p="3"  transition="transform .2s"  _hover={{
              transform: 'scale(1.1)',
              color: "#357ae2"
          }} >
              <Flex direction="row" alignItems="baseline" justifyContent="space-between">
                <MdShoppingBasket size={30} color="#ee7d3e" />
                <Spacer />
                <Text fontWeight="bold" alignSelf="center" color="#79c3a7">+25%</Text>
              </Flex>
              <Text color="#273b71" fontWeight="bold" mt="5" fontSize="xl">$27,340.00</Text>

              <Text fontWeight="medium" fontSize="sm" color="#96a3c4">Total Sales</Text>
            </Box>
            <Box borderRadius="10px" style={{
              border: "2px solid #E9F1FB",
            }} w="100%" h="150" p="3"  transition="transform .2s"  _hover={{
              transform: 'scale(1.1)',
              color: "#357ae2"
          }} >
              <Flex direction="row" alignItems="baseline" justifyContent="space-between">
                <AiFillPieChart size={30} color="#9c55e1" />
                <Spacer />
                <Text fontWeight="bold" alignSelf="center" color="#ff93a6">-32%</Text>
              </Flex>
              <Text color="#273b71" fontWeight="bold" mt="5" fontSize="xl">$27,340.00</Text>

              <Text fontWeight="medium" fontSize="sm" color="#96a3c4">Total Expenses</Text>
            </Box>
            <Box borderRadius="10px" style={{
              border: "2px solid #E9F1FB",
            }} w="100%" h="150" p="3"  transition="transform .2s"  _hover={{
              transform: 'scale(1.1)',
              color: "#357ae2"
          }} >
              <Flex direction="row" alignItems="baseline" justifyContent="space-between">
                <MdPeople size={30} color="#55b391" />
                <Spacer />
                <Text fontWeight="bold" alignSelf="center" color="#55b391">+48%</Text>
              </Flex>
              <Text color="#273b71" fontWeight="bold" mt="5" fontSize="xl">18,260.00</Text>

              <Text fontWeight="medium" fontSize="sm" color="#96a3c4">Total Visitors</Text>
            </Box>
            <Box borderRadius="10px" style={{
              border: "2px solid #E9F1FB",
            }} w="100%" h="150" p="3"  transition="transform .2s"  _hover={{
              transform: 'scale(1.1)',
              color: "#357ae2"
          }}>
              <Flex direction="row" alignItems="baseline" justifyContent="space-between">
                <MdShoppingCart size={30} color="#f64444" />
                <Spacer />
                <Text fontWeight="bold" alignSelf="center" color="#ff8298">-12%</Text>
              </Flex>
              <Text color="#273b71" fontWeight="bold" mt="5" fontSize="xl">11,340.00</Text>

              <Text fontWeight="medium" fontSize="sm" color="#96a3c4">Total Orders</Text>
            </Box>
          </Grid>
{/* ok */}
          <Box mt="9" borderRadius="10px" style={{
            border: "2px solid #E9F1FB",
          }} w="100%" h="300" p="3" >

            <Flex direction="row" justifyContent="space-between">

              <Flex>
                <Text color="#273b71" fontWeight="bold" fontSize="md" mr="3">Income</Text>
                <Text color="#8897bc" fontWeight="bold" fontSize="md">Expense</Text>
              </Flex>

              <Select variant="outline" size="sm" w={20}>
                <option>2020</option>
              </Select>

            </Flex>

          </Box>

          <Box mt="9" position="relative" overflow="auto" borderRadius="10px" style={{
            border: "2px solid #E9F1FB",
          }} w="100%"  p="3">

            <Text color="#273b71" fontWeight="bold" fontSize="md" mb="4" mr="3">Popular Products</Text>

            <Table variant="unstyled" >

              <Tr bg="#E9F1FB" color="#96a3c4">
                <Th borderLeftRadius="5px">Photos</Th>
                <Th>Name</Th>
                <Th>Date</Th>
                <Th>Category</Th>
                <Th>Brand</Th>
                <Th isNumeric>Price</Th>
                <Th borderRightRadius="5px">Status</Th>
              </Tr>

              <Tr fontSize="sm" fontWeight="semibold" >
                <Td><Square bg="#f5f8fd" borderRadius="5px" size={30}>
              <Image src="https://www.gizmochina.com/wp-content/uploads/2019/09/Apple-iPhone-11-1.jpg" />
              </Square></Td>
                <Td><Text display="block" color="#273b71" fontWeight="semibold">CowBoy Hat</Text>
                  <Text display="block" fontSize="xs" color="#96a3c4" >#28930003093</Text>

                </Td>
                <Td>Aug 12, 2020</Td>
                <Td>Fashion</Td>
                <Td>Swallow</Td>
                <Td isNumeric><Text color="#55b391">$99.89</Text></Td>
                <Td><Text display="block" color="#273b71" fontWeight="semibold">Available</Text>
                  <Text display="block" fontSize="xs" color="#96a3c4" >18k viewers</Text></Td>
              </Tr>

              <Tr fontSize="sm" fontWeight="semibold" >
                <Td><Square bg="#f5f8fd" borderRadius="5px" size={30}>
              <Image src="https://www.gizmochina.com/wp-content/uploads/2019/09/Apple-iPhone-11-1.jpg" />
              </Square>
              </Td>
                <Td><Text display="block" color="#273b71" fontWeight="semibold">Smartphone</Text>
                  <Text display="block" fontSize="xs" color="#96a3c4" >#28930003093</Text>

                </Td>
                <Td>Aug 12, 2020</Td>
                <Td>Gadget</Td>
                <Td>Mito</Td>
                <Td isNumeric><Text color="#55b391">$99.89</Text></Td>
                <Td><Text display="block" color="#273b71" fontWeight="semibold">Available</Text>
                  <Text display="block" fontSize="xs" color="#96a3c4" >18k viewers</Text></Td>
              </Tr>

            </Table>

          </Box>


        </Flex>

        <Box w="25%" height="95vh" ml={9} mr={9} overflow="hidden"  >
          <Flex direction="row" mb="5" justifyContent="space-evenly">

            <Circle size="50px" style={{
              border: "1px solid #e7effa"
            }}>
              <Icon as={MdNotifications} w={6} h={6} color="#243870" display="inline" />
            </Circle>

            <Spacer />
            <Circle size="50px" style={{
              border: "1px solid #e7effa"
            }}>
              <Icon as={FaPen} w={5} h={5} color="#243870" display="inline" />
            </Circle>


          </Flex>

          <Flex mt="12" direction="column" alignItems="center" justifyContent="center">


            <Avatar size="2xl" bg=" #357ae2" mb="5" icon={<MdPerson color="white" fontSize="5.5rem" />} />
            <Text display="block" mt="4" mb="5" fontSize="lg" color="#273b71" fontWeight="extrabold">Konter Pulsa</Text>


            <Flex justifyContent="space-around"  alignItems="center" borderRadius="10px" style={{
              border: "2px solid #E9F1FB",
            }} w="100%" h="100" p="3">
              <Flex direction="row" w="35%" justifyContent="space-evenly"  >
                <Square bg="#f5f8fd" borderRadius="5px" size={30}>
                  <MdShoppingBasket size={20} color="#243870"  />
                </Square>


                <Flex direction="column"  >

                  <Text color="#273b71" fontWeight="bold" fontSize="sm">218</Text>

                  <Text fontWeight="medium" fontSize="xs" color="#96a3c4">Products</Text>

                </Flex>

              </Flex>

              <Box borderRadius="10px" style={{
                border: "2px solid #E9F1FB",
              }} w="1%" h="10">

              </Box>


              <Flex direction="row" w="35%" justifyContent="space-evenly"  >
                <Square borderRadius="5px" bg="#f5f8fd" size={30}>
                  <MdPeople size={20} color="#243870" />
                </Square>


                <Flex direction="column"  >

                  <Text color="#273b71" fontWeight="bold" fontSize="sm">2,580</Text>

                  <Text fontWeight="medium" fontSize="xs" color="#96a3c4">Followers</Text>

                </Flex>

              </Flex>


            </Flex>

          </Flex>
          <Text color="#273b71" fontWeight="bold" fontSize="md" mt="5" mb="5">Reputation</Text>




          <Flex justifyContent="center" width="full" alignItems="start" direction="column" borderRadius="10px" style={{
            border: "2px solid #E9F1FB",
          }} w="full" h="100" p="3">
            <Flex direction="row" w="full" justifyContent="space-around"  >
              <Square bg="#fff2ee" borderRadius="5px" size={30}>
                <MdDashboard size={20} color="#ee7d3e" mr="2" pr="5" />
              </Square>


              <Flex flex="1" direction="column" ml="5"  >
                <Flex justifyContent="space-between" mb="2">
                  <Text color="#273b71" fontWeight="bold" fontSize="sm">Star Seller</Text>
                  <Spacer />
                  <Text color="#273b71" fontWeight="bold" fontSize="sm">85%</Text>
                </Flex>


                <Progress colorScheme="orange" size="xs" value={85} />

              </Flex>

            </Flex>





          </Flex>
<Flex w="full" justifyContent="space-between" mb="3">
<Text color="#273b71" fontWeight="bold" fontSize="md" mt="5" >Recent Orders</Text>
<Text color="#357ae2" fontWeight="bold" fontSize="md" mt="5" >See All</Text>
</Flex>

         

          <Flex justifyContent="space-evenly" overflow="auto" width="full" alignItems="start" direction="column" borderRadius="10px" style={{
            border: "2px solid #E9F1FB",
          }} w="100%"  p="3">
           
            <Flex w="full" direction="row" justifyContent="space-around" mb="5"    >
              <Square bg="#f5f8fd" borderRadius="5px" size={30}>
              <Image src="https://www.gizmochina.com/wp-content/uploads/2019/09/Apple-iPhone-11-1.jpg" />
              </Square>


              <Flex flex="1" direction="column" ml="5"  >
                <Flex justifyContent="space-between">
                  <Text color="#273b71" fontWeight="bold" fontSize="sm">Nikon D3350</Text>
                  <Spacer />
                  <Text  fontWeight="bold" fontSize="sm"  color="#55b391">+$80.00</Text>
                </Flex>


                <Text fontWeight="medium" fontSize="xs" color="#96a3c4">2 minutes Ago</Text>

              </Flex>

            </Flex>
            <Flex w="full" direction="row" justifyContent="space-around"  mb="5"  >
              <Square bg="#f5f8fd" borderRadius="5px" size={30}>
              <Image src="https://www.gizmochina.com/wp-content/uploads/2019/09/Apple-iPhone-11-1.jpg" />
              </Square>


              <Flex flex="1" direction="column" ml="5"  >
                <Flex justifyContent="space-between">
                  <Text color="#273b71" fontWeight="bold" fontSize="sm">Nikon D3350</Text>
                  <Spacer />
                  <Text  fontWeight="bold" fontSize="sm"  color="#55b391">+$80.00</Text>
                </Flex>


                <Text fontWeight="medium" fontSize="xs" color="#96a3c4">2 minutes Ago</Text>

              </Flex>

            </Flex>
            <Flex direction="row" w="full" justifyContent="space-around" mb="5"  >
              <Square bg="#f5f8fd" borderRadius="5px" size={30}>
               <Image src="https://www.gizmochina.com/wp-content/uploads/2019/09/Apple-iPhone-11-1.jpg" />
              </Square>


              <Flex flex="1" direction="column" ml="5"  >
                <Flex justifyContent="space-between">
                  <Text color="#273b71" fontWeight="bold" fontSize="sm">Redmin 4x</Text>
                  <Spacer />
                  <Text  fontWeight="bold" fontSize="sm"  color="#55b391">+$80.00</Text>
                </Flex>


                <Text fontWeight="medium" fontSize="xs" color="#96a3c4">2 minutes Ago</Text>

              </Flex>

            </Flex>
            <Flex direction="row" w="full" justifyContent="space-around"   mb="5" >
              <Square bg="#f5f8fd" borderRadius="5px" size={30}>
              <Image src="https://www.gizmochina.com/wp-content/uploads/2019/09/Apple-iPhone-11-1.jpg" />
              </Square>


              <Flex flex="1" direction="column" ml="5"  >
                <Flex justifyContent="space-between" >
                  <Text color="#273b71" fontWeight="bold" fontSize="sm">Acer E1-421</Text>
                  <Spacer />
                  <Text  fontWeight="bold" fontSize="sm"  color="#55b391">+$80.00</Text>
                </Flex>


                <Text fontWeight="medium" fontSize="xs" color="#96a3c4">2 minutes Ago</Text>

              </Flex>

            </Flex>





          </Flex>


        </Box>
      </Flex>

    </Box>



  )
}


