import React, { useState } from 'react'
import styled, { createGlobalStyle, ThemeProvider } from "styled-components"
import { AppBar, Button, Cutout, Toolbar, themes, reset } from "react95"
import { backgroundColor } from './constants/colors'
import startImg from './assets/windows-flag.png'

const AppContainer = styled.div`
  display: flex;
  min-height: 100vh;
  min-width: 100vh;
`

const StartImage = styled.img.attrs(() => ({
  src: startImg,
  alt: "windows start flag"
}))`
`

const ScreenContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
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
                    setIsStartOpen(!isStartOpen)
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
    </AppContainer>
  )
}

export default App
