import React, { useState, useEffect } from 'react'
import NewsItem from './NewsItem'
import PropTypes from 'prop-types'
import Spinner from './Spinner'
import InfiniteScroll from "react-infinite-scroll-component";
import BackToTop from "react-back-to-top-button";
import scrollImage from './back-to-top-icon-png-8.jpg'
function News(props) {

    const [articles, setArticles] = useState([])  //to load the articles
    const [page, setPage] = useState(1)    //page number
    const [loading, setLoading] = useState(true)   //to load the Spinner class
    const [totalResults, setTotalResults] = useState(0)  //to know how much articles are there in the api

    const updateNews = async () => {       //func for fetching the news from the api
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
    }, [props.country])

    const fetchMoreData = async () => {       //to fetch more data while scrolling down
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page + 1}&pageSize=${props.pageSize}`;
        setPage(page + 1)
        let data = await fetch(url);
        let parsedData = await data.json()
        setArticles(articles.concat(parsedData.articles))
        setTotalResults(parsedData.totalResults)
    };

    return (
        <>
            <h1 className={`text-center text-${props.mode==='light'?'black':'white'}`} style={{ margin: '35px 0px', marginTop: '90px' }}>News Webby - Top {props.category.charAt(0).toUpperCase() + props.category.slice(1)} Headlines</h1>
            {loading && <Spinner />}
            
            <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length !== totalResults}
                loader={<Spinner />}
            >
                <div className="container">

                    <div className="row">
                        {articles.map((element) => {
                            return <div className="col-md-4 my-4" key={element.url}>
                                <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description : "Click on read more to see the full news"} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} mode={props.mode} />
                            </div>
                        })}

                    </div>
                    <BackToTop
                        showOnScrollUp
                        showAt={100}
                        speed={1500}
                        easing="easeInOutQuint"
                    >
                        <img src={scrollImage} height={120} width={110}/>
                    </BackToTop>
                </div>
            </InfiniteScroll>

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