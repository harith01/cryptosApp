import CryptoCard from "./CryptoCard";
import "./cryptos.css";
import { useGetCryptosQuery } from "../../services/cryptoApi";
import { useState, useEffect } from 'react';


const Cryptos = ({ simplified }) => {
  const { data, isLoading } = useGetCryptosQuery();
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState('')
  const limit = simplified ? 10: 50;
  
  console.log(data?.data?.coins)

  useEffect(() => {
    const filteredCoins = data?.data?.coins.filter((coin) => coin.name.toLowerCase().includes(search.toLowerCase()));
    setCoins(filteredCoins);
  }, [data, search])
  
  if (isLoading) return 'Loading...';
  return ( 
        <>
             
             {!simplified && 
              <div className="crypto-header">
                <h3>The 50 highest ranking Cryptocurrencies</h3>
                <input type="text" placeholder="Search Crypto ..." value={search} onChange={(e) => setSearch(e.target.value)}/>
              </div>
             }
             
             
             <div className="cards-container">
             {coins?.map((coin, i) => {
              if (i >= limit) return
              return <CryptoCard coin={coin} key={i} />
             })}
             </div>            
        </>  
  );
}
 
export default Cryptos;