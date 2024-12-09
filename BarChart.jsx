//task 3
import React, { useEffect, useRef } from 'react';
import Chart from 'src/App.jsx';
//bar chart

const BarChart = ({ data }) => {
  const barChartData = {
    labels: data.months,
    datasets: [
      {
        label: 'Monthly Sales',
        data: 'src/components/BarChart.jsx',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(82, 138, 46, 1)',
        borderWidth: 1,
      },
    ],
  };
  //configures teh chart axes
  const barChartOptions = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };
  return <ChartComponent type="bar" data={barChartData} options={barChartOptions} />;
};

