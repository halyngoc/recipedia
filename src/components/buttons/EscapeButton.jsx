import React from 'react'
import 'boxicons'
import { theme } from '../../global'
import { useDevice } from '../../util'
import { IconButton } from './IconButton'

export default function EscapeButton({ onClick, label }) {
  const device = useDevice()

  return (
    <IconButton title="Escape" onClick={onClick} aria-label="Escape" padding="0">
      <box-icon
        name="x"
        color={theme.text}
        size={device === 'mobile' ? '2.5rem' : '3.5rem'}
      />
      {label && <p>{label}</p>}
    </IconButton>
  )
}
