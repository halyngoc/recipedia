import React from 'react'
import 'boxicons'
import { theme } from '../global'
import { useDevice } from '../util'

export default function SearchButton() {
  const device = useDevice()

  return (
    <box-icon
      name="search"
      color={theme.text}
      size={device === 'mobile' ? 'md' : 'lg'}
    />
  )
}
