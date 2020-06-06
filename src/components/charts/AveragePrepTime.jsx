import React from 'react'
import { StatsContainer } from './StatsContainer'

function recipesToAveragePrepTime(recipes) {
  if (!recipes || recipes.length === 0) return 0

  const prepTimes = recipes.map(recipe => recipe.readyInMinutes).filter(time => time != null)

  if (prepTimes.length === 0) return 0

  const averagePrepTime = prepTimes.reduce((accumulator, currentVal) => accumulator + currentVal) / prepTimes.length

  return averagePrepTime
}

export default function AveragePrepTime({ label, recipes }) {
  const averagePrepTime = recipesToAveragePrepTime(recipes).toFixed(2)

  if (averagePrepTime === 0) return null
  else return (
    <StatsContainer>
      {label}
      <div>{averagePrepTime} minutes</div>
      to prepare.
    </StatsContainer>
  )
}
