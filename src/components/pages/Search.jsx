import React, { useState } from 'react'
import styled from 'styled-components'
import { useDevice, isOneColumnLayout, useFocus } from '../../util'
import { Container } from '../Container'
import { theme } from '../../global'
import SearchButton from '../buttons/SearchButton'
import EscapeButton from '../buttons/EscapeButton'

const SearchContainer = styled.div`
  section {
    display: block;
    padding: ${props => isOneColumnLayout(props.device) ? '1rem 1.5rem' : '1.5rem 2rem'};
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${theme.background};

    form {
      height: fit-content;
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-end;
      align-items: center;
    
      input {
        flex-grow: 1;
        flex-shrink: 1;
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

      button:first-of-type {
        margin-right: 1rem;
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
    <SearchContainer device={device}>
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
            <div>
              <SearchButton onClick={onFormSubmit} label={isOneColumnLayout(device) ? undefined : 'Enter'} />
              <EscapeButton onClick={onEscape} label={isOneColumnLayout(device) ? undefined : 'Esc'} />
            </div>
          </form>
        </section>
      </Container>
    </SearchContainer>
  )
}
