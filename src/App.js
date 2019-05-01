import React from 'react';
import logo from './logo.svg';
import './App.css';
import Game from './Game';
import styled from 'styled-components'




function App() {

  const Test = styled.h1`
  color:red;
  `;

  return (
    <div>
      <Test>TESTING</Test>
      <Game/>
    </div>

  );
}

export default App;
