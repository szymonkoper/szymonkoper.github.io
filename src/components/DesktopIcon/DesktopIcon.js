import React from 'react'
import PropTypes from 'prop-types'
import {
  DesktopIconContainer,
  DesktopIconImage,
  DesktopIconName
} from './DesktopIcon.styled'

// TODO: Make it double click with throttle
const DesktopIcon = ({ imageSource, name, onClick }) => (
  <DesktopIconContainer onClick={onClick}>
    <DesktopIconImage imageSource={imageSource} />
    <DesktopIconName>{name}</DesktopIconName>
  </DesktopIconContainer>
)

DesktopIcon.propTypes = {
  imageSource: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
}

export default DesktopIcon
