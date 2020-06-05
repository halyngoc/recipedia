import React from 'react'
import Logo from './Logo'
import SearchButton from './buttons/SearchButton'
import styled from 'styled-components'

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  margin: 0;
`

export default function Header({ onSearchClick }) {
  return (
    <HeaderContainer>
      <Logo />
      <SearchButton onClick={onSearchClick} />
    </HeaderContainer>
  )
}
