import React, { useState } from 'react'
import styled from 'styled-components'
import { useDevice, isOneColumnLayout } from '../../util'
import { Container } from '../Container'
import Header from '../Header'
import RecipePage from '../RecipePage'
import { randomRecipes as sampleRecipes } from '../../sampleResources'
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

// function useMatchingRecipes(searchQuery = '', offset = 0) {
//   const searchUrl = `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/search?query=${searchQuery}&offset=${offset}&number=10`
//   const matchingRecipes = useFetch(searchUrl, {}).results || []
//   const matchingRecipeIds = matchingRecipes.map(recipe => recipe.id)

//   console.log('matching ids', matchingRecipeIds)

//   // If there are no matches, don't call the api for recipe details
//   const detailedRecipesUrl = matchingRecipeIds.length > 0 ?
//     `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/informationBulk?ids=${matchingRecipeIds.join()}` : null
//   const matchingDetailedRecipes = useFetch(detailedRecipesUrl) || []

//   return matchingDetailedRecipes
// }

// function useBrowsePageRecipes(searchQuery) {
//   const [offset, setOffset] = useState(0)
//   const [recipes, setRecipes] = useState([])

//   const matchingRecipes = useMatchingRecipes(searchQuery, offset)
//   const getNextBatch = () => setOffset(offset + 10)

//   useEffect(() => {
//     if (matchingRecipes && matchingRecipes.length > 0) setRecipes(recipes => recipes.concat(matchingRecipes))
//   }, [matchingRecipes])

//   return [recipes, getNextBatch]
// }

export default function Browse({ onSearchClick, searchQuery }) {
  const device = useDevice()

  const searchQueryExists = searchQuery && searchQuery.length > 0

  // This uses sample data
  const [recipes, setRecipes] = useState(sampleRecipes)
  const getNextBatch = () => setRecipes(recipes.concat(recipes))
  // And this uses api
  // const [recipes, getNextBatch] = useBrowsePageRecipes(searchQuery)

  return (
    <BrowseContainer>
      <Container
        device={device}
        align="center"
        alignItems="center"
      >
        <article>
          <Header onSearchClick={onSearchClick} />
          <main>
            {searchQueryExists &&
              <>
                <h1>Showing results for</h1>
                <h2>{searchQuery}</h2>
              </>}
            {recipes.length > 0 ? <RecipePage recipes={recipes} onMoreClick={getNextBatch} /> : <p>No results</p>}
          </main>
        </article>
      </Container>
    </BrowseContainer>
  )
}
