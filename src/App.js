import React from 'react';
import styled from 'styled-components';
import { backgroundColor } from './constants/colors'
import logo from './logo.svg';

const AppContainer = styled.div``;

const Header = styled.header`
  background-color: ${backgroundColor};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

const ReactImage = styled.img.attrs(() => ({
  src: logo,
  alt: 'logo'
}))`
  height: 40vmin;
`;

const ReactLink = styled.a`
  color: #09d3ac;
`;

function App() {
  return (
    <AppContainer>
      <Header>
        <ReactImage />
        <p>Just some changes.</p>
        <ReactLink
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </ReactLink>
      </Header>
    </AppContainer>
  )
}

export default App;
