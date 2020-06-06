import React, { useState } from 'react'
import styled from 'styled-components'
import { useDevice, useDate } from '../util'
import { theme } from '../global'
import { Button } from './buttons/Button'
import EditButton from './buttons/EditButton'
import CheckButton from './buttons/CheckButton'

const HeroContainer = styled.div`
  text-align: center;

  h1 {
    font-weight: normal;
    margin: 0 0 0.2rem 0;
    display: inline-flex;
    flex-wrap: wrap;
    align-items: baseline;
    justify-content: center;

    span {
      color: ${theme.accent};
      margin-left: 0.5rem;
    }

    input {
      background-color: #00000000;
      color: ${theme.accent};
      border: 2px solid ${theme.accent};
      border-radius: 10px;
      font-size: 1.5rem;
      outline: none;
      margin-left: 0.5rem;
    }
  }

  button {
    margin: 0.5em 0.25em 0 0.25rem;
  }

  p {
    margin: 0 0 0.2rem 0;
  }
`

function Username({ name, onChangeUsername }) {
  const [nameFieldValue, setNameFieldValue] = useState('')
  const [mode, setMode] = useState('view')

  const onFormSubmit = event => {
    event.preventDefault()
    onChangeUsername(nameFieldValue)
    setMode('view')
  }

  if (mode === 'edit') {
    return (
      <form onSubmit={onFormSubmit}>
        <input type="text" defaultValue={name} onChange={e => setNameFieldValue(e.target.value)} />
        <CheckButton onClick={onFormSubmit} />
      </form>
    )
  } else {
    return (
      <>
        <span>{name}</span>
        <EditButton onClick={() => setMode('edit')} />
      </>
    )
  }
}

export default function Hero({ name, onChangeUsername, onBrowseClick, onSeeFavoritesClick }) {
  const device = useDevice()
  const date = useDate()

  const timeOfDay = () => {
    const hour = date.getHours()

    if (hour < 12) return 'morning'
    else if (hour < 17) return 'afternoon'
    else return 'evening'
  }

  const dateTime = date.toLocaleDateString(undefined, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }) +
    ' ' + date.toLocaleTimeString(undefined, { hour: '2-digit', minute: '2-digit' })

  return (
    <HeroContainer device={device}>
      <h1>Good {timeOfDay()}, <Username name={name} onChangeUsername={onChangeUsername} /></h1>
      <p>{dateTime}</p>
      <div>
        <Button device={device} variant="primary" onClick={onBrowseClick}>Browse recipes</Button>
        <Button device={device} variant="secondary" onClick={onSeeFavoritesClick}>See my favorites</Button>
      </div>
    </HeroContainer>
  )
}
