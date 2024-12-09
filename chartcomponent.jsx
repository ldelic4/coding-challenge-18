//task 2

import React, { useEffect, useRef } from 'react';
import Chart from 'src/App.jsx';
//define function component andensures proper cleanup
const ChartComponent = ({ type, data, options }) => {
    const chartRef = useRef(null);
    const chartInstanceRef = useRef(null);
    //use effect and accesses 2d rendering
    useEffect(() => {
        const ctx = chartRef.current.getContext('2d');
        if (chartInstanceRef.current) {
            chartInstanceRef.current.destroy();
          }
          //define data set
          chartInstanceRef.current = new Chart(ctx, {
            type,
            data,
            options,
          });
          return () => {
            if (chartInstanceRef.current) {
              chartInstanceRef.current.destroy();
              chartInstanceRef.current = null;
            }
          };
        }, [type, data, options]);
        //html element where the chart will be rendered
        return <canvas ref={chartRef}></canvas>
        
    };
    export default ChartComponent;
