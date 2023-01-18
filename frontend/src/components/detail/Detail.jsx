import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {FaChevronRight, FaCalendarAlt} from 'react-icons/fa'
import {AiFillEye} from 'react-icons/ai'
import axios from 'axios'

const DetailPost = () => {
  let { Title } = useParams()
  let { Categories } = useParams()

  const [post, setPost] = useState([])

  useEffect(() => {
    const fetch = async () => {
      try {
          const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/posts?filters[Title][$eq]=${Title}&populate=*`)
          setPost(res.data.data)
      } catch (error) {
          console.log(error);
      }
    }
    fetch()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  

  if(Categories === "Article") {
    return (
      <div>
          <div className='flex items-center font-inter font-600 mt-10 mb-6'>
            <a href={`/${process.env.REACT_APP_EDU}`} className='text-[#009FCC] mr-[15.33px]'>Pusat Edukasi</a>
            <FaChevronRight className='text-gray1'/>
            <a href={`/${process.env.REACT_APP_EDU}/${process.env.REACT_APP_POST_ARTICLE}`} className='text-[#009FCC] ml-[14.67px] mr-[15.33px]'>Artikel Ilmiah</a>
            <FaChevronRight className='text-gray1'/>
            <p className='text-gray2 ml-[14.67px]'>{Title}</p>
          </div>
          <p className='font-century font-700 text-5xl text-dark mb-4'>{Title}</p>
          <div className='flex items-center text-gray2 font-inter font-400'>
            <FaCalendarAlt className='mr-1 text-[#1A1A1A]'/>
            <p className='mr-3'>31 January 2030</p>
            <AiFillEye className='mr-1'/>
            <p>1234x dibaca</p>
          </div>
            {post.map((index) => (
              <div>
                <img src={process.env.REACT_APP_API_URL+index.attributes.Image.data.attributes.url} alt="Gambar Artikel" className='w-[1200px] h-[600px] rounded-2xl my-6'/>
                <p className='font-inter text-[18px] leading-7 text-dark'>{index.attributes.Body}</p>
                <div className='flex justify-center my-6'>
                  <img src={process.env.REACT_APP_API_URL+index.attributes.Image.data.attributes.url} alt="Gambar Artikel" className='w-[600px] h-[400px] rounded-lg'/>
                </div>
              </div>
            ))}
      </div>
    )
  }

  if(Categories === "Story") {
    return (
      <div>
          <div className='flex items-center font-inter font-600 mt-10 mb-6'>
            <a href={`/${process.env.REACT_APP_EDU}`} className='text-[#009FCC] mr-[15.33px]'>Pusat Edukasi</a>
            <FaChevronRight className='text-gray1'/>
            <a href={`/${process.env.REACT_APP_EDU}/${process.env.REACT_APP_POST_STORY}`} className='text-[#009FCC] ml-[14.67px] mr-[15.33px]'>Cerita Kisah / Timbal Balik</a>
            <FaChevronRight className='text-gray1'/>
            <p className='text-gray2 ml-[14.67px]'>{Title}</p>
          </div>
          <p className='font-century font-700 text-5xl text-dark mb-4'>{Title}</p>
          <div className='flex items-center text-gray2 font-inter font-400'>
            <FaCalendarAlt className='mr-1 text-[#1A1A1A]'/>
            <p className='mr-3'>31 January 2030</p>
            <AiFillEye className='mr-1'/>
            <p>1234x dibaca</p>
          </div>
            {post.map((index) => (
              <div>
                <img src={process.env.REACT_APP_API_URL+index.attributes.Image.data.attributes.url} alt="Gambar Artikel" className='w-[1200px] h-[600px] rounded-2xl my-6'/>
                <p className='font-inter text-[18px] leading-7 text-dark'>{index.attributes.Body}</p>
                <div className='flex justify-center my-6'>
                  <img src={process.env.REACT_APP_API_URL+index.attributes.Image.data.attributes.url} alt="Gambar Artikel" className='w-[600px] h-[400px] rounded-lg'/>
                </div>
              </div>
            ))}
      </div>
    )
  }

  if(Categories === "Event") {
    return (
      <div>
          <div className='flex items-center font-inter font-600 mt-10 mb-6'>
            <a href={`/${process.env.REACT_APP_EDU}`} className='text-[#009FCC] mr-[15.33px]'>Pusat Edukasi</a>
            <FaChevronRight className='text-gray1'/>
            <a href={`/${process.env.REACT_APP_EDU}/${process.env.REACT_APP_POST_EVENT}`} className='text-[#009FCC] ml-[14.67px] mr-[15.33px]'>Acara & Kegiatan</a>
            <FaChevronRight className='text-gray1'/>
            <p className='text-gray2 ml-[14.67px]'>{Title}</p>
          </div>
          <p className='font-century font-700 text-5xl text-dark mb-4'>{Title}</p>
          <div className='flex items-center text-gray2 font-inter font-400'>
            <FaCalendarAlt className='mr-1 text-[#1A1A1A]'/>
            <p className='mr-3'>31 January 2030</p>
            <AiFillEye className='mr-1'/>
            <p>1234x dibaca</p>
          </div>
            {post.map((index) => (
              <div>
                <img src={process.env.REACT_APP_API_URL+index.attributes.Image.data.attributes.url} alt="Gambar Artikel" className='w-[1200px] h-[600px] rounded-2xl my-6'/>
                <p className='font-inter text-[18px] leading-7 text-dark'>{index.attributes.Body}</p>
                <div className='flex justify-center my-6'>
                  <img src={process.env.REACT_APP_API_URL+index.attributes.Image.data.attributes.url} alt="Gambar Artikel" className='w-[600px] h-[400px] rounded-lg'/>
                </div>
              </div>
            ))}
      </div>
    )
  }
}

export default DetailPost