import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components'
import reportWebVitals from './reportWebVitals';

import './index.css';

import Header from './Header'
import Nav from './Nav';
import Screen from './Screen';

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Nav />
    <Screen />
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
