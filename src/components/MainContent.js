import React, { useEffect, useState } from 'react'
import { json, useSearchParams } from 'react-router-dom';
import '../sass/components/mainContent.scss';

function MainContent() {
    const URL='https://dummyjson.com/quotes';
    const [blogs,setBlogs]=useState([]);
    const [newblogs,setNewBlogs]=useState([]);

    const fetchdata=async()=>{
        const data=await fetch(URL);
        const jData = await data.json();
        const jsonData=jData.quotes;
        const data10=jsonData.slice(0,10);
        const data3=jsonData.slice(0,3);

        setBlogs(data10);
        setNewBlogs(data3);

        
    }
    
    useEffect(()=>{
        fetchdata();
    },[]);

 

  return (
    <div className='main'>
        <div className='blogs--section' >
            {
                 blogs.map((data)=>(
                    <div className='blogs'>
                        {data.quote}
                    </div>
                    
                 ))
            }
             
        </div>
        <div className='aside--section'>
            <div className='section1'>
            {
                 newblogs.map((data)=>(
                    <div className='top--blogs'>
                        {data.quote}
                    </div>
                    
                 ))
            }
            </div>

            <div className='section2'>
            {
                 newblogs.map((data)=>(
                    <div>
                        {data.quote}
                    </div>
                    
                 ))
            }
            
            </div>
        </div>
    </div>
  )
}

export default MainContent;