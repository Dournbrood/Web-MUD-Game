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
import Map from './Components/Map';

function App() {
  // This holds the state to pass via provider we probably need it whenever we check for those credentials to login 
  const [credentials, setCredentials] = useState({
    username: '',
    password1: '',
    password2: ''
  })

  // user state
  const [user, setUser] = useState({});

  return (
    <Context.Provider value = {{credentials, setCredentials, user, setUser}}>
      <ThemeProvider theme={theme}>
          <Router>
              <NavBar />
              <Route path='/login' component = {Login}/>
              <Route path='/register' component = {SignUp}/>
              <Route path='/map' component = {() => <Map width={500} height={500} />}/>
          </Router>
      </ThemeProvider>
    </Context.Provider>
  );
}

export default App;
