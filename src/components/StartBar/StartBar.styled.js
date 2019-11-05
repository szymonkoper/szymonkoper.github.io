import styled from 'styled-components'
import { AppBar, Toolbar } from 'react95'
import startImg from '../../assets/windows-flag.png'
// TODO: Absolute paths to get rid of ../..

export const StartImage = styled.img.attrs(() => ({
  src: startImg,
  alt: 'windows start flag'
}))`
  margin-right: 5px;
`

export const StyledAppBar = styled(AppBar)`
  position: relative;
`

export const StyledToolbar = styled(Toolbar)`
  justify-content: space-between;
`
