import React from 'react'
import styled from 'styled-components'
import { useDevice, isOneColumnLayout, useFetch } from '../../util'
import { Container } from '../Container'
import Header from '../Header'
import RecipePage from '../RecipePage'

const BrowseContainer = styled.div`
  display: flex;

  article {
    padding: ${props => isOneColumnLayout(props.device) ? '0.75rem 1.25rem' : '1rem 1.25rem'};
  }
`

function useMatchingRecipes(searchQuery = '', offset = 0) {
  const searchUrl = `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/search?query=${searchQuery}&offset=${offset}&number=1`
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
  const matchingRecipes = useMatchingRecipes(searchQuery)

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
            <RecipePage recipes={matchingRecipes} />
          </main>
        </article>
      </Container>
    </BrowseContainer>
  )
}
