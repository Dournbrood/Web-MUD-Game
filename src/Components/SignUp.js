import React, {useContext, useState} from "react";
import {
    Input,
    FormControl,
    FormLabel,
    Icon,
    InputGroup,
    InputLeftElement,
    Button,
    Stack,
} from "@chakra-ui/core";

// state context api
// const {credentials, setCredentials, setUser} = userContext(Contex);

// // handleSubmit
// const handleSubmit = e => {
//     e.preventDefault();
//     // axios call here
// }

// handleChanges
/* const handleChanges = e => {
    setCredentials({
        ...credentials,
        [e.target.name]: e.target.value
    })
} */

const SignUp = () => {
    return(
        <form action="submit">
            <Stack spacing = {4} align = "center">
                <FormControl isRequired>
                    <InputGroup>
                        <InputLeftElement children={<Icon name="info" />}/>
                        <Input 
                            variant = "filled" 
                            size = "lg"
                            id = "username"
                            type = "text"
                            name = "username"
                            placeholder = "Username"
                            aria-label = "Username"
                        />
                    </InputGroup>
                </FormControl>

                <FormControl isRequired>
                    <InputGroup>
                        <InputLeftElement children={<Icon name = "info" />}/>
                        <Input
                            variant = "filled"
                            size = "lg"
                            id = "password"
                            type = "password"
                            name = "password"
                            placeholder = "Password"
                            aria-label = "Password"
                        />
                    </InputGroup>
                </FormControl>
                <Button 
                    type = "submit" 
                    boxShadow ="lg" 
                    _hover ={{boxShadow: "lg"}} 
                    _active={{boxShadow: "lg"}}
                    variantColor = "teal"
                >Register!</Button>
            </Stack>
        </form>
    )
}

export default SignUp;

