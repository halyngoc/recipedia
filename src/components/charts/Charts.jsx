import React, { useContext } from 'react'
import styled from 'styled-components'
import RecipesByCategory from './RecipesByCategory'
import { RecipesContext } from '../../RecipesContext'
import AveragePrepTime from './AveragePrepTime'

const ChartsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;

  > div > * {
    margin-bottom: 1rem;
  }
`

export default function Charts() {
  const [randomRecipes, favoriteRecipes] = useContext(RecipesContext)

  return (
    <ChartsContainer>
      <div>
        <AveragePrepTime label="An average recipe takes" recipes={randomRecipes} />
        <RecipesByCategory label={`${randomRecipes.length} random recipes by category`} recipes={randomRecipes} />
      </div>
      <div>
        <AveragePrepTime label="Your average recipe takes" recipes={favoriteRecipes} />
        <RecipesByCategory label="Your favorite recipes by category" recipes={favoriteRecipes} />
      </div>
    </ChartsContainer>
  )
}
