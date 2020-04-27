import React from 'react';
import NavBar from './Components/NavBar'
import { ThemeProvider, theme } from '@chakra-ui/core';

function App() {
  return (
    <ThemeProvider theme={theme}>
        <div> MUD </div>
        <NavBar />
    </ThemeProvider>
  );
}

export default App;
