import styled from 'styled-components'
import { Button, Window, WindowContent, WindowHeader } from 'react95'
import iconErrorSource from '../../assets/alert-icon-error.png'

export const ErrorIcon = styled.img.attrs(() => ({
  src: iconErrorSource,
  alt: 'error icon'
}))`
  height: 60px;
  width: 60px;
  margin-right: 20px;
`

export const StyledWindow = styled(Window)`
  bottom: 50%;
  height: 230px;
  left: 50%;
  position: absolute;
  right: 50%;
  top: 50%;
  ${({ dx, dy, rotation }) =>
    `transform: translate(${dx - 200}px, ${dy -
      115}px) rotate(${rotation}deg);`}
  width: 400px;
`

export const StyledWindowHeader = styled(WindowHeader)`
  align-items: center;
  display: flex;
  flex-direction: row;
`

export const StyledXSpan = styled.span`
  font-weight: bold;
  transform: translateY(-2px);
`

export const StyledWindowContent = styled(WindowContent)`
  margin: 20px;
`

export const ErrorHorizontalContent = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;
`

export const ErrorContentText = styled.p`
  flex: 1;
`

export const BottomButtonsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`

export const StyledButton = styled(Button)`
  flex: 1;
  margin: 10px;
`
