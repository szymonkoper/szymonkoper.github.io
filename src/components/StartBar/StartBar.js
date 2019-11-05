import React from 'react'
import PropTypes from 'prop-types'
import { format, setYear } from 'date-fns'
import { Button, Cutout, Toolbar } from 'react95'
import useInterval from '../../hooks/useInterval'
import { StartImage, StyledAppBar } from './StartBar.styled'

const StartBar = ({ getDateTimeNow, isStartOpen, onStartClick }) => {
  const dateTimeNow = useInterval(getDateTimeNow(), getDateTimeNow)
  const fakeDateTimeNow = setYear(dateTimeNow, 1995)

  return (
    <StyledAppBar>
      <Toolbar style={{ justifyContent: 'space-between' }}>
        <Button active={isStartOpen} onClick={onStartClick}>
          <StartImage /> Start
        </Button>

        <Cutout style={{ padding: '1vh' }}>
          {/* TODO: Use local format of the viewer */}
          {format(fakeDateTimeNow, 'PPpp')}
        </Cutout>
      </Toolbar>
    </StyledAppBar>
  )
}

StartBar.propTypes = {
  getDateTimeNow: PropTypes.func,
  isStartOpen: PropTypes.bool.isRequired,
  onStartClick: PropTypes.func.isRequired
}

StartBar.defaultProps = {
  getDateTimeNow: () => new Date()
}

export default StartBar
