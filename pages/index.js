

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Flex, Spacer, Heading, Box, Button } from "@chakra-ui/react"
import Headers from '../components/layouts/Headers';
import Body from '../components/layouts/Body';
import { useRouter } from 'next/router';

export default function Home() {

  const router = useRouter();
  const loginSelector = useSelector(store => store.LoginReducers)
  const {  accesstoken } = loginSelector;


// useEffect(() => {


//   if(!accesstoken){
//     //router.push('/login')
//   }
//   return () => {
    
//   }
// }, [accesstoken])



  return (

  

      <Box>
        <Headers />
        <Body />
      </Box>






  )
}


