import React, { useEffect, useState } from 'react'
import { Footer, Navbar } from '../../components'
import VectorGray from '../../assets/Icon/Vector Abu.svg'
import VectorGrayLeft from '../../assets/Icon/Vector Abu Kiri.svg'
import VectorBlueRight from '../../assets/Icon/Vector Biru Kanan.svg'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'

const   Education = () => {

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
    <div>
        <Navbar/>
        <div className='container grid gap-6 my-10'>
            <div className='flex gap-[15px]'>
                <a href="/edukasi" className='font-inter text-[#009FCC] font-semibold text-base'>Pusat Edukasi</a>
                <img src={VectorGray} alt="" />
                <p className='font-inter text-[#6B7280] font-semibold text-base'>Artikel Ilmiah</p>
            </div>
            <div>
              <h3 className='font-century text-[36px] leading-[42px] text-[#262626] self-stretch'>Artikel Ilmiah</h3>
            </div>
            <div>
              <div className='grid grid-cols-3 gap-6'>
                {post.slice(0,6).map((index) => (
                    <Link to={`/educenter/article/${index.attributes.Title}`}>
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
        <Footer/>
    </div>
  )
}

export default Education