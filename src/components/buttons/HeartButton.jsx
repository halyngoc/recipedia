import React, { useEffect } from 'react'
import 'boxicons'
import { theme } from '../../global'
import styled from 'styled-components'

export const IconButton = styled.button`
  background: none;
  border: none;
  border-radius: 10px;
  padding: 2px 2px 0 2px;

  :active {
    filter: saturate(5);
  }

  :focus, :hover {
    outline: none;
    box-shadow: 0 0 0 2px ${theme.accent};
  }
`

export default function HeartButton({ onClick, filled }) {
  useEffect(() => {
    console.log('filled:', filled)
  }, [filled])

  return (
    <IconButton
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
