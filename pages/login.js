
import React from 'react'
import { Formik } from 'formik';
import { Input, Box, Heading, Flex, Text, Link, FormControl, FormLabel, Stack, Checkbox, Button } from "@chakra-ui/react"
import {login} from '../redux/Auth/authAction';
import { useDispatch, useSelector } from "react-redux";
import { Spinner } from "@chakra-ui/react"
import { useRouter } from 'next/router'

import Alerts from "../utiliy/Alerts";
const Login = () => {

    const dispatch = useDispatch();
    const loginSelector = useSelector(store => store.LoginReducers)
    const {  error, loading,sucess,accesstoken } = loginSelector;
    const router = useRouter()

    return (
        <Formik
            initialValues={{ username: '', password: '' }}
            validate={values => {
                const errors = {};
                if (!values.username) {
                    errors.username = 'Required';
                } 
                return errors;
            }}
            onSubmit={(values, { setSubmitting,resetForm }) => {
                // alert(JSON.stringify(values, null, 2));
               
                dispatch(login(values))

                if(sucess) router.push('/')

               
                    setSubmitting(false);
                    //resetForm();
            }}
        >
            {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
                /* and other goodies */
            }) => (


                <Flex minHeight='100vh' width='full' align='center' justifyContent='center'>



                    <Box>


                        <Heading mb="4">Ghost PIZZA </Heading>

                       

                      {  error ? (<Alerts error={error} />) : (<Box></Box>)}

                        <form onSubmit={handleSubmit}>
                            <FormControl>

                                <FormLabel>
                                   username
                                </FormLabel>
                                <Input
                                    type="text"
                                    name="username"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.username}
                                />
                                {errors.username && touched.username && errors.username}

                            </FormControl>

                            <FormControl>

                                <FormLabel>
                                   Password
                                </FormLabel>
                                <Input
                                    type="password"
                                    name="password"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.password}
                                />
                                {errors.password && touched.password && errors.password}
                            </FormControl>
                            

                            {loading ? (<Spinner />) :  ( <Button width='full'mt="4"type="submit" colorScheme="blue">  Login </Button>)}
                           
                        </form>

                        <Stack isInline justifyContent="space-between" >
                                
                                <Box size="sm">
                                    <Link>
                                       Register</Link>
                                </Box>
                            </Stack>
                    </Box>



                </Flex>




            )}
        </Formik>
    )
}

export default Login
