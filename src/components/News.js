import React from 'react'
import Newsitems from './Newsitems'
import { useState, useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component'
import loading from '../images/loading.gif'


function News(props) {
    
    // useState function in react
    const [Loading, setLoading] = useState(false)
    const [totalResults, setTotalResults] = useState(0)
    const [items, setItems] = useState([]);
    const [page, setPage] = useState(1)
    const [category, setCategory] = useState(props.category)
    
    // capitalize category function in title 
        function capitalizeFirstLetter(string) {
            return string.charAt(0).toUpperCase() + string.slice(1);
          }
    
    // fetching news data from https://www.newsapi.org
    async function fechingNews() {
        // change site title
        document.title = `newsPanther - ${capitalizeFirstLetter(props.category)}`
        // set headilng with category
        setCategory(props.category)
        // setting value of top loading bar
        props.set(10)
        // fetching data on server
        const fechingResponse = await fetch(`https://newsapi.org/v2/top-headlines?category=${props.category}&country=in&apiKey=your_API_key&pagesize=${props.pagesize}&page=${page}`);
        // setting value of top loading bar
        props.set(40)
        // request for json file
        const responce = await fechingResponse.json();
        // setting value of top loading bar
        props.set(75)
        // all news items are fetched
        setItems(responce.articles)
        setTotalResults(responce.totalResults)
        // setting value of top loading bar
        props.set(100)
    }

    useEffect(() => {
        fechingNews()
    }, []) // eslint-disable-line react-hooks/exhaustive-deps

    // .map function (all items are storing one by one)
    const articles = items.map((item,index) => {
        // sending value in Newsitems component 
        return (<Newsitems 
            title={item.title}
            url={item.url}
            index = {index}
            publishedAt={item.publishedAt}
            urlToImage={item.urlToImage}
            desc={item.description}
            source={item.source.name}
        />)
    })

    // here is fectching data on infinite scroll at time
    async function fetchMoreData() {
        // set next page
        setPage(page + 1)
        // set loading spinner value id true
        setLoading(true)
        // fetching more data from news server
        const fechingResponse = await fetch(`https://newsapi.org/v2/top-headlines?category=${props.category}&country=in&apiKey=your_API_key&pagesize=${props.pagesize}&page=${page + 1}`);
        const responce = await fechingResponse.json();
        setItems(items.concat(responce.articles))
        setTotalResults(responce.totalResults)
        setLoading(false)
    }


    return (
        <div className='container'>
            <div className='mt-5 mb-4 pt-3 text-center'>
                <h1 className='font-weight-bold'>Top results in {category} category</h1>
            </div>
            <div className='row gy-4'>
                {/* news showing one by one */}
                {articles}
                {/* scrolling */}
                <InfiniteScroll
                    dataLength={articles.length} //This is important field to render the next data
                    next={fetchMoreData}
                    hasMore={articles.length !== totalResults}
                    loader={
                        <div className='text-center'>
                            <img src={Loading === true && loading} alt="loading" />
                        </div>
                    }
                />
            </div>
        </div>
    )
}

export default News

