// PieChart.js
/* import { useState, useEffect } from 'react'; */
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import styles from './piechart.module.scss';

ChartJS.register(ArcElement, Tooltip, Legend);

// eslint-disable-next-line react/prop-types
const PieChart = ({ languages }) => {
    console.log(languages)
    const data = {
        labels: Object.keys(languages),
        datasets: [
            {
                label: '# of Votes',
                data: Object.values(languages),
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                ],
                borderWidth: 1,
            },
        ],
    };
    
   const options={
        maintainAspectRatio: false,
        responsive: true,
        title: {text: 'Languages', fontSize: 20, display: true},
        legend: {
            labels: {
                fontSize: 10,
            }
        },
        layout: {
            padding: 20
        },
        scales: {
            yAxes: [
                {
                ticks: {
            autoSkip: true,
            maxTicksLimit: 10,
            beginAtZero: true,
        },
        gridLines: {
            display: false
        }
        }],
        xAxes: [
            {
            gridLines: {
                display: false
            }
            }
        ]
        }
    }

  return (
    <div className={styles.chart}>
      <Pie data={data} options={options} />
    </div>
  );
};

export default PieChart;
