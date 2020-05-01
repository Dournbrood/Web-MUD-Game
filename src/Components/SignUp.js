import React, {useContext} from "react";
import Context from "../context/context";
import {
    Input,
    FormControl,
    Icon,
    InputGroup,
    InputLeftElement,
    Button,
    Stack,
} from "@chakra-ui/core";
// import { axiosWithAuth } from "../Utils/axiosWithAuth";
import Axios from 'axios'

const SignUp = (props) => {

    // state from context api
const {credentials, setCredentials, setUser} = useContext(Context);

// handleSubmit
const handleSubmit = e => {
    e.preventDefault();
    // axios call here
    Axios
        .post("https://django-cs-unit1-nasra-mack.herokuapp.com/api/registration/", credentials)
        .then(response => {
            localStorage.setItem("Token", response.data.key);
            setUser(response.data.user);
            props.history.push("/map");
        })
        .catch(error =>  console.log(error))
    
}

// handleChanges
const handleChanges = e => {
    setCredentials({
        ...credentials,
        [e.target.name]: e.target.value
    })
}

    return(
        <form action="submit" onSubmit = {handleSubmit}>
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
                            value = {credentials.username}
                            onChange = {handleChanges}
                        />
                    </InputGroup>
                </FormControl>

                <FormControl isRequired>
                    <InputGroup>
                        <InputLeftElement children={<Icon name = "info" />}/>
                        <Input
                            variant = "filled"
                            size = "lg"
                            id = "password1"
                            type = "password"
                            name = "password1"
                            placeholder = "Password"
                            aria-label = "Password"
                            value = {credentials.password1}
                            onChange = {handleChanges}
                        />
                    </InputGroup>
                </FormControl>
                <FormControl isRequired>
                    <InputGroup>
                        <InputLeftElement children={<Icon name = "info" />}/>
                        <Input
                            variant = "filled"
                            size = "lg"
                            id = "password2"
                            type = "password"
                            name = "password2"
                            placeholder = "Re-Enter Password"
                            aria-label = "Re-Enter Password"
                            value = {credentials.password2}
                            onChange = {handleChanges}
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

