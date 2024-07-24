import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import "./coinDetails.css";
import millify from "millify";
import LineChart from "./LineChart";
import { useGetCoinHistoryQuery, useGetCoinQuery } from "../../services/cryptoApi";


const CoinDetails = () => {
    const { uuid }  = useParams();
    const [coin, setCoin] = useState();
    const [timePeriod, setTimePeriod] = useState('24h');
    const { data, isLoading } = useGetCoinQuery(uuid);
    const { data: coinHistoryData, isLoadingHistory } = useGetCoinHistoryQuery({ uuid, timePeriod });

    useEffect(() => (
      setCoin(data?.data?.coin)
    ))

    if (isLoading || isLoadingHistory) return 'Loading...'

    const handleChange = (e) => setTimePeriod(e.target.value);
    console.log(coinHistoryData)
    const stats = [
      { title: 'Price to USD', value: `$ ${coin?.price && millify(coin?.price)}` },
      { title: 'Rank', value: coin?.rank},
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
            <section className="chart-section">
            <select value={timePeriod} onChange={handleChange}>
                    <option value="3h">3 hours</option>
                    <option value="24h">24 hours</option>
                    <option value="7d">7 days</option>
                    <option value="30d">30 days</option>
                    <option value="3m">3 months</option>
                    <option value="1y">1 year</option>
                    <option value="3y">3 years</option>
                    <option value="5y">5 years</option>
                </select>
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