//task 3
//scatter chart
import React from "react";
import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
} from "src/App.jsx";
import { Scatter } from "react-chartjs-2";

ChartJS.register(LinearScale, PointElement, LineElement, Tooltip, Legend);

export const options = {
  plugins: {
    tooltip: false,
    
    legend: {
      labels: {
        usePointStyle: true,
        boxWidth: 5,
        boxHeight: 5
      },
      position: "top",
      xlabels: "herre"
    }
  },
  
  scales: {
    x: {
      beginAtZero: true,
      max: 9000000,
      title: {
        display: true,
        text: "expenses"
      },
      grid: {
        display: false
      }
    },
    y: {
      beginAtZero: true,
      max: 900000000,
      title: {
        display: true,
        text: "profits"
      },
      grid: {
        display: false
      }
    }
  }
 
};

export const data = {
  labels: ["expenses", "profit"],
  datasets: [
    {
      
      data: [
        {
          x: 0,
          y: 0
        },
        { x: 48432, y: 234134 },
        { x: 21341241, y: 1234134 },
        { x: 1546432, y: 575477347 }
      ],
      backgroundColor: ["rgba(255, 171, 198, 1)", "rgba(255, 171, 31, 1)"]
    }
 
  ]
};

export function App() {
  return <Scatter options={options} data={data} />;
}
