import React from 'react'
import styled from 'styled-components'
import { theme } from '../global'

const RecipeCardContainer = styled.div`
  display: block;
  max-width: 13rem;
  margin: 0.5rem;

  * {
    margin: 0;
  }

  a {
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    text-decoration: none;

    img {
      width: 13rem;
      height: 8rem;
      border-radius: 10px;
      border: 5px solid ${theme.accent};
    }

    h3 {
      color: ${theme.accent};
      text-align: left;
      font-weight: 500;
      width: 100%;
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
  return str.length < charLimit ? str : str.substring(0, charLimit) + '...'
}

export default function RecipeCard(props) {
  const { title, readyInMinutes, image, sourceUrl, instructions } = props.recipe

  const truncatedTitle = truncateString(title, 30)
  const summary = truncateString(instructions, 60)

  return (
    <RecipeCardContainer>
      <a href={sourceUrl} target="_blank" rel="noopener noreferrer">
        <img src={image} alt={title} />
        <h3>{truncatedTitle}</h3>
      </a>
      <span>{readyInMinutes} mins</span>
      <p>{summary}</p>
    </RecipeCardContainer>
  )
}
