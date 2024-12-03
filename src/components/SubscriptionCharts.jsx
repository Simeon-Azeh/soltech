import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Register the necessary components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const SubscriptionCharts = () => {
  const data = {
    labels: ['Internet', 'Gaming', 'Workspace'],
    datasets: [
      {
        label: 'Active Subscriptions',
        data: [10, 20, 15],
        backgroundColor: ['#4caf50', '#2196f3', '#ff9800'],
      },
    ],
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h2 className="mb-4 text-lg font-bold">Subscription Overview</h2>
      <Bar data={data} />
    </div>
  );
};

export default SubscriptionCharts;