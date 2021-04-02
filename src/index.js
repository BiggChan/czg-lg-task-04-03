import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from "mobx-react"
import stores  from "./stores"
import { ChakraProvider,CSSReset } from "@chakra-ui/react"
import theme from "./theme"
ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <Provider {...stores}>
        <CSSReset />
        <App />
      </Provider>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
