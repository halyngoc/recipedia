import React from 'react'
import styled from 'styled-components'
import RecipeTab from './RecipeTab'
// import { useFetch } from '../util'

const SidebarContainer = styled.div`
  display: flex;
`

export default function Sidebar() {
  // const sampleRecipe = useFetch('https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/479101/information?includeNutrition=true')

  return (
    <SidebarContainer>
      <RecipeTab
        header="Discover"
        recipes={[]}
        buttonLabel="See recent"
        onButtonClick={() => console.log('see recent button clicked')}
      />
      <RecipeTab
        header="My favorites"
        recipes={[]}
        buttonLabel="See favorites"
        onButtonClick={() => console.log('see favorites button clicked')}
      />
    </SidebarContainer>
  )
}
