import React, { useEffect, useState } from 'react'
import axios from 'axios'
const Datafetch = () => {
    const[posts,setPosts]=useState([])
    const[id,setId]=useState(1)
    const[buttonid,setButtonid]=useState(1)
    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(res=>{
            console.log(res)
            setPosts(res.data)
        })

    },[buttonid])
    function handleClick(){
            setButtonid(id)
    }
  return (
    <div>
        <input type='text' value={id} onChange={e=>setId(e.target.value)}/>
        <button onClick={handleClick}>FetchPost</button>
        {posts.title}
        {/* <ul>
            {
                posts.map(posts=>(
                   <li key='id'>
                    { posts.title }
                   </li>
                ))
            }
        </ul> */}
        
    </div>
  )
}

export default Datafetch
