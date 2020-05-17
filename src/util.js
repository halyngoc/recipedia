import { useState, useEffect } from 'react'
import { breakpoints } from './global'

export function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth)

  useEffect(() => {
    const onWindowResize = () => setWidth(window.innerWidth)
    window.addEventListener('resize', onWindowResize)
    return () => window.removeEventListener('resize', onWindowResize)
  })

  return width
}

export function useDevice() {
  const windowWidth = useWindowWidth()

  if (windowWidth < breakpoints.mobile) return 'mobile'
  else if (windowWidth < breakpoints.tablet) return 'tablet'
  else return 'desktop'
}

export function useFetch(url, initialValue = '') {
  const [data, setData] = useState(initialValue)

  useEffect(() => {
    fetch(url).then(response => response.json()).then(json => setData(json))
  }, [url])

  return data
}
