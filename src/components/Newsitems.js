import React from 'react'
function Newsitems(props) {

    const date = new Date(`${props.publishedAt}`)
    // convert date formate in IST(Indian Standred Time)
    let dateIs = date.toUTCString()
    return (
            <div className='col-md-4' key={props.index}>
                    <div className="card position-relative">
                <span className="rounded bg-danger position-absolute px-3 py-1 top-0 end-0"><a className='text-decoration-none text-white' href={props.url} target="_blank">{props.source}</a></span>
                        <img src={props.urlToImage} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{props.title}</h5>
                            <p className="card-text">{props.desc}</p>
                            <p className="font-weight-bold">{dateIs}</p>
                            <a href={props.url} rel="noreferrer" className="btn btn-primary">Read more</a>
                        </div>
                    </div>
                </div>
    )
}

export default Newsitems
