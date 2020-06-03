import React from 'react'
import { ResponsivePie } from '@nivo/pie'
import { theme } from '../../global'
import styled from 'styled-components'
import { useDevice } from '../../util'

function deviceToChartSize(device) {
  switch (device) {
    case 'tablet':
      return ['17.5rem', '15rem']
    case 'laptop':
      return ['18rem', '16rem']
    default:
      return ['20rem', '19rem']
  }
}

const ChartContainer = styled.div`
  width: ${props => deviceToChartSize(props.device)[0]};
  height: ${props => deviceToChartSize(props.device)[1]};
  text-align: center;
`

function recipesToData(recipes) {
  let vegetarianCount = 0
  let veganCount = 0
  let glutenFreeCount = 0
  let dairyFreeCount = 0
  let veryHealthyCount = 0
  let cheapCount = 0
  let veryPopularCount = 0
  let sustainableCount = 0
  let lowFodmapCount = 0
  let ketogenicCount = 0
  let whole30Count = 0

  recipes.forEach(recipe => {
    if (recipe.vegetarian) vegetarianCount += 1
    if (recipe.vegan) veganCount += 1
    if (recipe.glutenFree) glutenFreeCount += 1
    if (recipe.dairyFree) dairyFreeCount += 1
    if (recipe.veryHealthy) veryHealthyCount += 1
    if (recipe.cheap) cheapCount += 1
    if (recipe.veryPopular) veryPopularCount += 1
    if (recipe.sustainable) sustainableCount += 1
    if (recipe.lowFodmap) lowFodmapCount += 1
    if (recipe.ketogenic) ketogenicCount += 1
    if (recipe.whole30) whole30Count += 1
  })

  const data = [
    { id: 'vegetarian', label: 'vegetarian', value: vegetarianCount },
    { id: 'vegan', label: 'vegan', value: veganCount },
    { id: 'glutenFree', label: 'gluten-free', value: glutenFreeCount },
    { id: 'dairyFree', label: 'dairy-free', value: dairyFreeCount },
    { id: 'veryHealthy', label: 'very healthy', value: veryHealthyCount },
    { id: 'cheap', label: 'cheap', value: cheapCount },
    { id: 'veryPopular', label: 'very popular', value: veryPopularCount },
    { id: 'sustainable', label: 'sustainable', value: sustainableCount },
    { id: 'lowFodmap', label: 'low-FODMAP', value: lowFodmapCount },
    { id: 'ketogenic', label: 'ketogenic', value: ketogenicCount },
    { id: 'whole30', label: 'whole30', value: whole30Count },
  ]

  const dataWithoutZeros = data.filter(entry => entry.value !== 0)

  return dataWithoutZeros
}

export default function RecipesByCategory({ label, recipes }) {
  const device = useDevice()

  return (
    <ChartContainer device={device}>
      {label}
      <ResponsivePie
        data={recipesToData(recipes)}
        margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
        innerRadius={0.5}
        padAngle={1.5}
        cornerRadius={3}
        colors={{ scheme: 'nivo' }}
        borderWidth={1}
        borderColor={{ from: 'color', modifiers: [['darker', 0.2]] }}
        radialLabel="label"
        radialLabelsTextColor={theme.text}
        radialLabelsLinkColor={{ from: 'color' }}
        slicesLabelsSkipAngle={10}
        slicesLabelsTextColor={theme.text}
        animate={true}
        motionStiffness={90}
        motionDamping={15}
      />
    </ChartContainer>
  )
}
