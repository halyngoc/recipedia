import { useState, useEffect } from 'react'

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

  if (windowWidth < 600) return 'mobile'
  else if (windowWidth < 960) return 'tablet'
  else return 'desktop'
}
