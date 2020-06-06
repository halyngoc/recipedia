import React from 'react'
import 'boxicons'
import { theme } from '../../global'
import { useDevice } from '../../util'
import { IconButton } from './IconButton'

export default function SearchButton({ onClick, label }) {
  const device = useDevice()

  return (
    <IconButton onClick={onClick} aria-label="Search">
      <box-icon
        name="search"
        color={theme.text}
        size={device === 'mobile' ? '2rem' : '3rem'}
      />
      {label && <p>{label}</p>}
    </IconButton>
  )
}
