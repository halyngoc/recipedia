import React from 'react'
import 'boxicons'
import { theme } from '../global'
import { useDevice } from '../util'
import { IconButton } from './Button'

export default function SearchButton(props) {
  const { onClick } = props
  const device = useDevice()

  return (
    <IconButton onClick={onClick} aria-label="Search">
      <box-icon
        name="search"
        color={theme.text}
        size={device === 'mobile' ? '2rem' : '3rem'}
      />
    </IconButton>
  )
}
