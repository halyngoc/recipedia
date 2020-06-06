import React from 'react'
import 'boxicons'
import { theme } from '../../global'
import { IconButton } from './IconButton'

export default function CheckButton({ onClick }) {
  return (
    <IconButton
      title="Check"
      onClick={onClick}
      aria-label="Check"
      padding="2px 1px 0 1px"
      color={theme.accent}
    >
      <box-icon
        name="check"
        color={theme.accent}
        size="1.5rem"
      />
    </IconButton>
  )
}
