import React, { useEffect, useState } from 'react'
import VectorGray from '../../assets/Icon/Vector Abu.svg'
import VectorGrayLeft from '../../assets/Icon/Vector Abu Kiri.svg'
import VectorBlueRight from '../../assets/Icon/Vector Biru Kanan.svg'
import Card from '../card/Card'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Post = ({categories}) => {
    const [post, setPost] = useState([])
  
        useEffect(() => {
            fetch()
        },[])
    
        const fetch = async () => {
        try {
            const res = await axios.get(`http://localhost:1337/api/posts?sort[1]=id%3Adesc&filters[Categories][$eq]=${categories}&populate=*`)
            setPost(res.data.data)
        } catch (error) {
            console.log(error);
        }
    }

    if(categories === "Article") {
        return (
            <div className='container grid gap-6 my-10'>
                <div className='flex gap-[15px]'>
                    <Link to="/educenter" className='font-inter text-[#009FCC] font-semibold text-base'>Pusat Edukasi</Link>
                    <img src={VectorGray} alt="" />
                    <p className='font-inter text-[#6B7280] font-semibold text-base'>Artikel Ilmiah</p>
                </div>
                <div>
                <h3 className='font-century text-[36px] leading-[42px] text-[#262626] self-stretch'>Artikel Ilmiah</h3>
                </div>
                <div>
                <div className='grid grid-cols-3 gap-6'>
                    {post.slice(0,6).map((index) => (
                        <Card index={index} key={index.id}/>
                    ))}
                </div>
                </div>
                <div className='flex justify-center items-center mt-3'>
                <div className='flex gap-6 h-[28px]'>
                    <button><img src={VectorGrayLeft} alt="" /></button>
                    <li className='list-none flex gap-4 text-[#008CB2] font-semibold font-inter text-base'>
                    <button>1</button>
                    <button>2</button>
                    <button>3</button>
                    <button>4</button>
                    <button>5</button>
                    </li>
                    <button><img src={VectorBlueRight} alt=""/></button>
                </div>
                </div>
            </div>
        )
    }
    if(categories === "Event") {
        return (
            <div className='container grid gap-6 my-10'>
                <div className='flex gap-[15px]'>
                    <Link to="/educenter" className='font-inter text-[#009FCC] font-semibold text-base'>Pusat Edukasi</Link>
                    <img src={VectorGray} alt="" />
                    <p className='font-inter text-[#6B7280] font-semibold text-base'>Acara & Kegiatan</p>
                </div>
                <div>
                <h3 className='font-century text-[36px] leading-[42px] text-[#262626] self-stretch'>Acara & Kegiatan</h3>
                </div>
                <div>
                <div className='grid grid-cols-3 gap-6'>
                    {post.slice(0,6).map((index) => (
                        <Card index={index} key={index.id}/>
                    ))}
                </div>
                </div>
                <div className='flex justify-center items-center mt-3'>
                <div className='flex gap-6 h-[28px]'>
                    <button><img src={VectorGrayLeft} alt="" /></button>
                    <li className='list-none flex gap-4 text-[#008CB2] font-semibold font-inter text-base'>
                    <button>1</button>
                    <button>2</button>
                    <button>3</button>
                    <button>4</button>
                    <button>5</button>
                    </li>
                    <button><img src={VectorBlueRight} alt=""/></button>
                </div>
                </div>
            </div>
        )
    }
    if(categories === "Story") {
        return (
            <div className='container grid gap-6 my-10'>
                <div className='flex gap-[15px]'>
                    <Link to="/educenter" className='font-inter text-[#009FCC] font-semibold text-base'>Pusat Edukasi</Link>
                    <img src={VectorGray} alt="" />
                    <p className='font-inter text-[#6B7280] font-semibold text-base'>Cerita Kisah / Timbal Balik</p>
                </div>
                <div>
                <h3 className='font-century text-[36px] leading-[42px] text-[#262626] self-stretch'>Cerita Kisah / Timbal Balik</h3>
                </div>
                <div>
                <div className='grid grid-cols-3 gap-6'>
                    {post.slice(0,6).map((index) => (
                        <Card index={index} key={index.id}/>
                    ))}
                </div>
                </div>
                <div className='flex justify-center items-center mt-3'>
                <div className='flex gap-6 h-[28px]'>
                    <button><img src={VectorGrayLeft} alt="" /></button>
                    <li className='list-none flex gap-4 text-[#008CB2] font-semibold font-inter text-base'>
                    <button>1</button>
                    <button>2</button>
                    <button>3</button>
                    <button>4</button>
                    <button>5</button>
                    </li>
                    <button><img src={VectorBlueRight} alt=""/></button>
                </div>
                </div>
            </div>
        )
    }
}

export default Post