import React, {useState} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import PrivateRoute from './Utils/PrivateRoute'
import NavBar from './Components/NavBar'
import Login from './Components/Login'
import SignUp from './Components/SignUp'
import { ThemeProvider, theme } from '@chakra-ui/core';
import Context from './context/context';
import RoomContext from './context/RoomContext'
import LandingPage from './Pages/LandingPage';
import { axiosWithAuth } from './Utils/axiosWithAuth'

function App() {
  // This holds the state to pass via provider we probably need it whenever we check for those credentials to login 
  const [credentials, setCredentials] = useState({
    username: '',
    password1: '',
    password2: ''
  })

  // user state
  const [user, setUser] = useState({});

  
  // room data state
  const updateRoom = () => {
      axiosWithAuth()
      .get('/adv/init')
      .then(res => {
        //   console.log(res)
          setRoomData(res.data)
        })
        .catch(err => {
            console.error(err)
        })
    }
    
    const [roomData, setRoomData] = useState({})

  return (
      <Context.Provider value = {{credentials, setCredentials, user, setUser}}>
        <RoomContext.Provider value={{roomData, setRoomData, updateRoom}}>
            <ThemeProvider theme={theme}>
                <Router>
                    <NavBar />
                    <Route exact path='/' component = {Login}/>
                    <Route path='/register' component = {SignUp}/>
                    <PrivateRoute path='/map' component = {LandingPage}/>
                </Router>
            </ThemeProvider>
        </RoomContext.Provider>
    </Context.Provider>
  );
}

export default App;
