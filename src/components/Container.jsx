import styled from 'styled-components'

export const Container = styled.div`
  max-width: ${props => {
    switch (props.device) {
      case 'mobile':
        return '600px'
      case 'tablet':
        return '960px'
      default:
        return '1024px'
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
