import React, { useEffect, useState } from 'react'
import Card from '../card/Card'
import axios from 'axios'
import { Link } from 'react-router-dom'
import {FaChevronRight, FaChevronLeft} from 'react-icons/fa'

const Post = ({categories}) => {
    const [post, setPost] = useState([])

    useEffect(() => {
        const fetch = async () => {
            try {
                const res = await axios.get(`${process.env.REACT_APP_API_URL}/posts?sort[1]=id%3Adesc&filters[Categories][$eq]=${categories}&populate=*`)
                setPost(res.data.data)
            } catch (error) {
                console.log(error);
            }
        }
        fetch()
    },[])

    if(categories === "Article") {
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
                <div>
                <div className='flex flex-wrap justify-center gap-6'>
                    {post.slice(0,6).map((index) => (
                        <Card index={index} key={index.id}/>
                    ))}
                </div>
                </div>
                <div className='flex items-center justify-center mt-10 mb-20'>
                    <button className='text-[#009FCC] mr-[23.33px] duration-200 hover:text-gray2'><FaChevronLeft/></button>
                    <button className='text-[#009FCC] mr-4 duration-200 hover:text-gray2 font-inter'>1</button>
                    <button className='text-[#009FCC] mr-4 duration-200 hover:text-gray2 font-inter'>2</button>
                    <button className='text-[#009FCC] mr-4 duration-200 hover:text-gray2 font-inter'>3</button>
                    <button className='text-[#009FCC] mr-4 duration-200 hover:text-gray2 font-inter'>4</button>
                    <button className='text-[#009FCC] duration-200 hover:text-gray2 font-inter'>5</button>
                    <button className='text-[#009FCC] ml-[23.33px] duration-200 hover:text-gray2'><FaChevronRight/></button>
                </div>
            </div>
        )
    }
    if(categories === "Event") {
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
                <div>
                <div className='flex flex-wrap justify-center gap-6'>
                    {post.slice(0,6).map((index) => (
                        <Card index={index} key={index.id}/>
                    ))}
                </div>
                </div>
                <div className='flex items-center justify-center mt-10 mb-20'>
                    <button className='text-[#009FCC] mr-[23.33px] duration-200 hover:text-gray2'><FaChevronLeft/></button>
                    <button className='text-[#009FCC] mr-4 duration-200 hover:text-gray2 font-inter'>1</button>
                    <button className='text-[#009FCC] mr-4 duration-200 hover:text-gray2 font-inter'>2</button>
                    <button className='text-[#009FCC] mr-4 duration-200 hover:text-gray2 font-inter'>3</button>
                    <button className='text-[#009FCC] mr-4 duration-200 hover:text-gray2 font-inter'>4</button>
                    <button className='text-[#009FCC] duration-200 hover:text-gray2 font-inter'>5</button>
                    <button className='text-[#009FCC] ml-[23.33px] duration-200 hover:text-gray2'><FaChevronRight/></button>
                </div>
            </div>
        )
    }
    if(categories === "Story") {
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
                <div>
                <div className='flex flex-wrap justify-center gap-6'>
                    {post.slice(0,6).map((index) => (
                        <Card index={index} key={index.id}/>
                    ))}
                </div>
                </div>
                <div className='flex items-center justify-center mt-10 mb-20'>
                    <button className='text-[#009FCC] mr-[23.33px] duration-200 hover:text-gray2'><FaChevronLeft/></button>
                    <button className='text-[#009FCC] mr-4 duration-200 hover:text-gray2 font-inter'>1</button>
                    <button className='text-[#009FCC] mr-4 duration-200 hover:text-gray2 font-inter'>2</button>
                    <button className='text-[#009FCC] mr-4 duration-200 hover:text-gray2 font-inter'>3</button>
                    <button className='text-[#009FCC] mr-4 duration-200 hover:text-gray2 font-inter'>4</button>
                    <button className='text-[#009FCC] duration-200 hover:text-gray2 font-inter'>5</button>
                    <button className='text-[#009FCC] ml-[23.33px] duration-200 hover:text-gray2'><FaChevronRight/></button>
                </div>
            </div>
        )
    }
}

export default Post