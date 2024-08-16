import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Survey = () => {
  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
        max: 60,
        ticks: {
          callback: function(value) {
            return value + '%';
          }
        }
      }
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: function(context) {
            return context.parsed.y + '%';
          }
        }
      }
    },
    onHover: (event, chartElement) => {
      event.native.target.style.cursor = chartElement[0] ? 'pointer' : 'default';
    }
  };

  const createChartData = (labels, data) => ({
    labels,
    datasets: [
      {
        data,
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        hoverBackgroundColor: '#f79e1b',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  });

  const outsideWorkData = createChartData(
    ['Once a week or more often', 'Sometimes', 'Never'],
    [29, 56, 15]
  );

  const atWorkData = createChartData(
    ['Once a week or more often', 'Sometimes', 'Never'],
    [17, 40, 43]
  );

  return (
    <section className="survey" id="data">
      <h2>What about AI use by bank employees?</h2>
      <p className="survey-subtitle">We conducted a survey among 101 Halyk Bank employees.</p>
      <div className="charts-container">
        <div className="chart-wrapper">
          <Bar options={chartOptions} data={outsideWorkData} />
          <p>Frequency of AI chatbot use outside of work</p>
        </div>
        <div className="chart-wrapper">
          <Bar options={chartOptions} data={atWorkData} />
          <p>Frequency of AI chatbot use at work</p>
        </div>
      </div>
    </section>
  );
};

export default Survey;