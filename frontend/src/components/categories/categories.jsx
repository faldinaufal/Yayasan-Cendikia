import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from '../card/Card'

const Categories = ({categories}) => {

    const [post, setPost] = useState([])

    useEffect(() => {
        fetch()
    },[])

   const fetch = async () => {
    try {
        const res = await axios.get(`http://localhost:1337/api/posts?sort[1]=id%3Adesc&filters[Categories][$eq]=${categories}&populate=*`)
        setPost(res.data.data)
        console.log(res.data.data)
    } catch (error) {
        console.log(error);
    }
   }

    return (
        <div className='flex flex-wrap justify-center gap-6'>
            {post.slice(0,3).map((index) => (
                <Card index={index} key={index.id}/>
            ))}
        </div>
    )
}

export default Categories