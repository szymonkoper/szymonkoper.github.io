import React from 'react'
import PropTypes from 'prop-types'
import { Button } from 'react95'
import {
  BottomButtonsWrapper,
  ErrorContentText,
  ErrorHorizontalContent,
  ErrorIcon,
  StyledButton,
  StyledWindow,
  StyledWindowContent,
  StyledWindowHeader,
  StyledXSpan
} from './ErrorAlert.styled'

const ErrorAlert = ({ id, dx, dy, onDismiss, rotation }) => (
  <StyledWindow shadow dx={dx} dy={dy} rotation={rotation}>
    <StyledWindowHeader>
      <div style={{ flex: 1 }}>explorer.exe</div>
      <Button onClick={onDismiss} size="sm" square>
        <StyledXSpan>x</StyledXSpan>
      </Button>
    </StyledWindowHeader>
    <StyledWindowContent>
      <ErrorHorizontalContent>
        <ErrorIcon />
        <ErrorContentText>
          {`An unknown error has occured while trying to show you an error: ${id}`}
        </ErrorContentText>
      </ErrorHorizontalContent>
      <BottomButtonsWrapper>
        <StyledButton onClick={onDismiss}>Cancel</StyledButton>
        <StyledButton onClick={onDismiss}>OK</StyledButton>
        <StyledButton onClick={onDismiss}>Yes</StyledButton>
      </BottomButtonsWrapper>
    </StyledWindowContent>
  </StyledWindow>
)

ErrorAlert.propTypes = {
  dx: PropTypes.number.isRequired,
  dy: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
  onDismiss: PropTypes.func.isRequired,
  rotation: PropTypes.number.isRequired
}

export default ErrorAlert
