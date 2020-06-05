import React from 'react'
import styled from 'styled-components'
import { theme } from '../global'
import { useDevice } from '../util'

const Title = styled.button`
  font-size: ${props => props.device === 'mobile' ? '2rem' : '2.5rem'};
  font-weight: normal;
  font-family: 'Handlee', cursive;
  color: ${theme.text};
  border: none;
  background-color: #00000000;
`

export default function Logo({ onClick }) {
  const device = useDevice()

  return <Title device={device} onClick={onClick}>Recipedia</Title>
}

