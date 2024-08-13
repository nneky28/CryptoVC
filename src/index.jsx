import '@rainbow-me/rainbowkit/styles.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ToastContainer, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import App from './App';


const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
      <QueryClientProvider client={queryClient}>
          <App/>
          <ToastContainer
            progressClassName="toastProgress"
            bodyClassName="toastBody"
            transition={Zoom}
            icon={false}
            autoClose={3000}
            hideProgressBar={true}
            position="top-center"
            toastClassName="custom-toast"
          />

      </QueryClientProvider>
  </React.StrictMode>
);
