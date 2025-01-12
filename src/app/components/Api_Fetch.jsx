"use client"
import Error from 'next/error';
import React, { useEffect, useState } from 'react'
import NewsCard from './NewsCard';

function Api_Fetch() {

    const [news, setNews] = useState([]); // State to store news data
    const [visible_news, setvisible_news] = useState(5); // State to load more news when the button is clicked

    useEffect(() => {
        const fetching = async () => {
            try {
                const Api_key = process.env.NEXT_PUBLIC_API_KEY 
                const res = await fetch(`https://newsapi.org/v2/everything?q=apple&from=2025-01-10&to=2025-01-10&sortBy=popularity&apiKey=${Api_key}`);
                if (!res.ok) {
                    console.log("Not fetched the data");
                }
                const data = await res.json()
                // console.log(data);
                console.log(data.articles);
                const Non_Filtered_News = data.articles;
                console.log(Non_Filtered_News)

                const filteredNews = Non_Filtered_News.filter((item) =>{
                     return item.title !== "[Removed]"
                    }); 
                console.log(filteredNews);
                setNews(filteredNews);
            } catch (error) {
                throw new Error ("Failed to fetch the data")
            }   
        }
        fetching();  
    }, []);
    function Load_More() {
        setvisible_news(visible_news + 5)
    }

  return (
    <div>{
        news.slice(0 , visible_news).map((Element , Index)=>{
                return <NewsCard key={Index} author={Element.author} source={Element.source.name} title={Element.title} desc={Element.description} content={Element.content} pub={Element.publishedAt} url={Element.url} Image={Element.urlToImage} />
        })
        }
        {
            <div className='flex items-center justify-center pt-6'>
                <button
                   onClick={Load_More}
                   className="px-8 py-1 bg-white text-black rounded hover:shadow-[0_1px_15px_rgba(0,0,0,0.6)] shadow-md transition-all text-sm"
                 >
                   Load More
                 </button>
            </div>
        }



</div>
  )
}


export default Api_Fetch
