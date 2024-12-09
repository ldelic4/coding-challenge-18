//task 3

//line chart
import React from "react";
import "./app.css";

import { Line } from "react-chartjs-2";

const data = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  datasets: [
    {
      label: "months",
      data: [23, 23, 65, 12, 67, 25],
      fill: true,
      backgroundColor: "rgba(150, 171, 0, 1)",
      borderColor: "rgba(0, 171, 198, 1)"
    },
    {
      label: "profits",
      data: [73, 25, 74, 23, 56, 76],
      fill: false,
      borderColor: "#745774"
    }
  ]
};

export default function App() {
  return (
    <div className="App">
      <Line data={data} />
    </div>
  );
}
