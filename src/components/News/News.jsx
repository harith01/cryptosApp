import { useGetNewsQuery } from "../../services/cryptoNewsApi";
import NewsCard from "./NewsCard";
import './news.css'

const News = () => {
    const { data: news, isLoading} = useGetNewsQuery('/cointelegraph');
    console.log(news)
    if (isLoading) return 'Loading...';
    return ( 
        <>
             <h1>News Page</h1>
             <div className="news-container">
             {news?.data.map((ne, i) => (
              <NewsCard news={ne} key={i} />
             ))}
             </div>
        </>
     );
}
 
export default News;