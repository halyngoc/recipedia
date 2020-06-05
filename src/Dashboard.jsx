import React, { useState, useEffect } from 'react'
import Logo from './components/Logo'
import SearchButton from './components/buttons/SearchButton'
import styled from 'styled-components'
import { useDevice, isOneColumnLayout } from './util'
import { Container } from './components/Container'
import Hero from './components/Hero'
import Sidebar from './components/Sidebar'
import Charts from './components/charts/Charts'

const DashboardContainer = styled.div`
  display: flex;
  justify-content: ${props => isOneColumnLayout(props.device) ? 'flex-start' : 'flex-end'};
  flex-direction: ${props => isOneColumnLayout(props.device) ? 'column' : 'row'};
  height: 100vh;

  main {
    > :first-child {
      margin-bottom: 3rem;
    }
  }

  article {
    padding: ${props => isOneColumnLayout(props.device) ? '0.75rem 1.25rem' : '1rem 1.25rem'};
    overflow-y: scroll;
    height: ${props => isOneColumnLayout(props.device) ? 'auto' : '100%'};
  }

  header {
    display: flex;
    justify-content: space-between;
    margin: 0;
  }
`

export default function Dashboard() {
  const device = useDevice()
  const [name, setName] = useState('')

  useEffect(() => setName('Ha'), []) // TODO: Replace this with actual user's name

  return (
    <DashboardContainer device={device}>
      <Container device={device} align={isOneColumnLayout(device) ? 'center' : 'right'} alignItems="center">
        <article>
          <header>
            <Logo />
            <SearchButton onClick={() => console.log('search button clicked')} />
          </header>
          <main>
            <Hero
              name={name}
              onBrowseClick={() => console.log('browse button clicked')}
              onSeeFavoritesClick={() => console.log('see favorites button clicked')}
            />
            <Charts />
          </main>
        </article>
      </Container>
      <aside><Sidebar /></aside>
    </DashboardContainer>
  )
}