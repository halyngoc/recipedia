import React from 'react'
import 'boxicons'
import { theme } from '../global'
import { useDevice } from '../util'
import styled from 'styled-components'

const IconButton = styled.button`
  background: none;
  border: none;
  border-radius: 10px;
  padding: 5px 0 0 5px;

  :active {
    filter: saturate(5);
  }

  :focus {
    outline: none;
    box-shadow: 0 0 0 2px ${theme.text};
  }
`

export default function SearchButton(props) {
  const { onClick } = props
  const device = useDevice()

  return (
    <IconButton onClick={onClick} aria-label="Search">
      <box-icon
        name="search"
        color={theme.text}
        size={device === 'mobile' ? '2.5rem' : '3.5rem'}
      />
    </IconButton>
  )
}
