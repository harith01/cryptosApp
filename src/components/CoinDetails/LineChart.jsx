import { Line } from "react-chartjs-2";


import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    PointElement,
    LineElement,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
);


const LineChart = ({ coinHistory }) => {
    const price = [];
    const timestamp = [];
    console.log(coinHistory)
    for (let i = 0; i < coinHistory?.data?.history?.length; i++) {
        price.push(coinHistory?.data?.history[i]?.price)
        timestamp.push(new Date(coinHistory?.data?.history[i].timestamp).toLocaleDateString())
    }

    const chart_data = {
        labels: timestamp,
        datasets: [
            {
                label: 'Price In USD',
                data: price,
                fill: false,
                backgroundColor: '#0071bd',
                borderColor: '#0071bd',
            },
        ],
    }

    const chart_options = {
        scales: {
          y: {
            display:true,
            beginAtzero: false,
          },
          x: {
            display: false,
            beginAtzero: true
          }
        },
    };

    return ( 
        <>
            <h1 className="chart-title">Coin History Chart</h1>
            <Line data={chart_data} options={chart_options}/>
        </>
    );
}
 
export default LineChart;