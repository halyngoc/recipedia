import React from 'react'
import 'boxicons'
import { theme } from '../../global'
import { IconButton } from './IconButton'

export default function EditButton({ onClick }) {
  return (
    <IconButton
      title="Edit"
      onClick={onClick}
      aria-label="Edit"
      padding="2px 1px 0 1px"
      color={theme.accent}
    >
      <box-icon
        name="edit"
        color={theme.accent}
        size="1.5rem"
      />
    </IconButton>
  )
}
