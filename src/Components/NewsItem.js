import React from 'react'

function NewsItem(props) {
    return (
        <div className="my-3">
            <div className="card" >
                <div style={{display:'flex', justifyContent: 'flex-end',position:'absolute',right:'0'}}>
                    <span className="badge rounded-pill bg-danger">{props.source}</span>
                </div>
                <img src={props.imageUrl?props.imageUrl:"https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg?20200913095930"} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.desc}</p>
                    <p className="card-text"><small className="text-muted">By {props.author?props.author:"unknown author"} on {new Date(props.date).toGMTString()}</small></p>
                    <a href={props.newsUrl} target="_blank" className="btn btn-primary">Read More</a>
                </div>
            </div>
        </div>
    )
}

export default NewsItem
