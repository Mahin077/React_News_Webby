import React from 'react'

function NewsItem(props) {
    const noImage = "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg?20200913095930"
    return (

        <div className={`card h-100 text-${props.mode==='light'?'black':'white'}`} style={props.mode === 'light' ? { backgroundColor: 'white' } : { backgroundColor: 'rgb(47, 47, 47)' }}>
            <div style={{ display: 'flex', justifyContent: 'flex-end', position: 'absolute', right: '0' }}>
                <span className="badge rounded-pill bg-danger">{props.source}</span>
            </div>
            <img src={props.imageUrl ? props.imageUrl : noImage} className="card-img-top" alt="..." style={{ height: '250px' }} />
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.description.slice(0, 100) + "..."}</p>
                <p className="card-text"><small>By <span className="text-danger">{props.author ? props.author : "unknown author"}</span>, published on {new Date(props.date).toGMTString()}</small></p>
            </div>
            <div className="mt-auto mx-2 my-2">
                <a href={props.newsUrl} target="_blank" className="btn btn-link">Read More</a>
            </div>
        </div>


    )
}

export default NewsItem
