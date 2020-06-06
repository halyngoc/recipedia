import React, { useState } from 'react'
import styled from 'styled-components'
import { useDevice, isOneColumnLayout, useFocus } from '../../util'
import { Container } from '../Container'
import { theme } from '../../global'
import SearchButton from '../buttons/SearchButton'
import EscapeButton from '../buttons/EscapeButton'

const SearchContainer = styled.div`
  section {
    padding: ${props => isOneColumnLayout(props.device) ? '1rem 1.5rem' : '1.5rem 2rem'};
    width: 100%;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    background-color: ${theme.background};

    form {
      height: fit-content;
      display: flex;
      justify-content: stretch;
      align-items: center;
    
      input {
        flex-grow: 1;
        background-color: #00000000;
        color: ${theme.accent};
        border: none;
        font-size: ${props => isOneColumnLayout(props.device) ? '1.5rem' : '2.5rem'};
        font-weight: 500;

        :focus {
          border: none;
          outline: none;
        }

        ::placeholder {
          color: ${theme.accent2};
        }
      }
    }
  }
`

export default function Browse({ isVisible, onSearch, onEscape }) {
  const device = useDevice()
  const [searchFieldValue, setSearchFieldValue] = useState('')
  const [searchFieldRef, setSearchFieldFocus] = useFocus()

  const onFormSubmit = event => {
    event.preventDefault()
    onSearch(searchFieldValue)
  }

  if (!isVisible) return null
  else return (
    <SearchContainer>
      <Container
        device={device}
        align="center"
        alignItems="center"
      >
        <section onClick={setSearchFieldFocus}>
          <form onSubmit={onFormSubmit}>
            <input
              ref={searchFieldRef}
              placeholder="Type here"
              type="text"
              aria-label="search"
              onChange={e => setSearchFieldValue(e.target.value)}
              autoFocus
            />
            <SearchButton onClick={onFormSubmit} label="Enter" />
            <EscapeButton onClick={onEscape} label="Esc" />
          </form>
        </section>
      </Container>
    </SearchContainer>
  )
}
