import React from 'react'
// import articles from './api'
import Newsitems from './Newsitems'
import { useState, useEffect } from 'react';
// console.log(articles)


function Newss(props) {
    // console.log(props.category)
    // let page = 1;
    const [page, setPage] = useState(1)
    const [total, setTotal] = useState()
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    // Note: the empty deps array [] means
    // this useEffect will run once
    // similar to componentDidMount()
    useEffect(() => {
        fetch(`https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=491335e4b70746408a9da689c10181ea`)
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setItems(result.articles);
                    setTotal(result.totalResults);
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [])

    console.log(items)

    function fetchNews(){
        fetch(`https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=491335e4b70746408a9da689c10181ea`)
        .then(res => res.json())
        .then(
            (result) => {
                setIsLoaded(true);
                setItems(result.articles);
            },
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            (error) => {
                setIsLoaded(true);
                setError(error);
            }
        )
    }

    function handleNext(){
            setPage(page + 1)
            fetchNews();
    }

    function handlePrivious(){
        setPage(page - 1)
        fetchNews();

    }

    const articles = items.map(item => {
        return (
                <Newsitems
                    img={item.urlToImage}
                    url={item.url}
                    desc={item.description}
                    title={item.title}
                />
            )
        }
    )

    return (
        <div className='container'>
            <div className='row gy-4'>
                {articles}
            </div>
            <div className='d-flex justify-content-between my-4'>
            <button type="button" disabled={page<=1} onClick={handlePrivious} class="btn btn-dark">&#8592; Privious</button>
            <button type="button" disabled={page + 1 > Math.ceil(total/9)}  onClick={handleNext} class="btn btn-dark">Next &#8594;</button>
            </div>
        </div>
    )
}

export default Newss


































// import React from 'react'
// // import articles from './api'
// import Newsitems from './Newsitems'
// import { useState, useEffect } from 'react';
// import InfiniteScroll from 'react-infinite-scroll-component'
// // console.log(articles)
// import loading from '../images/loading.gif'
// import Navbar from './Navbar';


// function News(props) {
//     const [items, setItems] = useState([]);
    
//     async function fechingNews(){
//         props.set(10)
//         const fechingResponse = await fetch(`https://newsapi.org/v2/top-headlines?sources?category=${props.category}&country=us&apiKey=491335e4b70746408a9da689c10181ea&pagesize=${props.pagesize}`);
//         props.set(40)
//         const responce = await fechingResponse.json();
//         props.set(75)
//         setItems(responce.articles)
//         props.set(100)
//     }
    
//     useEffect(() =>{
//         fechingNews()
//     },[])
    
//     const articles = items.map(item =>  {
//         return(<Newsitems title = {item.title}
//             url={item.url}
//             urlToImage = {item.urlToImage}
//             desc = {item.description}
//             />)
//     })
//     return (
//         <div className='container'>
//             <div className='row gy-4'>
//                 {articles}
//             </div>
//         </div>
//     )
// }

// export default News

