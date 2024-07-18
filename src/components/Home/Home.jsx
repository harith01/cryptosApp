import Cryptos from "../Cryptos/Cryptos";
import News from "../News/News";
import { useGetCryptosQuery } from "../../services/cryptoApi";
import { useState, useEffect } from "react";
import millify from "millify";
import './home.css';
import { Link } from "react-router-dom";

const Home = () => {
    const { data, isLoading } = useGetCryptosQuery();
    const stats = data?.data?.stats;
    if (isLoading) return 'Loading...';
    console.log(stats);
    return ( 
        <>
            <div className="global-stats">
                <h2>Global Cryptocurrency Stats</h2>
                <div className="stats">
                    <p>Total Cryptocurrencies: {millify(stats.total)}</p>
                    <p>Total 24h Volume: ${millify(stats.total24hVolume)}</p>
                    <p>Total coins: {millify(stats.totalCoins)}</p>
                    <p>Total Exchanges: {millify(stats.totalExchanges)}</p>
                    <p>Total Market Cap:  ${millify(stats.totalMarketCap)}</p>
                    <p>Totla Markets: {millify(stats.totalMarkets)}</p>
                </div>
            </div>
            <div className="cryptos">
                <p>Here are the top 10 Cryptocurrencies. <Link to='/cryptos'>See more</Link></p>
                <Cryptos simplified coins={data?.data?.coins} />
            </div>
            <h2>Here are the Top 10 news</h2>
            <News simplified />
        </>
     );
}
 
export default Home;