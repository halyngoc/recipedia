import React from 'react'
import styled from 'styled-components'
import { theme } from '../global'
import { useDevice } from '../util'

const Title = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Handlee&display=swap');
  font-size: ${props => props.device === 'mobile' ? '2rem' : '2.5rem'};
  font-weight: normal;
  font-family: 'Handlee', cursive;
  color: ${theme.text};
`

export default function Logo() {
  const device = useDevice()

  return (
    <Title device={device}>Recipedia</Title>
  )
}

