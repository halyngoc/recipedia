import React from 'react'
import styled from 'styled-components'
import RecipeCard from './RecipeCard'
import { Button } from './Button'
import { useDevice, isOneColumnLayout } from '../util'

const TabContainer = styled.div`
  display: flex;
  flex-direction: ${props => props.direction};
  justify-content: space-between;
  align-items: center;

  h2 {
    margin-top: 0;
    font-weight: 500;
  }
`

export default function RecipeTab(props) {
  const { header, recipes, buttonLabel, onButtonClick } = props
  const device = useDevice()

  return (
    <TabContainer direction={isOneColumnLayout(device) ? 'row' : 'column'}>
      <h2>{header}</h2>
      {recipes.map((recipe, index) => <RecipeCard key={`recipe - ${header} -${index} `} recipe={recipe} />)}
      <Button onClick={onButtonClick}>{buttonLabel}</Button>
    </TabContainer>
  )
}
