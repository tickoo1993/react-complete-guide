import React from 'react'
import "./ChartBar.css"

const ChartBar = ({item,label,maxValue}) => {
    let barFillHeight = "0%";
    if(maxValue>0){
        barFillHeight= Math.round(item.value/maxValue *100) + "%";
    }
  return (
    <div className='chart-bar'>
        <div className='chart-bar__inner'>
            <div className='chart-bar__fill' style={{height:barFillHeight}}></div>
        </div>
        <div className='chart-bar__label'>
            <label>{label}</label>
        </div>
    </div>
  )
}

export default ChartBar;