import { useGetNewsQuery } from "../../services/cryptoNewsApi";
import NewsCard from "./NewsCard";

const News = () => {
    const { data: news, isLoading} = useGetNewsQuery('/cointelegraph');
    console.log(news)
    return ( 
        <>
             <h1>News Page</h1>
             <NewsCard news={news?.data[0]} />
        </>
     );
}
 
export default News;