
import React from 'react'
import { Formik } from 'formik';
import { Input, Box, Heading, Flex, Text, Link, FormControl, FormLabel, Stack, Checkbox, Button } from "@chakra-ui/react"
import { useDispatch, useSelector } from "react-redux";
import { registerAction } from '../redux/User/userAction';
import Alerts from "../utiliy/Alerts";
import { Spinner } from "@chakra-ui/react"
const Registration = () => {

    const dispatch = useDispatch();
    const regSelector = useSelector(store => store.RegisterReducers);
    const {  error, loading,sucess } = regSelector;
    return (
        <Formik
            initialValues={{ email: '', password: '', username: '',phonenumber:'' }}
            validate={values => {
                const errors = {};
                if (!values.email) {
                    errors.email = 'Required';
                } 
                if (!values.username) {
                    errors.username = 'Required';
                } 
                if (!values.phonenumber) {
                    errors.phonenumber = 'Required';
                } 
                
                else if (
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                    errors.email = 'Invalid email address';
                }
                return errors;
            }}
            onSubmit={(values, { setSubmitting,resetForm }) => {
               dispatch(registerAction(values))
               // alert(JSON.stringify(values, null, 2));
                setSubmitting(false);

               // if(sucess) resetForm();
              //  resetForm();
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


                <Flex minHeight='100vh' width='full' align='center'  justifyContent='center'>

                    <Box>


                        <Heading mb="4">Sign Up </Heading>


                        {  error ? (<Alerts error={error} />) : (<Box></Box>)}


                        <form onSubmit={handleSubmit}>
                            <FormControl>

                                <FormLabel>
                                   Username
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
                                    Emal Address
                                </FormLabel>
                                <Input
                                    type="email"
                                    name="email"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.email}
                                />
                                {errors.email && touched.email && errors.email}

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

                            <FormControl>

                                <FormLabel>
                                    Mobile Number
                                </FormLabel>
                                <Input
                                    type="number"
                                    name="phonenumber"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.phonenumber}
                                />
                                {errors.phonenumber && touched.phonenumber && errors.phonenumber}
                            </FormControl>




                            {loading ? (<Spinner />) :  (   <Button width='full' mt="4" type="submit" colorScheme="blue">  Sign Up</Button>)}

                         
                            
                        </form>
                    </Box>



                </Flex>




            )}
        </Formik>
    )
}

export default Registration
