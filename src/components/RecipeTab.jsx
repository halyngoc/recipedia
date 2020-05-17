import React from 'react'
import styled from 'styled-components'
import RecipeCard from './RecipeCard'
import { Button } from './Button'
import { theme } from '../global'

const TabContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: ${theme.background2};
  width: 20rem;
  height: 100vh;
  padding: 1rem 2rem;

  h2 {
    font-weight: 500;
  }
`

export default function RecipeTab(props) {
  const { header, recipes, buttonLabel, onButtonClick } = props

  return (
    <TabContainer>
      <h2>{header}</h2>
      {recipes.map((recipe, index) => <RecipeCard key={`recipe-${header}-${index}`} recipe={recipe} />)}
      <Button onClick={onButtonClick}>{buttonLabel}</Button>
    </TabContainer>
  )
}
