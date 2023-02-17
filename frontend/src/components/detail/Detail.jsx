import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {FaChevronRight, FaCalendarAlt} from 'react-icons/fa'
import ReactMarkdown from 'react-markdown'
import axios from 'axios'
import './detail.css'

const DetailPost = () => {
  let { slug } = useParams()
  let { Categories } = useParams()

  const [post, setPost] = useState([])

  useEffect(() => {
    const fetch = async () => {
      try {
          const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/posts?filters[slug][$eq]=${slug}&populate=*`)
          setPost(res.data.data)
      } catch (error) {
          console.log(error);
      }
    }
    fetch()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  function formatMyDate(value) {
    var options = {
        year: "numeric",
        month: "long",
        day: "numeric",
    };
    return new Date(value).toLocaleDateString("en-GB", options);
  }

  if(Categories === "article") {
    return (
      <div>
            {post.map((index) => (
              <div>
                <div className='flex items-center text-sm font-inter font-600 mt-10 mb-6 mx-2 sm:mx-0 sm:text-base'>
                  <a href={`/${process.env.REACT_APP_EDU}`} className='text-[#009FCC] mr-[15.33px]'>Pusat Edukasi</a>
                  <FaChevronRight className='text-gray1'/>
                  <a href={`/${process.env.REACT_APP_EDU}/${process.env.REACT_APP_POST_ARTICLE}`} className='text-[#009FCC] ml-[14.67px] mr-[15.33px]'>Artikel Ilmiah</a>
                  <FaChevronRight className='text-gray1'/>
                  <p className='text-gray2 ml-[14.67px] line-clamp-1 sm:line-clamp-none'>{index.attributes.Title}</p>
                </div>
                <p className='font-century font-700 text-3xl sm:text-5xl text-dark mb-4 mx-2 text-start sm:mx-0'>{index.attributes.Title}</p>
                <div className='flex items-center text-gray2 font-inter font-400 ml-3 sm:ml-0'>
                  <FaCalendarAlt className='mr-1 text-[#1A1A1A]'/>
                  <p className='mr-3'>{formatMyDate(index.attributes.createdAt)}</p>
                </div>
                <img src={process.env.REACT_APP_API_URL+index.attributes.Image.data.attributes.url} alt="Gambar Artikel" className='w-full object-cover sm:w-[1200px] h-[330px] sm:h-[600px] rounded-2xl my-6'/>
                <ReactMarkdown className='bodyContent grid font-inter text-[18px] leading-7 text-justify justify-items-center indent-8 tracking-wide text-dark mx-2 sm:mx-0'>{index.attributes.Body}</ReactMarkdown>
              </div>
            ))}
      </div>
    )
  }

  if(Categories === "story") {
    return (
      <div>
            {post.map((index) => (
              <div>
                <div className='flex items-center text-sm font-inter font-600 mt-10 mb-6 mx-2 sm:mx-0 sm:text-base'>
                  <a href={`/${process.env.REACT_APP_EDU}`} className='text-[#009FCC] mr-[15.33px]'>Pusat Edukasi</a>
                  <FaChevronRight className='text-gray1'/>
                  <a href={`/${process.env.REACT_APP_EDU}/${process.env.REACT_APP_POST_STORY}`} className='text-[#009FCC] ml-[14.67px] mr-[15.33px]'>Cerita Kisah / Timbal Balik</a>
                  <FaChevronRight className='text-gray1'/>
                  <p className='text-gray2 ml-[14.67px] line-clamp-1 sm:line-clamp-none'>{index.attributes.Title}</p>
                </div>
                <p className='font-century font-700 text-3xl sm:text-5xl text-dark mb-4 text-start mx-2 sm:mx-0'>{index.attributes.Title}</p>
                <div className='flex items-center text-gray2 font-inter font-400 ml-3 sm:ml-0'>
                  <FaCalendarAlt className='mr-1 text-[#1A1A1A]'/>
                  <p className='mr-3'>{formatMyDate(index.attributes.createdAt)}</p>
                </div>
                <img src={process.env.REACT_APP_API_URL+index.attributes.Image.data.attributes.url} alt="Gambar Artikel" className='w-full object-cover sm:w-[1200px] h-[330px] sm:h-[600px] rounded-2xl my-6'/>
                <p className='font-inter text-[18px] leading-7 text-dark mx-2 text-justify sm:mx-0'>{index.attributes.Body}</p>
              </div>
            ))}
      </div>
    )
  }

  if(Categories === "event") {
    return (
      <div>
            {post.map((index) => (
              <div>
                <div className='flex items-center font-inter font-600 mt-10 mb-6 mx-2 sm:mx-0 text-sm sm:text-base'>
                  <a href={`/${process.env.REACT_APP_EDU}`} className='text-[#009FCC] mr-[15.33px]'>Pusat Edukasi</a>
                  <FaChevronRight className='text-gray1'/>
                  <a href={`/${process.env.REACT_APP_EDU}/${process.env.REACT_APP_POST_EVENT}`} className='text-[#009FCC] ml-[14.67px] mr-[15.33px]'>Acara & Kegiatan</a>
                  <FaChevronRight className='text-gray1'/>
                  <p className='text-gray2 ml-[14.67px] line-clamp-1 sm:line-clamp-none'>{index.attributes.Title}</p>
                </div>
                <p className='font-century font-700 text-3xl sm:text-5xl text-dark mb-4 mx-2 text-start sm:mx-0'>{index.attributes.Title}</p>
                <div className='flex items-center text-gray2 font-inter font-400 ml-3 sm:ml-0'>
                  <FaCalendarAlt className='mr-1 text-[#1A1A1A]'/>
                  <p className='mr-3'>{formatMyDate(index.attributes.createdAt)}</p>
                </div>
                <img src={process.env.REACT_APP_API_URL+index.attributes.Image.data.attributes.url} alt="Gambar Artikel" className='w-full object-cover sm:w-[1200px] h-[330px] sm:h-[600px] rounded-2xl my-6'/>
                <p className='font-inter text-[18px] leading-7 text-dark mx-2 text-justify sm:mx-0'>{index.attributes.Body}</p>
              </div>
            ))}
      </div>
    )
  }
}


export default DetailPost