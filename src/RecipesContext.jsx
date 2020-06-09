import React, { createContext, useReducer, useEffect } from 'react'
// import { randomRecipes as sampleRandomRecipes } from './sampleResources'
import { useFetch } from './util'

export const RecipesContext = createContext([])

function reducer(state, action) {
  switch (action.type) {
    case 'set':
      localStorage.setItem('favoriteRecipes', JSON.stringify(action.recipes))
      return action.recipes
    case 'add':
      const addedState = [...state, action.recipe]
      localStorage.setItem('favoriteRecipes', JSON.stringify(addedState))
      return addedState
    case 'remove':
      const removedState = state.filter(recipe => recipe.id !== action.id)
      localStorage.setItem('favoriteRecipes', JSON.stringify(removedState))
      return removedState
    default:
      return state
  }
}

const loadFavoriteRecipes = () => JSON.parse(localStorage.getItem('favoriteRecipes')) || []

export function RecipesProvider(props) {
  // Sample data to save api calls
  // const randomRecipes = sampleRandomRecipes
  // Actual api data here
  const [randomRecipes] = useFetch('https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/random?number=5', {}).recipes || []

  const [favoriteRecipes, dispatchFavoriteRecipes] = useReducer(reducer, loadFavoriteRecipes())

  // New users with no favorites get a random selection of recipes in their favorites
  useEffect(() => {
    if (!localStorage.getItem('favoriteRecipes')) {
      dispatchFavoriteRecipes({ type: 'set', recipes: randomRecipes.slice(0, 5) })
    }
  }, [randomRecipes])

  return (
    <RecipesContext.Provider value={[randomRecipes, favoriteRecipes, dispatchFavoriteRecipes]}>
      {props.children}
    </RecipesContext.Provider>
  )
}
