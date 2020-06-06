import React from 'react'
import 'boxicons'
import { theme } from '../../global'
import { IconButton } from './IconButton'

export default function HeartButton({ onClick, filled }) {
  return (
    <IconButton
      padding="2px 2px 0 2px"
      color={theme.accent}
      title={filled ? 'Unfavorite' : 'Favorite'}
      onClick={onClick}
      aria-label={filled ? 'Unfavorite' : 'Favorite'}
    >
      <box-icon
        name="heart"
        type={filled ? 'solid' : 'regular'}
        color={theme.accent}
        size={'2rem'}
      />
    </IconButton>
  )
}
