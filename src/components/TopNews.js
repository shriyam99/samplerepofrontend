import React from 'react';
import '../styles/TopNews.css';
import Loader from 'react-loader-spinner';

const TopNews = (props)=>{
    if(props.loading){
        return (
            <div className="loader">
                <Loader
                    type="Grid"
                    color="#6e01b6"
                    height={50}
                    width={50}
                />
                <p>Loading Top News</p>
            </div>
        );
    }
    return (
        <div className="news-headlines">
            <h1>Top News</h1>
            <div className="allnews">
            {
                props.data.map((news)=>{
                    return <div className="news" key={news.text}><a href={news.link}>{news.text}</a></div>
                })
            }
            </div>
        </div>
    );
}

export default TopNews;