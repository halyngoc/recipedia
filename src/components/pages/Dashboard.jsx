import React from 'react'
import styled from 'styled-components'
import { useDevice, isOneColumnLayout } from '../../util'
import { Container } from '../Container'
import Hero from '../Hero'
import Sidebar from '../Sidebar'
import Charts from '../charts/Charts'
import Header from '../Header'

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
`

export default function Dashboard({ username, onChangeUsername, onBrowseClick, onSeeFavoritesClick, onSearchClick }) {
  const device = useDevice()

  return (
    <DashboardContainer device={device}>
      <Container
        device={device}
        align={isOneColumnLayout(device) ? 'center' : 'right'}
        alignItems="center">
        <article>
          <Header onSearchClick={onSearchClick} />
          <main>
            <Hero
              name={username}
              onChangeUsername={onChangeUsername}
              onBrowseClick={onBrowseClick}
              onSeeFavoritesClick={onSeeFavoritesClick}
            />
            <Charts />
          </main>
        </article>
      </Container>
      <aside>
        <Sidebar
          onDiscoverClick={onBrowseClick}
          onFavoritesClick={onSeeFavoritesClick}
        />
      </aside>
    </DashboardContainer>
  )
}
