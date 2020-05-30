import React, { useState } from 'react'
import styled from 'styled-components'
import RecipeTab from './RecipeTab'
import { useFetch, useDevice } from '../util'

const SidebarContainer = styled.div`
  display: flex;
  flex-direction: ${props => props.direction || 'row'};
  flex-wrap: nowrap;
`

export default function Sidebar() {
  // const sampleRecipe = useFetch('https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/479101/information?includeNutrition=true')

  const device = useDevice()
  const [currentTab, setCurrentTab] = useState(0)

  switch (device) {
    case 'desktop':
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
    case 'laptop':
      return (
        <SidebarContainer>
          {currentTab === 0 &&
            <RecipeTab
              header="Discover"
              recipes={[]}
              buttonLabel="See recent"
              onButtonClick={() => console.log('see recent button clicked')}
            />}
          {currentTab === 1 &&
            <RecipeTab
              header="My favorites"
              recipes={[]}
              buttonLabel="See favorites"
              onButtonClick={() => console.log('see favorites button clicked')}
            />}
        </SidebarContainer>
      )
    default: // tablet & mobile
      return (
        <SidebarContainer direction="column">
          {currentTab === 0 &&
            <RecipeTab
              header="Discover"
              recipes={[]}
              buttonLabel="See recent"
              onButtonClick={() => console.log('see recent button clicked')}
            />}
          {currentTab === 1 &&
            <RecipeTab
              header="My favorites"
              recipes={[]}
              buttonLabel="See favorites"
              onButtonClick={() => console.log('see favorites button clicked')}
            />}
        </SidebarContainer>
      )
  }
}
