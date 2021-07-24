import * as React from "react"


// 1. import `ChakraProvider` component
import { ChakraProvider } from "@chakra-ui/react"

import { Provider } from 'react-redux';
import {persistStore} from "redux-persist";

import store from '../redux/store';

import { PersistGate } from "redux-persist/integration/react";
import Headers from "../components/layouts/Headers";


const persistor = persistStore(store )
//using the offical redux tool 
function MyApp({ Component, pageProps }) {

  // if(!window){
  //   require('localstorage-polyfill')
  // }
  return (

    <ChakraProvider> 

      <Provider store={store}>
        <PersistGate  persistor={persistor}>
        {/* <Headers /> */}
      <Component {...pageProps} />
      </PersistGate>
      </Provider>

     
     
    </ChakraProvider>

    
  )
}

export default MyApp
