import React from 'react'
import 'boxicons'
import { theme } from '../../global'
import { useDevice } from '../../util'
import styled from 'styled-components'

// Override ./IconButton
export const IconButton = styled.button`
  background: none;
  border: none;
  border-radius: 10px;
  padding: 0;

  :active {
    filter: saturate(5);
  }

  :focus {
    outline: none;
    box-shadow: 0 0 0 2px ${theme.text};
  }

  p {
    margin: 0;
    color: ${theme.text};
  }
`

export default function EscapeButton({ onClick, label }) {
  const device = useDevice()

  return (
    <IconButton onClick={onClick}>
      <box-icon
        name="x"
        color={theme.text}
        size={device === 'mobile' ? '2.5rem' : '3.5rem'}
      />
      {label && <p>{label}</p>}
    </IconButton>
  )
}
