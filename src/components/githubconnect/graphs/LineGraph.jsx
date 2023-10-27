/* eslint-disable react/prop-types */
import  { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const LineGraph = ({ commits }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    
    if (commits && commits.length > 0) {
      const commitDates = commits.map((commit) => new Date(commit.committer.date));
      const commitCounts = Array.from({ length: commitDates.length }, (_, i) => i + 1);

      const ctx = chartRef.current.getContext('2d');

      new Chart(ctx, {
        type: 'line',
        data: {
          labels: commitDates,
          datasets: [
            {
              label: 'Commit Count',
              data: commitCounts,
              borderColor: 'rgba(75, 192, 192, 1)',
              borderWidth: 2,
              fill: false,
            },
          ],
        },
        options: {
          scales: {
            x: {
              type: 'time',
              time: {
                unit: 'day',
              },
              title: {
                display: true,
                text: 'Commit Dates',
              },
            },
            y: {
              title: {
                display: true,
                text: 'Commit Count',
              },
            },
          },
        },
      });
    }
  }, [commits]);

  return <canvas ref={chartRef} />;
};

export default LineGraph;
