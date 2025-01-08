"use client"
import React, { useEffect } from 'react'

function Api_Fetch() {

    useEffect(() => {
        const fetching = async () => {
            try {
                const Api_key = process.env.NEXT_PUBLIC_API_KEY 
                const res = await fetch(`https://newsapi.org/v2/everything?q=tesla&from=2024-12-08&sortBy=publishedAt&apiKey=${Api_key}`);
                if (!res.ok) {
                    console.log("Not fetched the data");
                }
                const data = await res.json()
                console.log(data);
    
                
            } catch (error) {
    
                
            }
            
        }
        fetching();  
    }, []);

  return (
    <div>
      
    </div>
  )
}

export default Api_Fetch
