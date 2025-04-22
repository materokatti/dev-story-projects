'use client';

import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import { DATASETS } from '../data/datasets';
import { RegressionParameters } from './types';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface Props {
  currentDataset: keyof typeof DATASETS;
  parameters: RegressionParameters;
}

export default function LinearRegressionChart({ currentDataset, parameters }: Props) {
  const { w, b } = parameters;

  const calculateLine = (x: number) => w * x + b;

  const chartData = {
    labels: DATASETS[currentDataset].points.map(point => point[0].toString()),
    datasets: [
      {
        label: 'Data Points',
        data: DATASETS[currentDataset].points.map(point => point[1]),
        backgroundColor: 'rgb(99, 102, 241)',
        pointStyle: 'circle',
        pointRadius: 8,
        showLine: false
      },
      {
        label: 'Regression Line',
        data: DATASETS[currentDataset].points.map(point => calculateLine(point[0])),
        borderColor: 'rgb(236, 72, 153)',
        borderWidth: 3,
        fill: false,
        tension: 0
      }
    ]
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    interaction: {
      mode: 'index' as const,
      intersect: false,
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          font: {
            size: 14
          },
          color: 'rgb(209, 213, 219)',
          backdropColor: 'rgba(0, 0, 0, 0.8)'
        },
        grid: {
          color: 'rgba(75, 85, 99, 0.5)',
          drawBorder: true,
          borderColor: 'rgba(75, 85, 99, 0.8)'
        }
      },
      x: {
        ticks: {
          font: {
            size: 14
          },
          color: 'rgb(209, 213, 219)',
          backdropColor: 'rgba(0, 0, 0, 0.8)'
        },
        grid: {
          color: 'rgba(75, 85, 99, 0.5)',
          drawBorder: true,
          borderColor: 'rgba(75, 85, 99, 0.8)'
        }
      }
    },
    plugins: {
      legend: {
        position: 'top' as const,
        labels: {
          font: {
            size: 14
          },
          color: 'rgb(209, 213, 219)'
        }
      },
      tooltip: {
        backgroundColor: 'rgba(31, 41, 55, 0.8)',
        titleColor: 'rgb(209, 213, 219)',
        bodyColor: 'rgb(209, 213, 219)',
        borderColor: 'rgba(75, 85, 99, 0.3)',
        borderWidth: 1,
        padding: 10,
        displayColors: true,
        boxPadding: 4,
      }
    }
  };

  return (
    <div className="mb-8 h-[400px] w-full max-w-4xl mx-auto">
      <Line data={chartData} options={options} />
    </div>
  );
} 