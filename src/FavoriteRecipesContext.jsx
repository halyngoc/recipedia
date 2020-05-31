import React, { createContext, useState } from 'react'
import { recipe as sampleRecipe } from './sampleResources'

export const FavoriteRecipesContext = createContext([])

export function FavoriteRecipesProvider(props) {
  const [recipes, setRecipes] = useState(Array(3).fill(sampleRecipe))

  return (
    <FavoriteRecipesContext.Provider value={[recipes, setRecipes]}>
      {props.children}
    </FavoriteRecipesContext.Provider>
  )
}
