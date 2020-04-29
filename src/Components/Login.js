import React, { useState, useContext } from "react";
import { Input, Button, Box, InputGroup } from "@chakra-ui/core";
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
      .post("", credentials)
      .then((response) => {
        localStorage.setItem("token", response.data.token);

        setCredentials({
          username: "",
          password: "",
        });
      })
      .catch((error) => {
        console.log("Invalid Login: ", error);
        setIsLoading(false);
      });
  };

  return (
    <form onSubmit={handleLoginSubmit}>
      <Box p={4} d="flex" justifyContent="center">
        <Box maxW="sm" borderWidth="1px" rounded="lg" overflow="hidden">
          <h1>Hello, please login!</h1>
          <InputGroup size="sm">
            <Input
              type="text"
              name="username"
              variant="flushed"
              placeholder="Username"
              value={credentials.username}
              onChange={handleChanges}
            />
            <Input
              type="password"
              name="password"
              variant="flushed"
              placeholder="Password"
              value={credentials.password}
              onChange={handleChanges}
            />
          </InputGroup>
          <Button type="submit">
            {isLoading ? "Logging in..." : "Log in"}
          </Button>
        </Box>
      </Box>
    </form>
  );
};

export default Login;
