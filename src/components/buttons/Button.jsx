import styled from 'styled-components'
import { theme } from '../../global'

const buttonColor = (variant) => variant === 'secondary' ? theme.accent : theme.text

export const Button = styled.button`
  border: 0;
  border-radius: 5px;
  color: ${theme.text2};
  background-color: ${props => buttonColor(props.variant)};
  font-size: ${props => props.device === 'mobile' ? '1rem' : '1.05rem'};
  padding: ${props => props.device === 'mobile' ? '0.5rem 2.25rem' : '0.5rem 2.75rem'};

  :active {
    filter: saturate(5);
  }

  :focus {
    outline: none;
    box-shadow: 
      0 0 0 3px ${theme.background},
      0 0 0 5px ${props => buttonColor(props.variant)};
    ;
  }
`
