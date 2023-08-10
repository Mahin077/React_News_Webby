import React, { useState, useEffect } from 'react'
import NewsItem from './NewsItem'
function News(props) {
    const [articles, setArticles] = useState([])
    const [page,setPage] = useState(1)
    const updateNews = async ()=>{
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=d093053d72bc40248998159804e0e67d&page=${page}&pageSize=${props.pageSize}`;
        let data = await fetch(url);
        let parsedData = await data.json();
        setArticles(parsedData.articles);
        console.log(articles)
    }

    useEffect(()=>{
        updateNews();
    },[])
    return (
        <div className="container">
            this is news
            <div className="row">
                {articles.map((element) => {
                    return <div className="col-md-4" key={element.url}>
                        <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description : ""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                    </div>
                })}
            </div>

        </div>
    )
}

export default News
