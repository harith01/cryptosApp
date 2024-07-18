import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import "./coinDetails.css";
import millify from "millify";
import LineChart from "./LineChart";
import { useGetCoinHistoryQuery, useGetCoinQuery } from "../../services/cryptoApi";


const CoinDetails = () => {
    const { uuid }  = useParams()
    const [coin, setCoin] = useState()
    const [coinHistory, setCoinHistory] = useState([])
    const { data, isLoading } = useGetCoinQuery(uuid);
    const { data: coinHistoryData, isLoadingHistory } = useGetCoinHistoryQuery(uuid);

    useEffect(() => (
      setCoin(data?.data?.coin)
    ))

    if (isLoading || isLoadingHistory) return 'Loading...'


    const stats = [
      { title: 'Price to USD', value: `$ ${coin?.price && millify(coin?.price)}` },
      { title: 'Rank', value: coin?.rank},
      { title: '24h Volume', value: `$ ${coin?.volume && millify(coin?.volume)}`},
      { title: 'Market Cap', value: `$ ${coin?.marketCap && millify(coin?.marketCap)}`},
      { title: 'All-time-high(daily avg.)', value: `$ ${coin?.allTimeHigh?.price && millify(coin?.allTimeHigh?.price)}`},
    ];
  
    const genericStats = [
      { title: 'Number Of Markets', value: coin?.numberOfMarkets },
      { title: 'Number Of Exchanges', value: coin?.numberOfExchanges },
      { title: 'Aprroved Supply', value: coin?.supply?.confirmed ? 'Confirmed' : 'Not confirmed' },
      { title: 'Total Supply', value: `$ ${coin?.supply?.total && millify(coin?.supply?.total)}` },
      { title: 'Circulating Supply', value: `$ ${coin?.supply?.circulating && millify(coin?.supply?.circulating)}` },
    ];

    return ( 
        <div className="coin-details">
            <section className="coin-hero">
                <div className="coin-title">
                    <img src={coin?.iconUrl} alt={`${coin?.name} title`} className="coin-icon" />
                    <h1>{coin?.name} - ({coin?.symbol}) </h1>
                </div>
                <div className="coin-desc">
                  <p>{coin?.description}</p>
                </div>
            </section>
            <section>
              <LineChart coinHistory={coinHistoryData}/>
            </section>
            <section className="coin-stats">
              <div>
                <div className="coin-stats-title">
                  <h2>{coin?.name} Value Statistics</h2>
                  <p>An Overview Showing the Stats of {coin?.name}</p>
                </div>
                <table>
                  {stats?.map((stat, i) => (
                    <tr key={i}>
                      <td>{stat.title}</td>
                      <td>{stat.value}</td>
                    </tr>
                  ))}
                </table>
              </div>
              <div>
                <div className="coin-stats-title">
                  <h2>Other's Statistics</h2>
                  <p>An Overview Showing the Stats of all Cryptos</p>
                </div>
                <table>
                  {genericStats?.map((stat, i) => (
                    <tr key={i}>
                      <td>{stat.title}</td>
                      <td>{stat.value}</td>
                    </tr>
                  ))}
                </table>
              </div>
            </section>
        </div>
     );
}
 
export default CoinDetails;