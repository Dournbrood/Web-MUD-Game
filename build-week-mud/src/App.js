import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import NavBar from './Components/NavBar'
import Login from './Components/Login'
import SignUp from './Components/SignUp'
import { ThemeProvider, theme } from '@chakra-ui/core';
import Map from './Components/Map';

function App() {
  return (
    <ThemeProvider theme={theme}>
        <div> MUD Front End </div>
        <Router>
            <NavBar />
            <Route path='/login'>
                <Login />
            </Route>
            <Route path='/register'>
                <SignUp />
            </Route>
            <Route path='/map'>
                <Map width={500} height={500} />
            </Route>
        </Router>
    </ThemeProvider>
  );
}

export default App;
