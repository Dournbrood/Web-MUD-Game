import React, { useState, useContext } from "react";
import {
  Input,
  Button,
  Box,
  InputGroup,
  Stack,
  FormControl,
} from "@chakra-ui/core";
import { axiosWithAuth } from "../Utils/axiosWithAuth";

const Login = (props) => {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  //handleChanges
  const handleChanges = (event) => {
    event.persist();
    setCredentials({
      ...credentials,
      [event.target.name]: event.target.value,
    });
  };
  const handleLoginSubmit = (event) => {
    event.preventDefault();
    setIsLoading(true);
    axiosWithAuth()
      .post("login/", credentials)
      .then((response) => {
        localStorage.setItem("Token", response.data.key);
        
        setCredentials({
          username: "",
          password: "",
        });

        // will be implemented once store is up
        // dispatch({type: "LOGIN_SUCCESS", payload: response.data})

        props.history.push("/Map");
      })
      .catch((error) => {
        console.log("Invalid Login: ", error);
        setIsLoading(false);
      });
  };

  return (
    <form onSubmit={handleLoginSubmit}>
      <Stack spacing={4} align="center">
        <FormControl isRequired>
          <InputGroup>
            <Input
              variant="filled"
              size="lg"
              id="username"
              type="text"
              name="username"
              placeholder="Username"
              aria-label="Username"
              value={credentials.username}
              onChange={handleChanges}
            />
          </InputGroup>
        </FormControl>
        <FormControl isRequired>
          <InputGroup>
            <Input
              variant="filled"
              size="lg"
              id="password"
              type="password"
              name="password"
              placeholder="Password"
              aria-label="Password"
              value={credentials.password}
              onChange={handleChanges}
            />
          </InputGroup>
        </FormControl>
        <Button
          type="submit"
          boxShadow="lg"
          _hover={{ boxShadow: "lg" }}
          _active={{ boxShadow: "lg" }}
          variantColor="teal"
        >
          {isLoading ? "Logging in..." : "Log in"}
        </Button>
      </Stack>
    </form>
  );
};

export default Login;
