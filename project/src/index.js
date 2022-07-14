import React from 'react';
import ReactDOM from 'react-dom/client';
import { render } from "react-dom";
// import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';

import { ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./css/foodpandapage.css";
// import { ChakraProvider } from '@chakra-ui/react'
// 好用插件 https://chakra-ui.com/getting-started/cra-guide
// import "../src/css/css_initial.css"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <ChakraProvider> */}
    <ToastContainer
      position="top-center"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
    />
    <App />
    {/* </ChakraProvider> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
