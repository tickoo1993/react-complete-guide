import React from 'react'
import Chart from '../Chart/Chart'

const ExpensesChart = ({expenses}) => {
    const chartDataPoints = [
        {label:"Jan",value:0},
        {label:"Feb",value:0},
        {label:"Mar",value:0},
        {label:"may",value:0},
        {label:"apr",value:0},
        {label:"jun",value:0},
        {label:"july",value:0},
        {label:"aug",value:0},
        {label:"sept",value:0},
        {label:"oct",value:0},
        {label:"nov",value:0},
        {label:"dec",value:0},
    ]

    for(const expense of expenses){
        const exp = expense.date.getMonth();
        chartDataPoints[exp].value += expense.amount;
    }
  return (
    <Chart dataPoints={chartDataPoints}></Chart>
  )
}

export default ExpensesChart