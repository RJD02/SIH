import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Chart } from "react-chartjs-2";
import "./LineChart.css";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
function LineChart({ xAxis, yAxis, label }) {
  console.log(xAxis);
  console.log(yAxis);
  const data = {
    labels: xAxis,
    datasets: [
      {
        label,
        data: yAxis,
        fill: true,
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "green",
        responsive: true,
      },
    ],
  };
  return (
    <div className="line-chart__level">
      <Line data={data} />
    </div>
  );
}

export default LineChart;
