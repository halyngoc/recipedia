import React, { useEffect } from 'react'
import 'boxicons'
import { theme } from '../../global'
import { useDevice } from '../../util'
import styled from 'styled-components'

export const IconButton = styled.button`
  background: none;
  border: none;
  border-radius: 10px;
  padding: 2px 2px 0 2px;

  :active {
    filter: saturate(5);
  }

  :focus {
    outline: none;
    box-shadow: 0 0 0 2px ${theme.accent};
  }
`

export default function HeartButton({ onClick, filled }) {
  const device = useDevice()

  return (
    <IconButton onClick={onClick} aria-label={filled ? 'Unfavorite' : 'Favorite'}>
      <box-icon
        name="heart"
        type={filled ? 'solid' : undefined}
        color={theme.accent}
        size={device === 'mobile' ? '1.5rem' : '2rem'}
      />
    </IconButton>
  )
}
