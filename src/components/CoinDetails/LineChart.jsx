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
    


    

    console.log(coinHistory?.data?.history[0].price)
    const price = [];
    const timestamp = [];

   
    for (let i = 0; i < coinHistory?.data?.history?.length; i++) {
        price.push(coinHistory?.data?.history[i]?.price)
        timestamp.push(new Date(coinHistory?.data?.history[i].timestamp).toLocaleDateString())
    }

    console.log(timestamp)

    const data = {
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
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
    };

    return ( 
        <>
            <h1>Coin History</h1>
            <Line data={data} options={chart_options}/>
        </>
    );
}
 
export default LineChart;