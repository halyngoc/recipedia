import React, { useContext } from 'react'
import styled from 'styled-components'
import RecipesByCategory from './RecipesByCategory'
import { RecipesContext } from '../../RecipesContext'
import AveragePrepTime from './AveragePrepTime'
import AverageWeightWatcherPoints from './AverageWeightWatcherPoints'
import { useDevice, isOneColumnLayout } from '../../util'

const ChartsContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;

  > div {
    display: grid; 
    grid-template-columns: 10rem 10rem 25rem;
    grid-template-rows: 1fr 1fr;
    gap: 0.5rem;
    overflow-x: scroll;
    overflow-y: hidden;

    > p {
      text-align: center;
    }
  }
`

const VerticalChartsContainer = styled.div`
  display: grid;
  width: 100%;


  > div {
    width: 100%;
    display: grid;
    justify-content: center;
    grid-template-columns: 48% 48%;
    grid-template-rows: 1fr 1fr auto;
    gap: 1.5rem;

    > p {
      text-align: center;
    }
  }
`

export default function Charts() {
  const [randomRecipes, favoriteRecipes] = useContext(RecipesContext)
  const device = useDevice()

  if (isOneColumnLayout(device)) {
    return (
      <ChartsContainer>
        <div>
          <AveragePrepTime label="An average recipe takes" recipes={randomRecipes} />
          <AverageWeightWatcherPoints label="An average recipe has" recipes={randomRecipes} />
          <RecipesByCategory label={`${randomRecipes.length} random recipes by category`} recipes={randomRecipes} />
          {favoriteRecipes.length > 0 ?
            <>
              <AveragePrepTime label="Your average favorite recipe takes" recipes={favoriteRecipes} />
              <AverageWeightWatcherPoints label="Your average favorite recipe has" recipes={favoriteRecipes} />
              <RecipesByCategory label="Your favorite recipes by category" recipes={favoriteRecipes} />
            </> : <p>Favorite some recipes to see more charts and data</p>}
        </div>
      </ChartsContainer>
    )
  } else {
    return (
      <VerticalChartsContainer>
        <div>
          <AveragePrepTime label="An average recipe takes" recipes={randomRecipes} />
          {favoriteRecipes.length > 0 ?
            <AveragePrepTime label="Your average favorite recipe takes" recipes={favoriteRecipes} /> :
            <p>Favorite some recipes to see more charts and data</p>}
          <AverageWeightWatcherPoints label="An average recipe has" recipes={randomRecipes} />
          {favoriteRecipes.length > 0 ? <AverageWeightWatcherPoints label="Your average favorite recipe has" recipes={favoriteRecipes} /> : <p></p>}
          <RecipesByCategory label={`${randomRecipes.length} random recipes by category`} recipes={randomRecipes} />
          {favoriteRecipes.length > 0 ? <RecipesByCategory label="Your favorite recipes by category" recipes={favoriteRecipes} /> : <p></p>}
        </div>
      </VerticalChartsContainer>
    )
  }

}
