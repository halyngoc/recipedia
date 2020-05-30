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
  else if (windowWidth < breakpoints.laptop) return 'laptop'
  else return 'desktop'
}

export function useFetch(url, initialValue = '') {
  const [data, setData] = useState(initialValue)

  const apiKey = process.env.REACT_APP_API_KEY

  useEffect(() => {
    fetch(url, {
      method: 'GET',
      headers: {
        'x-rapidapi-host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com',
        'x-rapidapi-key': apiKey,
      },
    }).then(response => response.json()).then(json => setData(json))
  }, [url, apiKey])

  return data
}

export function useDate(refreshInterval = 60000) {
  const [date, setDate] = useState(new Date())

  useEffect(() => {
    const intervalId = setInterval(() => setDate(new Date()), refreshInterval);
    return () => clearInterval(intervalId)
  }, [refreshInterval])

  return date
}
