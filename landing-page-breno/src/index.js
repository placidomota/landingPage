import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createGlobalStyle } from 'styled-components';



const GlobalStyle = createGlobalStyle`
  body {
  margin: 0;
  padding: 0;
  
}
li {
  list-style: none;
}

h1{
  color: rgb(185, 185, 22);
}


`
const root = ReactDOM.createRoot( document.getElementById('root'));
root.render(
  <React.StrictMode>
      <GlobalStyle />
      <App />,
  </React.StrictMode>

 
);
