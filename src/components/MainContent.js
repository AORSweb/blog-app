import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom';

function MainContent() {
    const URL='https://www.googleapis.com/blogger/v3/blogs/2399953/posts?key=AIzaSyD07HbmSzLi8_-cfjxw-xoanYvIk6Y9cGU';
    const [blogs,setBlogs]=useState([]);

    const fetchdata=async()=>{
        const data=await fetch(URL);
        const jsonData = await data.json();

        setBlogs(jsonData.items);
        
    }
    
    useEffect(()=>{
        fetchdata();
    },[]);

    console.log(blogs);

  return (
    <div>
        {
            blogs.map((data)=>(
                <div>
                    <img src={data.author.image.url} />
                    {data.author.displayName}
                </div>
                
            ))
        }
    </div>
  )
}

export default MainContent