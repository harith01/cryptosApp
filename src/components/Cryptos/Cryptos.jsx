import { useState, useEffect } from "react";
import axios from "axios";
import CryptoCard from "./CryptoCard";
import "./cryptos.css";
import { useGetCryptosQuery } from "../../services/cryptoApi";


const Cryptos = ({ simplified }) => {
  const limit = simplified ? 10: 50;
  const { data, isLoading } = useGetCryptosQuery(limit);
  const [coins, setCoins] = useState()

  useEffect(() => (
    setCoins(data?.data?.coins)
  ))

  if (isLoading) return "Loading..."
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