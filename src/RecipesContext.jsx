import React, { createContext, useState } from 'react'
import { recipe as sampleRecipe } from './sampleResources'

export const RecipesContext = createContext([])

export function RecipesProvider(props) {
  const randomRecipes = Array(100).fill(sampleRecipe) // TODO: fill with api fetch
  const [favoriteRecipes, setFavoriteRecipes] = useState(randomRecipes.slice(0, 5)) // TODO: read from local storage

  return (
    <RecipesContext.Provider value={[randomRecipes, favoriteRecipes, setFavoriteRecipes]}>
      {props.children}
    </RecipesContext.Provider>
  )
}
