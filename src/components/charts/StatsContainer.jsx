import { theme } from '../../global'
import styled from 'styled-components'

export const StatsContainer = styled.div`
  color: ${theme.text};
  text-align: center;

  > div {
    color: ${theme.accent};
    font-size: 1.4rem;
  }
`
