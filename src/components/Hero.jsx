import React from 'react'
import styled from 'styled-components'
import { useDevice, useDate } from '../util'
import { theme } from '../global'
import { Button } from './Button'

const HeroContainer = styled.div`
  text-align: center;

  h1 {
    font-weight: normal;
    margin: 0;
  }

  span {
    color: ${theme.accent};
  }

  button {
    margin: 0.5em 0.25em 0 0.25rem;
  }
`

export default function Hero(props) {
  const { name, onBrowseClick, onSeeFavoritesClick } = props
  const device = useDevice()
  const date = useDate()

  const timeOfDay = () => {
    const hour = date.getHours()

    if (hour < 12) return 'morning'
    else if (hour < 17) return 'afternoon'
    else return 'evening'
  }

  return (
    <HeroContainer device={device}>
      <h1>Good {timeOfDay()}{name.length > 0 && <><>, </><span>{name}</span></>}</h1>
      {date.toLocaleDateString(undefined, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }) +
        ' ' + date.toLocaleTimeString(undefined, { hour: '2-digit', minute: '2-digit' })}
      <div>
        <Button device={device} variant="primary" onClick={onBrowseClick}>Browse recipes</Button>
        <Button device={device} variant="secondary" onClick={onSeeFavoritesClick}>See my favorites</Button>
      </div>
    </HeroContainer>
  )
}
