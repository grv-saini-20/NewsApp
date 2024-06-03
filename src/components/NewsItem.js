import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {
        let { title, description, imageUrl, newsUrl,author, date, source } = this.props
        return (
            <div className="my-3">
                <div className="card">
                <div className='d-flex justify-content-end position-absolute end-0'>
                <span className="badge bg-danger">{source}</span>
                </div>
                    <img src={!imageUrl?"https://www.livemint.com/lm-img/img/2023/03/31/600x338/Global_market_news_1680227735502_1680227735686_1680227735686.jpg":imageUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}...</h5>
                        <p className="card-text">{description}...</p>
                        <p className="card-text"><small className="text-muted">By {!author?"Unknown":author} On {new Date(date).toGMTString()}</small></p>
                        <a rel="noreferrer"  href={newsUrl} target='_blank' className="btn btn-sm btn-dark">Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem