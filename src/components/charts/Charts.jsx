import React, { useContext } from 'react'
import styled from 'styled-components'
import RecipesByCategory from './RecipesByCategory'
import { RecipesContext } from '../../RecipesContext'

const ChartsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`

export default function Charts() {
  const [randomRecipes, favoriteRecipes] = useContext(RecipesContext)

  return (
    <ChartsContainer>
      <RecipesByCategory label="Randoms" recipes={randomRecipes} />
      <RecipesByCategory label="Favorites" recipes={favoriteRecipes} />
    </ChartsContainer>
  )
}
