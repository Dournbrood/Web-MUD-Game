import React, {useState, useContext} from "react";
import { Input, Button } from "@chakra-ui/core";

const Login = (props) => {};

const [credentials, setCredentials] = useState({
    username: '',
    password: '',
})
const [isLoading, setIsLoading] = useState(false);

//handleChanges
const handleChanges = (event) => {
    event.persist();
    setCredentials({
        ...credentials,
        [event.target.name]: event.target.value
    })
}

const handleLoginSubmit = (event) => {
    event.preventDefault();
    setIsLoading(true);
        axiosWithAuth()
            .post('', credentials)
            .then(response => {
                setCredentials({
                    username: '',
                    password: ''
                });
            })
            .catch(error => {
                console.log('Invalid Login: ', error)
                setIsLoading(false)
            })
    }
}

return (
    <Box bg="white" w="100%" p={4} color="black">
        <h1>Hello, please login!</h1>
        <form onSubmit={handleLoginSubmit}>
            <Input
                type='text'
                name='username'
                variant="flushed"
                value={credentials.username}
                onChange={handleInputChanges}
            />
            <Input
                type='password'
                name='password'
                variant="flushed"
                value={credentials.password}
                onChange={handleInputChanges}
            />
            <Button type='submit'>
                {isLoading ? 'Logging in...' : 'Log in'}
            </Button>
        </form>
    </Box>
);
}

export default Login;
