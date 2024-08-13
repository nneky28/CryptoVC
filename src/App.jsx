import React from 'react';
import './scroll.js';
import './App.css';
import IndexRoutes from './Routes/Index';
import { ChakraProvider } from '@chakra-ui/react';
import theme from './Utils/Theme';
import { WalletProvider } from './Utils/WalletContext.jsx';




 
function App() {
  return (
    <ChakraProvider theme={theme}>
        <WalletProvider>
        <IndexRoutes />
        </WalletProvider>
    </ChakraProvider>
  );
}

export default App;
