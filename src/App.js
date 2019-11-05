import React, { useState } from 'react'
import uuid from 'uuid/v4'
import { random, takeRight } from 'lodash'
import StartBar from './components/StartBar'
import DesktopIcon from './components/DesktopIcon'
import ErrorAlert from './components/ErrorAlert'
// import iconDirectorySource from './assets/icon-directory.png'
import iconGitHubSource from './assets/icon-github.png'
import iconLinkedInSource from './assets/icon-linkedin.png'
import { GITHUB_LINK, LINKEDIN_LINK } from './constants/links'
import {
  AppContainer,
  DesktopArea,
  ResetStyles,
  ScreenContainer,
  StyledThemeProvider
} from './App.styled'

const App = () => {
  // const [isStartOpen, setIsStartOpen] = useState(false)
  const [shownAlerts, setShownAlerts] = useState([])

  const showNewAlert = () => {
    const newAlert = {
      dx: random(-100, 100),
      dy: random(-100, 100),
      rotation: random(-10, 10),
      id: uuid()
    }
    setShownAlerts(currentShownAlerts =>
      takeRight([...currentShownAlerts, newAlert], 50)
    )
  }

  const closeAlert = closingId => {
    setShownAlerts(currentShownAlerts =>
      currentShownAlerts.filter(({ id }) => closingId !== id)
    )
  }

  return (
    <AppContainer>
      <ResetStyles />
      <StyledThemeProvider>
        <ScreenContainer>
          <DesktopArea>
            {/* <DesktopIcon
              imageSource={iconDirectorySource}
              name="Experience"
              onClick={() => console.log('Clicked Experience')}
            />
            <DesktopIcon
              imageSource={iconDirectorySource}
              name="Projects"
              onClick={() => console.log('Clicked Projects')}
            /> */}
            <DesktopIcon
              imageSource={iconLinkedInSource}
              name="My LinkedIn"
              onClick={() => window.open(LINKEDIN_LINK, '_blank')}
            />
            <DesktopIcon
              imageSource={iconGitHubSource}
              name="My GitHub"
              onClick={() => window.open(GITHUB_LINK, '_blank')}
            />
          </DesktopArea>

          <StartBar
            // isStartOpen={isStartOpen}
            onStartClick={() => {
              Array.from({ length: random(3, 5) }).forEach((_, index) => {
                setTimeout(() => {
                  showNewAlert()
                }, index * 100)
              })
            }}
          />

          {shownAlerts.map(({ dx, dy, id, rotation }) => (
            <ErrorAlert
              dx={dx}
              dy={dy}
              id={id}
              key={id}
              onDismiss={() => closeAlert(id)}
              rotation={rotation}
            />
          ))}
        </ScreenContainer>
      </StyledThemeProvider>
    </AppContainer>
  )
}

export default App
