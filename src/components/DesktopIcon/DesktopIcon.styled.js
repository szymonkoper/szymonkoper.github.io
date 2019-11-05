import styled from 'styled-components'

export const DesktopIconContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 15px;
  margin-left: 25px;
  min-height: 100px;
  width: 100px;
`

export const DesktopIconImage = styled.img.attrs(({ imageSource }) => ({
  src: imageSource,
  alt: 'icon'
}))`
  width: 60px;
  height: 60px;
`

export const DesktopIconName = styled.p`
  background-color: black;
  color: white;
  margin-top: 2px;
  text-align: center;
`
