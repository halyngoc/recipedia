import React from 'react'
import styled from 'styled-components'
import RecipeCard from './RecipeCard'
import { Button } from './Button'
import { theme } from '../global'
import { useDevice, isOneColumnLayout } from '../util'

const TabContainer = styled.div`
  display: flex;
  flex-direction: ${props => props.direction};
  justify-content: space-between;
  align-items: center;
  background-color: ${theme.background2};
  width: ${props => props.direction === 'row' ? '100%' : 'fit-content'};
  height: ${props => props.direction === 'row' ? 'fit-content' : '100vh'};
  padding: 1rem 2rem;

  h2 {
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
