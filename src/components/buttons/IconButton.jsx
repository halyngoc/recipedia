import styled from 'styled-components'
import { theme } from '../../global'

export const IconButton = styled.button`
  background: none;
  border: none;
  border-radius: 10px;
  padding: 5px 0 0 5px;

  :active {
    filter: saturate(5);
  }

  :focus {
    outline: none;
    box-shadow: 0 0 0 2px ${theme.text};
  }

  p {
    margin: 0;
    color: ${theme.text};
  }
`
