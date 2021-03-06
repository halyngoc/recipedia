import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { useDevice, isOneColumnLayout, useFetch } from '../../util'
import { Container } from '../Container'
import Header from '../Header'
import RecipePage from '../RecipePage'
// import { randomRecipes as sampleRecipes } from '../../sampleResources'
import { theme } from '../../global'

const BrowseContainer = styled.div`
  article {
    padding: ${props => isOneColumnLayout(props.device) ? '0.75rem 1.25rem' : '1rem 1.25rem'};

    main > h1, main > h2 {
      font-weight: 500;
      text-align: center;
      margin: 0;
    }

    main > h2 {
      color: ${theme.accent};
      font-size: 2rem;
      margin-bottom: 1rem;
    }

    main > p {
      margin: 0;
      text-align: center;
    }
  }
`

function useMatchingRecipes(searchQuery = '', offset = 0) {
  const searchUrl = `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/search?query=${searchQuery}&offset=${offset}&number=${pageSize}`
  const [recipes, isRecipesLoading] = useFetch(searchUrl)
  const matchingRecipes = (recipes || {}).results || []
  const matchingRecipeIds = matchingRecipes.map(recipe => recipe.id)

  // If there are no matches, don't call the api for recipe details
  const detailedRecipesUrl = matchingRecipeIds.length > 0 ?
    `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/informationBulk?ids=${matchingRecipeIds.join()}` : null
  const [matchingDetailedRecipes, isDetailedRecipesLoading] = useFetch(detailedRecipesUrl)
  const results = matchingDetailedRecipes || []

  const isLoading = isRecipesLoading || isDetailedRecipesLoading

  return [results, isLoading]
}

function useBrowsePageRecipes(searchQuery) {
  const [offset, setOffset] = useState(0)
  const [recipes, setRecipes] = useState([])
  const [hasNextBatch, setHasNextBatch] = useState(true)

  const [matchingRecipes, isLoading] = useMatchingRecipes(searchQuery, offset)
  const getNextBatch = () => setOffset(offset + pageSize)

  useEffect(() => setRecipes([]), [searchQuery])

  useEffect(() => {
    if (matchingRecipes && matchingRecipes.length > 0) {
      setRecipes(recipes => recipes.concat(matchingRecipes))
      setHasNextBatch(true)
    } else if (matchingRecipes && matchingRecipes.length === 0) {
      setHasNextBatch(false)
    }
  }, [matchingRecipes])

  return [recipes, getNextBatch, hasNextBatch, isLoading]
}

const pageSize = 10

export default function Browse({ onSearchClick, searchQuery, onLogoClick }) {
  const device = useDevice()

  const searchQueryExists = searchQuery && searchQuery.length > 0

  // This uses sample data
  // const [recipes, setRecipes] = useState(sampleRecipes)
  // const getNextBatch = () => setRecipes(recipes.concat(recipes))
  // const hasNextBatch = false
  // And this uses api
  const [recipes, getNextBatch, hasNextBatch, isLoading] = useBrowsePageRecipes(searchQuery)

  const getResultsDisplay = () => {
    if (recipes.length === 0 && isLoading) return <p>Loading</p>
    else if (recipes.length === 0) return <p>No results</p>
    else if (isLoading) return <>
      <RecipePage
        recipes={recipes}
        onMoreClick={getNextBatch}
        isSeeMoreButtonVisible={hasNextBatch}
      />
      <p>Loading</p>
    </>
    else return <RecipePage
      recipes={recipes}
      onMoreClick={getNextBatch}
      isSeeMoreButtonVisible={hasNextBatch}
    />
  }

  return (
    <BrowseContainer device={device}>
      <Container
        device={device}
        align="center"
        alignItems="center"
      >
        <article>
          <Header onSearchClick={onSearchClick} onLogoClick={onLogoClick} />
          <main>
            {searchQueryExists &&
              <>
                <h1>Showing results for</h1>
                <h2>{searchQuery}</h2>
              </>}
            {getResultsDisplay()}
          </main>
        </article>
      </Container>
    </BrowseContainer>
  )
}
