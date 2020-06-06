import React, { useContext } from 'react'
import styled from 'styled-components'
import { theme } from '../global'
import HeartButton from './buttons/HeartButton'
import { RecipesContext } from '../RecipesContext'

const RecipeCardContainer = styled.div`
  display: block;
  max-width: 13rem;
  margin: 0.5rem;

  * {
    margin: 0;
  }

  a > img {
    width: 13rem;
    height: 8rem;
    border-radius: 10px;
    border: 5px solid ${theme.accent};
  }

  div {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;

    > a {
      display: flex;
      flex-flow: column nowrap;
      align-items: center;
      text-decoration: none;
      margin-right: 0.5rem;

      > h3 {
        color: ${theme.accent};
        text-align: left;
        font-weight: 500;
        width: 100%;
      }
    }
  }

  span {
    color: ${theme.accent2};
    font-weight: 500;
    margin-right: 0.5rem;
  }

  p {
    display: inline;
  }
`

function truncateString(str = '', charLimit = 0) {
  if (str) return str.length < charLimit ? str : str.substring(0, charLimit) + '...'
  else return ''
}

export default function RecipeCard({ recipe }) {
  const { title, readyInMinutes, image, sourceUrl, instructions } = recipe
  const [, favoriteRecipes, dispatchFavoriteRecipes] = useContext(RecipesContext)

  const truncatedTitle = truncateString(title, 30)
  const summary = truncateString(instructions, 60)

  const isRecipeFavorite = favoriteRecipes.map(recipe => recipe.id).includes(recipe.id)
  const addToFavorites = () => dispatchFavoriteRecipes({ type: 'add', recipe: recipe })
  const removeFromFavorites = () => dispatchFavoriteRecipes({ type: 'remove', id: recipe.id })

  return (
    <RecipeCardContainer>
      <a href={sourceUrl} target="_blank" rel="noopener noreferrer">
        <img src={image} alt={title} />
      </a>
      <div>
        <a href={sourceUrl} target="_blank" rel="noopener noreferrer">
          <h3>{truncatedTitle}</h3>
        </a>
        <HeartButton filled={isRecipeFavorite} onClick={isRecipeFavorite ? removeFromFavorites : addToFavorites} />
      </div>
      <span>{readyInMinutes} mins</span>
      <p>{summary}</p>
    </RecipeCardContainer >
  )
}
