import "./newsCard.css";

const NewsCard = ({ news }) => {
    return ( 
        <div className="news-card">
            <a href={news.url}>
                <img src={news.thumbnail} alt="" width={300} />
                <h3>{news.title}</h3>
                <p>{news.createdAt}</p>
            </a>
        </div>
    );
}
 
export default NewsCard;