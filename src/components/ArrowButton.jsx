import React from 'react'
import 'boxicons'
import { theme } from '../global'
import { useDevice } from '../util'
import { IconButton } from './Button'

export default function ArrowButton(props) {
  const { onClick, isLeft } = props
  const device = useDevice()

  return (
    <IconButton onClick={onClick} aria-label={isLeft ? 'Left arrow' : 'Right arrow'}>
      <box-icon
        name={isLeft ? 'left-arrow' : 'right-arrow'}
        color={theme.text}
        size={device === 'mobile' ? '2.5rem' : '3.5rem'}
      />
    </IconButton>
  )
}
