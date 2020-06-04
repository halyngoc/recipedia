import styled from 'styled-components'
import { breakpoints, alignMargin } from '../global'

export const Container = styled.div`
  max-width: ${props => {
    switch (props.device) {
      case 'mobile':
        return `${breakpoints.mobile}px`
      case 'tablet':
        return `${breakpoints.tablet}px`
      default:
        return `${breakpoints.laptop}px`
    }
  }};
  width: 100%;
  margin: ${props => alignMargin(props.align)};
`
