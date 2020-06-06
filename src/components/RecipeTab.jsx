import React from 'react'
import styled from 'styled-components'
import RecipeCard from './RecipeCard'
import { Button } from './buttons/Button'
import { useDevice, isOneColumnLayout } from '../util'

const TabContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-bottom: 1rem;
  height: 21rem;

  h2 {
    margin: 0;
    font-weight: 500;
  }

  > div {
    display: flex;
    align-items: stretch;
    overflow-x: scroll;
    padding: 0 1rem;
    width: 100%;
    height: 100%;

    button {
      margin: 0.5rem;
    }
  }
`

const VerticalTabContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: center;
  width: 15rem;
  height: 100%;

  h2 {
    margin: 0 0 1rem 0;
    font-weight: 500;
  }

  > div {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    overflow-y: scroll;
    margin: 0 0 1rem 0;
  }
`

export default function RecipeTab(props) {
  const { header, recipes, buttonLabel, onButtonClick } = props
  const device = useDevice()

  if (isOneColumnLayout(device)) {
    return (
      <TabContainer>
        <h2>{header}</h2>
        <div>
          {recipes.map((recipe, index) => <RecipeCard key={`recipe-${header}-${index}`} recipe={recipe} />)}
          <Button onClick={onButtonClick}>{buttonLabel}</Button>
        </div>
      </TabContainer>
    )
  } else {
    return (
      <VerticalTabContainer>
        <h2>{header}</h2>
        <div>
          {recipes.map((recipe, index) => <RecipeCard key={`recipe-${header}-${index}`} recipe={recipe} />)}
        </div>
        <Button onClick={onButtonClick}>{buttonLabel}</Button>
      </VerticalTabContainer>
    )
  }
}
