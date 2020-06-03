import React, { useContext } from 'react'
import styled from 'styled-components'
import RecipesByCategory from './RecipesByCategory'
import { RecipesContext } from '../../RecipesContext'
import AveragePrepTime from './AveragePrepTime'
import AverageWeightWatcherPoints from './AverageWeightWatcherPoints'

const ChartsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  > div > * {
    margin-bottom: 2rem;
  }
`

export default function Charts() {
  const [randomRecipes, favoriteRecipes] = useContext(RecipesContext)

  return (
    <ChartsContainer>
      <div>
        <AveragePrepTime label="An average recipe takes" recipes={randomRecipes} />
        <AverageWeightWatcherPoints label="An average recipe has" recipes={randomRecipes} />
        <RecipesByCategory label={`${randomRecipes.length} random recipes by category`} recipes={randomRecipes} />
      </div>
      <div>
        <AveragePrepTime label="Your average favorite recipe takes" recipes={favoriteRecipes} />
        <AverageWeightWatcherPoints label="Your average favorite recipe has" recipes={favoriteRecipes} />
        <RecipesByCategory label="Your favorite recipes by category" recipes={favoriteRecipes} />
      </div>
    </ChartsContainer>
  )
}
