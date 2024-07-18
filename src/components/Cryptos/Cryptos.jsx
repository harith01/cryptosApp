import CryptoCard from "./CryptoCard";
import "./cryptos.css";
import { useGetCryptosQuery } from "../../services/cryptoApi";
import { useState, useEffect } from 'react';


const Cryptos = ({ simplified }) => {
  const { data, isLoading } = useGetCryptosQuery();
  const [coins, setCoins] = useState(data?.data?.coins);
  const [search, setSearch] = useState()
  const limit = simplified ? 10: 50;
  

  useEffect(() => {
    const filteredCoins = data?.data?.coins.filter((coin) => coin?.name.toLowerCase().includes(search.toLowerCase()));
    setCoins(filteredCoins);
  }, [coins, search])
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