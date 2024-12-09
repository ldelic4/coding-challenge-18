//task 3
//bubble chart
import React, { useEffect, useRef } from 'react';
import Chart from 'src/App.jsx';

const BubbleChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const canvas = chartRef.current;
    if (canvas) {
      const ctx = canvas.getContext('2d');

      const data = {
        datasets: [{
          label: 'Bubble Chart',
          data: [
            { x: 432523, y: 566, r: 76547546 },
            { x: 765848, y: 346346, r: 257370 },
            { x: 376570, y: 176575, r: 16570 },
            
          ],
          backgroundColor: 'rgba(48, 171, 31, 1)',
          borderColor: 'rgba(48, 171, 122, 1)'
        }]
      };

      const options = {
        scales: {
          x: {
            type: 'linear',
            position: 'bottom'
          },
          y: {
            type: 'linear',
            position: 'left'
          }
        }
      };

      const chart = new Chart(ctx, {
        type: 'bubble',
        data: data,
        options: options
      });

      return () => {
        chart.destroy();
      };
    }
  }, []);

  return (
    <div>
      <canvas ref={chartRef} />
    </div>
  );
};

export default BubbleChart;