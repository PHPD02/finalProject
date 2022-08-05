












import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: false,
    },
  },
};

const labels = ['2021/08', '2021/09', '2021/10', '2021/11', '2021/12', '2022/01', '2022/02', '2022/03', '2022/04', '2022/05', '2022/06', '2022/07'];

export const data = {
  labels,
  datasets: [
    {
      label: '月營業額',
      data: [601105, 624021, 649023, 615916, 542726, 480140, 552237, 566024, 582216, 571130, 605802, 672105],
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },

  ],
};

export function Linechart() {
  return <Line options={options} data={data} />;
}
