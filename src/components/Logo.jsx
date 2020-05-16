import React from 'react'
import styled from 'styled-components'
import { theme } from '../global'
import { useDevice } from '../util'

export const Title = styled.h1`
  @import url('https://fonts.googleapis.com/css2?family=Handlee&display=swap');
  font-size: 2rem;
  font-weight: normal;
  font-family: 'Handlee', cursive;
  color: ${theme.text};
  margin: ${props => props.device === 'mobile' ? '1rem 0 0 1.25rem' : '3rem 0 0 3.25rem' };
`

export default function Logo() {
  const device = useDevice()

  return (
    <Title device={device}>Recipedia</Title>
  )
}

