import React, { useState, useEffect } from 'react'
import NewsItem from './NewsItem'
import PropTypes from 'prop-types'
import Spinner from './Spinner'

function News(props) {

    const [articles, setArticles] = useState([])
    const [page, setPage] = useState(1)
    const [loading, setLoading] = useState(true)
    const [totalResults, setTotalResults] = useState(0)

    const updateNews = async () => {
        props.setLoadingProgress(10);
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
        setLoading(true)
        let data = await fetch(url);
        props.setLoadingProgress(40);
        let parsedData = await data.json()
        props.setLoadingProgress(80);
        setArticles(parsedData.articles)
        setTotalResults(parsedData.totalResults)
        setLoading(false)
        props.setLoadingProgress(100);
    }

    useEffect(() => {
        document.title = `${props.category.charAt(0).toUpperCase() + props.category.slice(1)} - News Webby`;
        updateNews();
    }, [])
    return (
        <>
            <h1 className="text-center" style={{ margin: '35px 0px', marginTop: '90px' }}>News Webby - Top {props.category.charAt(0).toUpperCase() + props.category.slice(1)} Headlines</h1>
            {loading && <Spinner/>}
            <div className="container">

                <div className="row">
                    {articles.map((element) => {
                        return <div className="col-md-4" key={element.url}>
                            <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description : ""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                        </div>
                    })}
                </div>

            </div>
        </>
    )
}

export default News

News.defaultProps = {
    country: 'us',
    pageSize: 6,
    category: 'general',
}

News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
}