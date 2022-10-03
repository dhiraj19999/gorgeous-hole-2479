import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from '@chakra-ui/react';
import Brandofweek from './components/Brandofweek';
import Slider from './components/slider';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
function App() {
  return (
    <ChakraProvider theme={theme}>
     
      <Box textAlign="center" fontSize="xl">
       <Navbar/>
       <Slider/>

        <Brandofweek/>


        <Footer/>
      </Box>
     
    </ChakraProvider>
  );
}

export default App;
