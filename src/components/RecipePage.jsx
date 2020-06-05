import React from 'react'
import styled from 'styled-components'
import RecipeCard from './RecipeCard'
import { Button } from './buttons/Button'

const RecipePageContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

export default function RecipePage({ recipes, onMoreClick }) {
  return (
    <RecipePageContainer>
      {recipes.map((recipe, index) => <RecipeCard recipe={recipe} key={`recipe-page-card-${index}`} />)}
      <Button onClick={onMoreClick}>See more</Button>
    </RecipePageContainer>
  )
}
