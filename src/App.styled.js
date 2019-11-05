import styled, { ThemeProvider, createGlobalStyle } from 'styled-components'
import { reset, themes } from 'react95'
import { backgroundColor } from './constants/colors'

export const StyledThemeProvider = styled(ThemeProvider).attrs(() => ({
  theme: themes.default
}))``

export const AppContainer = styled.div`
  display: flex;
  min-height: 100vh;
  min-width: 100vh;
`

export const ScreenContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`

export const DesktopArea = styled.div`
  background-color: ${backgroundColor};
  flex: 1;
  flex-direction: column;
`

export const ResetStyles = createGlobalStyle`
  ${reset}
`
