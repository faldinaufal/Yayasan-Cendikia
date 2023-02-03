import React, { useEffect, useState } from 'react'
import Card from '../card/Card'
import { Link } from 'react-router-dom'
import {FaChevronRight} from 'react-icons/fa'
import axios from 'axios'

const Post = ({categories, pages}) => {
    const [post, setPost] = useState([])

    useEffect(() => {
        const fetch = async () => {
            try {
                const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/posts?sort[1]=id%3Adesc&filters[Categories][$eq]=${categories}&pagination[page]=${pages}&pagination[pageSize]=6&populate=*`)
                setPost(res.data.data)
            } catch (error) {
                console.log(error);
            }
        }
        fetch()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    if(categories === "article") {
        return (
            <div className='container mb-20'>
                <div className='flex items-center font-inter font-600 mt-10 mb-6 ml-2 sm:ml-0'>
                    <Link to="/educenter" className='text-[#009FCC] mr-[15.33px]'>Pusat Edukasi</Link>
                    <FaChevronRight className='text-gray1'/>
                    <p className='text-gray2 ml-[14.67px]'>Artikel Ilmiah</p>
                </div>
                <div className='mb-6 flex items-center justify-between ml-2 sm:ml-0'>
                    <p className='font-century text-3xl font-700 text-dark sm:text-4xl'>Artikel Ilmiah</p>
                </div>
                <div className='flex flex-wrap justify-center gap-6'>
                    {post.map((index) => (
                        <Card index={index} key={index.id}/>
                    ))}
                </div>
                
            </div>
        )
    }
    if(categories === "event") {
        return (
            <div className='container mb-20'>
                <div className='flex items-center font-inter font-600 mt-10 mb-6 ml-2 sm:ml-0'>
                    <Link to="/educenter" className='text-[#009FCC] mr-[15.33px]'>Pusat Edukasi</Link>
                    <FaChevronRight className='text-gray1'/>
                    <p className='text-gray2 ml-[14.67px]'>Acara & Kegiatan</p>
                </div>
                <div className='mb-6 flex items-center justify-between ml-2 sm:ml-0'>
                    <p className='font-century text-3xl font-700 text-dark sm:text-4xl'>Acara & Kegiatan</p>
                </div>
                <div className='flex flex-wrap justify-center gap-6'>
                    {post.slice(0,6).map((index) => (
                        <Card index={index} key={index.id}/>
                    ))}
                </div>
            </div>
        )
    }
    if(categories === "story") {
        return (
            <div className='container mb-20'>
                <div className='flex items-center font-inter font-600 mt-10 mb-6 ml-2 sm:ml-0'>
                    <Link to="/educenter" className='text-[#009FCC] mr-[15.33px]'>Pusat Edukasi</Link>
                    <FaChevronRight className='text-gray1'/>
                    <p className='text-gray2 ml-[14.67px]'>Cerita Kisah / Timbal Balik</p>
                </div>
                <div className='mb-6 flex items-center justify-between ml-2 sm:ml-0'>
                    <p className='font-century text-3xl font-700 text-dark sm:text-4xl'>Cerita Kisah / Timbal Balik</p>
                </div>
                <div className='flex flex-wrap justify-center gap-6'>
                    {post.slice(0,6).map((index) => (
                        <Card index={index} key={index.id}/>
                    ))}
                </div>
            </div>
        )
    }
}

export default Post