import React, { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'

const ArtikelPost = () => {
    const [post, setPost] = useState([])

    useEffect(() => {
        fetch()
    },[])

   const fetch = async () => {
    try {
        const res = await axios.get('http://localhost:1337/api/posts?sort[1]=id%3Adesc&filters[Categories][$eq]=Article&populate=*')
        setPost(res.data.data)
    } catch (error) {
        console.log(error);
    }
   }

    return (
        <div className='flex justify-between'>
            {post.slice(0,3).map((index) => (
                <Link to={`/artikel-ilmiah/${index.attributes.Title}`}>
                <div className='w-[384px] h-[452px] rounded-lg border border-[#E0E7FF] shadow-card'>
                    <div>
                        <img src={`http://localhost:1337`+index?.attributes.Image.data.attributes.url} alt="Gambar Artikel" className='rounded-t-lg'/>
                    </div>
                    <div className='p-4 grid gap-4'>
                        <div className='font-century text-[24px] leading-[30px] text-[#262626]'>
                            <h4>{index?.attributes.Title}</h4>
                        </div>
                        <div>
                            <p className='font-inter font-normal text-base text-[#6B7280] line-clamp-3'>{index.attributes.Body}</p>
                        </div>
                        <div className='text-xs font-inter font-normal text-[#6B7280]'>
                        <p>{index?.attributes.createdAt}</p>
                        </div>
                    </div>
                </div>
                </Link>
            ))}
        </div> 
    )
}

export default ArtikelPost