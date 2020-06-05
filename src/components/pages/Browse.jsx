import React from 'react'
import styled from 'styled-components'
import { useDevice, isOneColumnLayout } from '../../util'
import { Container } from '../Container'
import Header from '../Header'

const BrowseContainer = styled.div`
  display: flex;

  article {
    padding: ${props => isOneColumnLayout(props.device) ? '0.75rem 1.25rem' : '1rem 1.25rem'};
  }
`

export default function Browse({ onSearchClick }) {
  const device = useDevice()

  return (
    <BrowseContainer>
      <Container
        device={device}
        align="center"
        alignItems="center"
      >
        <article>
          <Header onSearchClick={onSearchClick} />
          <main>
            Browse page content
          </main>
        </article>
      </Container>
    </BrowseContainer>
  )
}
