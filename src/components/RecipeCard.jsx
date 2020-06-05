import React from 'react'
import styled from 'styled-components'
import { theme } from '../global'

const RecipeCardContainer = styled.div`
  display: block;
  max-width: 13rem;

  * {
    margin: 0;
  }

  margin: 1rem;

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
      font-weight: 500;
    }
  }

  span {
    color: ${theme.accent2};
    font-weight: 500;
    text-align: center;
    margin-right: 0.5rem;
  }

  p {
    display: inline;
  }
`

export default function RecipeCard(props) {
  const { title, readyInMinutes, image, sourceUrl, instructions } = props.recipe

  const charLimit = 80
  const summary = instructions.length < charLimit ? instructions : instructions.substring(0, charLimit) + '...'

  return (
    <RecipeCardContainer>
      <a href={sourceUrl} target="_blank" rel="noopener noreferrer">
        <img src={image} alt={title} />
        <h3>{title}</h3>
      </a>
      <span>{readyInMinutes} mins</span>
      <p>{summary}</p>
    </RecipeCardContainer>
  )
}
