import React, { useState } from 'react';
import styled, { createGlobalStyle, ThemeProvider } from "styled-components"
import { AppBar, Button, Cutout, Toolbar, themes, reset } from "react95"
import { backgroundColor } from './constants/colors'
import startImg from './assets/windows-flag.png'

const AppContainer = styled.div`
  min-width: 100vh;
  min-height: 100vh;
  display: flex;
`

const StartImage = styled.img.attrs(() => ({
  src: startImg,
  alt: "windows start flag"
}))`
`

const ScreenContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`

const DesktopArea = styled.div`
  background-color: ${backgroundColor};
  flex: 1;
`
const ResetStyles = createGlobalStyle`
  ${reset}
`

// TODO: Use local format of the viewer
const ToolbarClock = () => {
  return (
    <Cutout>
      <p>todo 05.11.1995</p>
    </Cutout>
  )
}

function App() {
  const [isStartOpen, setIsStartOpen] = useState(false)

  return (
    <AppContainer>
      <ResetStyles />
      <ThemeProvider theme={themes.default}>
        <ScreenContainer>
          <DesktopArea />
          <AppBar style={{ position: "relative" }}>
            <Toolbar
              style={{ justifyContent: "space-between" }}
            >
              <div>
                <Button
                  active={isStartOpen}
                  onClick={() => {
                    setIsStartOpen(!isStartOpen);
                  }}
                >
                  <StartImage /> Start
                </Button>
              </div>

              <ToolbarClock />
            </Toolbar>
          </AppBar>
        </ScreenContainer>
      </ThemeProvider>
      {/* <p style={{ flex: 1 }}>asd</p> */}
      {/* <Header>
        <ReactImage />
        <p>Just some changes.</p>
        <ReactLink
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </ReactLink>
      </Header> */}
    </AppContainer>
  )
}

export default App;
