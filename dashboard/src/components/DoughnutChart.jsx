import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

// Accept `data` as a prop from the caller
export default function DoughnutChart({ data }) {
  return <Doughnut data={data} />;
}
