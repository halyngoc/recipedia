import styled from 'styled-components'
import { theme } from '../../global'

export const IconButton = styled.button`
  background: none;
  border: none;
  border-radius: 10px;
  padding: ${props => props.padding || '0'};

  :active {
    filter: saturate(5);
  }

  :focus, :hover {
    outline: none;
    box-shadow: 0 0 0 2px ${props => props.color || theme.text};
  }

  p {
    margin: 0;
    color: ${props => props.color || theme.text};
  }
`
