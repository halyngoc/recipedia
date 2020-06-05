import React from 'react'
import styled from 'styled-components'
import RecipeCard from './RecipeCard'
import { Button } from './buttons/Button'

const RecipePageContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`

export default function RecipePage({ recipes, onMoreClick }) {
  return (
    <RecipePageContainer>
      {recipes.map(recipe => <RecipeCard recipe={recipe} key={`recipe-page-card-${recipe.id}`} />)}
      <Button>Back</Button>
      <Button>Next</Button>
    </RecipePageContainer>
  )
}
