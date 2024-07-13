import "./cryptoCard.css";
import millify from "millify";
import { Link } from "react-router-dom";

const CryptoCard = ({ coin }) => {
    return (
            <div className="card">
                <Link to={`/coin/${coin.uuid}`}>
                    <div className="card-header">
                        <img src={coin.iconUrl} alt="BTC" width={25} height={25}/>
                        <span className="symbol">{coin.symbol}</span>
                    </div>
                    <hr />
                    <div className="card-details">
                        <h3>{coin.name}</h3>
                        <p className="rank">Rank: {millify(coin.rank)}</p>
                        <p>Price: ${millify(coin.price)}</p>
                        <p>Market Cap: ${millify(coin.marketCap)}</p>
                    </div>
                </Link>
            </div>
    );
}
 
export default CryptoCard;