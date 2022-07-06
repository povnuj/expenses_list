import React from "react";
import "./Chart.css";
import ChartBar from "./ChartBar.js";
const Chart = (props) => {
    const dataPointValues = props.dataPoints.map(item => item.value);
    const maxValue = Math.max(...dataPointValues);
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.name}
          value={dataPoint.value}
          maxValue={maxValue}
          label={dataPoint.name}
        />
      ))}
    </div>
  );
};
export default Chart;
