import { useState, useEffect } from "react";
import axios from "axios";
import CryptoCard from "./CryptoCard";
import "./cryptos.css";


const Cryptos = ({ simplified }) => {
  const limit = simplified ? 10: 50;
  const [coins, setCoins] = useState(null)
  const options = {
    method: 'GET',
    url: 'https://coinranking1.p.rapidapi.com/coins',
    params: {
      referenceCurrencyUuid: 'yhjMzLPhuIDl',
      timePeriod: '24h',
      tiers: '1',
      orderBy: 'marketCap',
      orderDirection: 'desc',
      limit: limit,
      offset: '0'
    },
    headers: {
      'x-rapidapi-key': process.env.REACT_APP_API_KEY,
      'x-rapidapi-host': 'coinranking1.p.rapidapi.com'
    }
  };
  
  useEffect(() => {
    const fetchCoins = async () => {
      try {
        const response = await axios.request(options);
        // console.log(response.data.data.coins);
        setCoins(response.data.data.coins);
      } catch (error) {
        console.error(error);
      }
    }
    fetchCoins()
  }, [])
  return ( 
        <>
             <h1>Cryptos</h1>
             <div className="cards-container">
             {coins?.map((coin, i) => (
              <CryptoCard coin={coin} key={i} />
             ))}
             </div>            
        </>  
  );
}
 
export default Cryptos;