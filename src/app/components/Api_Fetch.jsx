"use client"
import Error from 'next/error';
import React, { useEffect, useState } from 'react'
import NewsCard from './NewsCard';

function Api_Fetch() {

    const [news, setNews] = useState([]); // State to store news data

    useEffect(() => {
        const fetching = async () => {
            try {
                const Api_key = process.env.NEXT_PUBLIC_API_KEY 
                const res = await fetch(`https://newsapi.org/v2/everything?q=tesla&from=2024-12-10&sortBy=publishedAt&apiKey=${Api_key}`);
                if (!res.ok) {
                    console.log("Not fetched the data");
                }
                const data = await res.json()
                // console.log(data);
                // console.log(data.articles);
                setNews(data.articles);
            } catch (error) {
                throw new Error ("Failed to fetch the data")
            }   
        }
        fetching();  
    }, []);

  return (
    <div>{
        news.map((Element , Index)=>{
                return <NewsCard key={Index} author={Element.author} source={Element.source.name} title={Element.title} desc={Element.description} content={Element.content} pub={Element.publishedAt} url={Element.url} Image={Element.urlToImage} />
        })
}</div>
  )
}

export default Api_Fetch
