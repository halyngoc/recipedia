import React, { useState } from 'react'
import styled from 'styled-components'
import { useDevice, isOneColumnLayout, useFetch } from '../../util'
import { Container } from '../Container'
import Header from '../Header'
import RecipePage from '../RecipePage'
import { randomRecipes as sampleRecipes } from '../../sampleResources'
import { theme } from '../../global'

const BrowseContainer = styled.div`
  article {
    padding: ${props => isOneColumnLayout(props.device) ? '0.75rem 1.25rem' : '1rem 1.25rem'};

    main > h1, main > p {
      font-weight: 500;
      text-align: center;
      margin: 0;
    }

    main > p {
      color: ${theme.accent};
      font-size: 2rem;
      margin-bottom: 1rem;
    }
  }
`

function useMatchingRecipes(searchQuery = '', offset = 0) {
  const searchUrl = `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/search?query=${searchQuery}&offset=${offset}&number=10`
  const matchingRecipes = useFetch(searchUrl, {}).results || []
  const matchingRecipeIds = matchingRecipes.map(recipe => recipe.id)

  // If there are no matches, don't call the api for recipe details
  const detailedRecipesUrl = matchingRecipeIds.length > 0 ?
    `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/informationBulk?ids=${matchingRecipeIds.join()}` : null
  const matchingDetailedRecipes = useFetch(detailedRecipesUrl) || []

  return matchingDetailedRecipes
}

export default function Browse({ onSearchClick, searchQuery }) {
  const device = useDevice()

  // TODO: Uncomment to get actual api data
  // const matchingRecipes = useMatchingRecipes(searchQuery)
  const [matchingRecipes, setMatchingRecipes] = useState(sampleRecipes)

  const searchQueryExists = searchQuery && searchQuery.length > 0

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
            {searchQueryExists &&
              <>
                <h1>Showing results for</h1>
                <p>{searchQuery}</p>
              </>}
            <RecipePage recipes={matchingRecipes} onMoreClick={() => setMatchingRecipes(matchingRecipes.concat(...matchingRecipes))} />
          </main>
        </article>
      </Container>
    </BrowseContainer>
  )
}
