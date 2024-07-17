import "./newsCard.css";

const NewsCard = ({ news }) => {
    return ( 
        <div className="news-card">
            <a href={news?.url}>
                <img src={news?.thumbnail} alt="" className="news-img" />
                <h3 className="img-title">{news?.title}</h3>
                <p>{news?.createdAt.slice(0, 16)}</p>
            </a>
        </div>
    );
}
 
export default NewsCard;