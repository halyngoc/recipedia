import React, { useState } from 'react'
import styled from 'styled-components'
import RecipeTab from './RecipeTab'
import ArrowButton from './ArrowButton'
import { useDevice } from '../util'
import { theme } from '../global'

import { recipe as sampleRecipe } from '../sampleResources'
const sampleRecipes = Array(5).fill(sampleRecipe)

const SidebarContainer = styled.div`
  display: flex;
  flex-direction: ${props => props.direction === 'vertical' ? 'row' : 'column'};
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-around;
  background-color: ${theme.background2};
  padding: 1.5rem 2.5rem;
  width: ${props => props.direction === 'vertical' ? 'fit-content' : '100%'};
  height: ${props => props.direction === 'vertical' ? '100vh' : 'fit-content'};

  > *:first-child {
    margin-right: 1.5rem;
  }
`

export default function Sidebar() {
  // const sampleRecipe = useFetch('https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/479101/information?includeNutrition=true')

  const device = useDevice()
  const [currentTab, setCurrentTab] = useState(0)

  switch (device) {
    case 'desktop':
      return (
        <SidebarContainer direction="vertical">
          <RecipeTab
            header="Discover"
            recipes={sampleRecipes}
            buttonLabel="See recent"
            onButtonClick={() => console.log('see recent button clicked')}
          />
          <RecipeTab
            header="My favorites"
            recipes={sampleRecipes}
            buttonLabel="See favorites"
            onButtonClick={() => console.log('see favorites button clicked')}
          />
        </SidebarContainer>
      )
    case 'laptop':
      return (
        <SidebarContainer direction="vertical">
          {currentTab === 0 &&
            <>
              <RecipeTab
                header="Discover"
                recipes={sampleRecipes}
                buttonLabel="See recent"
                onButtonClick={() => console.log('see recent button clicked')}
              />
              <ArrowButton onClick={() => setCurrentTab(1)} isLeft={false} />
            </>}
          {currentTab === 1 &&
            <>
              <ArrowButton onClick={() => setCurrentTab(0)} isLeft={true} />
              <RecipeTab
                header="My favorites"
                recipes={sampleRecipes}
                buttonLabel="See favorites"
                onButtonClick={() => console.log('see favorites button clicked')}
              />
            </>}
        </SidebarContainer>
      )
    default: // tablet & mobile
      return (
        <SidebarContainer>
          <RecipeTab
            header="Discover"
            recipes={sampleRecipes}
            buttonLabel="See recent"
            onButtonClick={() => console.log('see recent button clicked')}
          />
          <RecipeTab
            header="My favorites"
            recipes={sampleRecipes}
            buttonLabel="See favorites"
            onButtonClick={() => console.log('see favorites button clicked')}
          />
        </SidebarContainer>
      )
  }
}
