import { useGetNewsQuery } from "../../services/cryptoNewsApi";
import NewsCard from "./NewsCard";
import './news.css';
import { useState, useEffect } from "react";

const News = ({ simplified }) => {
    const count = simplified ? 10: 50;
    const [newsPaper, setNewsPaper] = useState()
//     const [newsList, setNewsList] = useState()

    const { data: news, isLoading} = useGetNewsQuery(newsPaper || '/cointelegraph');
    
    console.log(news);
    if (isLoading) return 'Loading...';

    const handleChange = (e) => {
     setNewsPaper(e.target.value)
    }

    return ( 
        <>
             { count !== 10 &&
             (<><h1 className="page-title">Welcome to Our News Page</h1>
             <div className="select-section">
                <p>Select Newspaper:</p>
                <select value={newsPaper} onChange={handleChange}>
                    <option value="/cointelegraph">Coin Telegraph</option>
                    <option value="/coindesk">Coin Desk</option>
                    <option value="/bitcoinist">BitcoinIst</option>
                    <option value="/theguardian">The Guardian</option>
                </select>
             </div></>)
             }
             <div className="news-container">
             {news?.data.map((ne, i) => {
               if (i >= count) return 
               return <NewsCard news={ne} key={i} />
             })}
             </div>
        </>
     );
}
 
export default News;