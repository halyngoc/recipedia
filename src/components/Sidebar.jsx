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
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-around;
  background-color: ${theme.background2};
  padding: 1.5rem 2.5rem;
  width: 100%;
  height: fit-content;

  > *:first-child {
    margin-bottom: 2rem;
  }
`
const VerticalSidebarContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-around;
  background-color: ${theme.background2};
  padding: 1.5rem 2.5rem;
  width: fit-content;
  height: 100vh;

  > *:first-child {
    margin-right: 1.5rem;
  }
`

export default function Sidebar() {
  const device = useDevice()
  const [currentTab, setCurrentTab] = useState(0)

  switch (device) {
    case 'desktop':
      return (
        <VerticalSidebarContainer>
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
        </VerticalSidebarContainer>
      )
    case 'laptop':
      return (
        <VerticalSidebarContainer>
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
        </VerticalSidebarContainer>
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
