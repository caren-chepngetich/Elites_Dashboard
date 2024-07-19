import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import './barGraph.css'; // Import your CSS file for styling

const BarGraph = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    if (!chartRef.current) return;

    const ctx = chartRef.current.getContext('2d');

    // Example data for the bar chart
    const data = {
      labels: ['January', 'February', 'March', 'April', 'May'],
      datasets: [{
        label: 'Sales Data',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
        data: [65, 59, 80, 81, 56],
      }],
    };

    // Chart.js configuration
    const options = {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    };

    // Create the chart instance
    const myChart = new Chart(ctx, {
      type: 'bar',
      data: data,
      options: options,
    });

    return () => {
      myChart.destroy(); // Clean up chart on unmount
    };
  }, []);

  return (
    <div className="graph-container">
      <canvas ref={chartRef}></canvas>
    </div>
  );
};

export default BarGraph;
