import Cryptos from "../Cryptos/Cryptos";
import News from "../News/News";

const Home = () => {
    return ( 
        <>
            <h1>Homepage</h1>
            <Cryptos simplified />
            <h2>Here are the Top 10 news</h2>
            <News simplified />
        </>
     );
}
 
export default Home;