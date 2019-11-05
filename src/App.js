import React, { useState } from 'react'
import StartBar from './components/StartBar'
import {
  AppContainer,
  DesktopArea,
  ResetStyles,
  ScreenContainer,
  StyledThemeProvider
} from './App.styled'

function App() {
  const [isStartOpen, setIsStartOpen] = useState(false)

  return (
    <AppContainer>
      <ResetStyles />
      <StyledThemeProvider>
        <ScreenContainer>
          <DesktopArea />
          <StartBar onStartClick={() => setIsStartOpen(!isStartOpen)} />
        </ScreenContainer>
      </StyledThemeProvider>
    </AppContainer>
  )
}

export default App
