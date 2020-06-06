import React, { useContext, useState } from 'react'
import styled from 'styled-components'
import { useDevice, isOneColumnLayout } from '../../util'
import { Container } from '../Container'
import Header from '../Header'
import RecipePage from '../RecipePage'
import { RecipesContext } from '../../RecipesContext'

const FavoritesContainer = styled.div`
  article {
    padding: ${props => isOneColumnLayout(props.device) ? '0.75rem 1.25rem' : '1rem 1.25rem'};

    h1 {
      text-align: center;
      font-weight: 500;
      font-size: ${props => isOneColumnLayout(props.device) ? '1.5rem' : '2rem'}
    }

    main > p {
      margin: 0;
      text-align: center;
    }
  }
`

const pageSize = 10

export default function Favorites({ onSearchClick, onLogoClick }) {
  const device = useDevice()
  const [, recipes] = useContext(RecipesContext)
  const [limit, setLimit] = useState(pageSize)

  const shownRecipes = recipes.slice(0, limit)

  return (
    <FavoritesContainer device={device}>
      <Container
        device={device}
        align="center"
        alignItems="center"
      >
        <article>
          <Header onSearchClick={onSearchClick} onLogoClick={onLogoClick} />
          <h1>My favorites</h1>
          <main>
            {recipes.length > 0 ? <RecipePage recipes={shownRecipes} onMoreClick={() => setLimit(limit + pageSize)} /> : <p>No recipes</p>}
          </main>
        </article>
      </Container>
    </FavoritesContainer>
  )
}
