import styled from 'styled-components'
import { breakpoints } from '../global'

export const Container = styled.div`
  max-width: ${props => {
    switch (props.device) {
      case 'mobile':
        return `${breakpoints.mobile}px`
      case 'tablet':
        return `${breakpoints.tablet}px`
      default:
        return `${breakpoints.desktop}px`
    }
  }};
  margin: ${props => {
    switch (props.align) {
      case 'left':
        return '0 auto 0 0'
      case 'right':
        return '0 0 0 auto'
      default:
        return '0 auto'
    }
  }};
`
