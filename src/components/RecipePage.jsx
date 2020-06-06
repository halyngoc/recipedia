import React from 'react'
import styled from 'styled-components'
import RecipeCard from './RecipeCard'
import { Button } from './buttons/Button'

const RecipePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;

  > div {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-bottom: 1rem;
  }
`

export default function RecipePage({ recipes, onMoreClick, isSeeMoreButtonVisible }) {
  return (
    <RecipePageContainer>
      <div>
        {recipes.map((recipe, index) => <RecipeCard recipe={recipe} key={`recipe-page-card-${index}`} />)}
      </div>
      {isSeeMoreButtonVisible && <Button onClick={onMoreClick}>See more</Button>}
    </RecipePageContainer>
  )
}
