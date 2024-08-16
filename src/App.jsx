import React from 'react';
import './scroll.js';
import './App.css';
import IndexRoutes from './Routes/Index';
import { ChakraProvider } from '@chakra-ui/react';
import theme from './Utils/Theme';
import { WalletProvider } from './Utils/WalletContext.jsx';
import { ToastContainer,Zoom } from 'react-toastify';




 
function App() {
  return (
    <ChakraProvider theme={theme}>
        <WalletProvider>
        <IndexRoutes />
        <ToastContainer
            progressClassName="toastProgress"
            bodyClassName="toastBody"
            transition={Zoom}
            icon={false}
            autoClose={3000}
            hideProgressBar={true}
            position="top-center"
            toastClassName="custom-toast"
            style={{zIndex:1000}}
          />
        </WalletProvider>
    </ChakraProvider>
  );
}

export default App;
