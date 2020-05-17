import React from 'react'
import styled from 'styled-components'

const RecipeCardContainer = styled.div`
  display: flex;
`

export default function RecipeCard(props) {
  const { recipe } = props

  // TODO: Display actual recipe card
  return (
    <RecipeCardContainer>
      {JSON.stringify(recipe)}
    </RecipeCardContainer>
  )
}
