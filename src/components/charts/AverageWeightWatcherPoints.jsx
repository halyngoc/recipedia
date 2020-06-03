import React from 'react'
import { StatsContainer } from './StatsContainer'

function recipesToAverageWWPoints(recipes) {
  if (recipes.length === 0) return 0

  const wwPoints = recipes.map(recipe => recipe.weightWatcherSmartPoints).filter(time => time != null)

  if (wwPoints.length === 0) return 0

  const averageWWPoints = wwPoints.reduce((accumulator, currentVal) => accumulator + currentVal) / wwPoints.length

  return averageWWPoints
}

export default function AverageWeightWatcherPoints({ label, recipes }) {
  const averageWWPoints = recipesToAverageWWPoints(recipes)

  if (averageWWPoints === 0) return null
  else return (
    <StatsContainer>
      {label}
      <div>{averageWWPoints} SmartPoints</div>
      <a href="https://www.weightwatchers.com/us/how-it-works/smartpoints" target="_blank" rel="noopener noreferrer">
        (What's Weight Watchers SmartPoints?)
      </a>
    </StatsContainer>
  )
}
