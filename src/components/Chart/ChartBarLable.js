import React from "react";
import "./ChartBarLable.css";
import Chart from "./Chart";
const ChartBarLable = (props) => {
  const chartDataPoints = [
    { name: "Січ", value: 0 },
    { name: "Лют", value: 0 },
    { name: "Бер", value: 0 },
    { name: "Кві", value: 0 },
    { name: "Тра", value: 0 },
    { name: "Чер", value: 0 },
    { name: "Лип", value: 0 },
    { name: "Сер", value: 0 },
    { name: "Вер", value: 0 },
    { name: "Жов", value: 0 },
    { name: "Лис", value: 0 },
    { name: "Гру", value: 0 },
  ];
  
  //console.log(props.expenseDates[0]);
     for (const expense of props.expenseDates) {
    const expenseMonth = expense.date.getMonth(); 
    chartDataPoints[expenseMonth].value += expense.amount;

  }    
  //console.log(chartDataPoints);
  return (
  <Chart dataPoints={chartDataPoints} />
  )
};
export default ChartBarLable;
