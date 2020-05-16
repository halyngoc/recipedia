import React from 'react'
import 'boxicons'
import { theme } from '../global'
import { useDevice } from '../util'
import styled from 'styled-components'

const IconButton = styled.button`
  background: none;
  border: none;
  padding: 0;
`

export default function SearchButton(props) {
  const { onClick } = props
  const device = useDevice()

  return (
    <IconButton onClick={onClick}>
      <box-icon
        name="search"
        color={theme.text}
        size={device === 'mobile' ? '2.5rem' : '3.5rem'}
      />
    </IconButton>
  )
}
