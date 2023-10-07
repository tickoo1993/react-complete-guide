import React from 'react'
import ChartBar from './ChartBar'
import "./Chart.css"

const Chart = ({dataPoints}) => {
    const valueList = dataPoints.map(dp => dp.value)
    const maxValue = Math.max(...valueList);
  return (
    <div className='chart'>
        {dataPoints.map((data) => <ChartBar key={data.label} item={data} maxValue={maxValue} label={data.label}></ChartBar>)}
    </div>
  )
}

export default Chart