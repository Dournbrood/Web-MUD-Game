import React, {useState} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import NavBar from './Components/NavBar'
import Login from './Components/Login'
import SignUp from './Components/SignUp'
import { ThemeProvider, theme } from '@chakra-ui/core';
import Context from './context/context';

function App() {
  // This holds the state to pass via provider we probably need it whenever we check for those credentials to login 
  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  })

  return (
    <Context.Provider value = {{credentials, setCredentials}}>
      <ThemeProvider theme={theme}>
          <Router>
              <NavBar />
              <Route path='/login'>
                  <Login />
              </Route>
              <Route path='/register'>
                  <SignUp />
              </Route>
          </Router>
      </ThemeProvider>
    </Context.Provider>
  );
}

export default App;
