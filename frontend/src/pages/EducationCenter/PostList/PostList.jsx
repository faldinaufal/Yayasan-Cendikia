import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Footer, Navbar, Post } from '../../../components'
import {FaChevronRight, FaChevronLeft} from 'react-icons/fa'
import axios from 'axios'
import { MdFirstPage, MdLastPage } from 'react-icons/md'

const Education = () => {
  let {Categories} = useParams()
  let {Page} = useParams()
  const [post, setPost] = useState([])

  useEffect(() => {
    const fetch = async () => {
        try {
            // const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/posts?sort[1]=id%3Adesc&filters[Categories][$eq]=${categories}&populate=*`)
            const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/posts?sort[1]=id%3Adesc&filters[Categories][$eq]=${Categories}&pagination[pageSize]=6&populate=*`)
            setPost(res.data.meta.pagination.pageCount)
        } catch (error) {
            console.log(error);
        }
    }
    fetch()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  if(Page == null) {
      Page = 1
  }

  return (
    <div>
        <Navbar/>
        <Post categories={Categories} pages={Page}/>
        <div className='flex items-center justify-center mt-10 mb-20 gap-5'>
          {Page === 1 ? 
            <div className='text-[#009FCC]'></div>
          :
          Page !== 1 && Page > 1 &&
            <div className='flex gap-2'>
              <a  href={`/${process.env.REACT_APP_EDU}/${Categories}`} className='text-[#009FCC] duration-200 hover:text-gray2'><MdFirstPage/></a>
              <a  href={`/${process.env.REACT_APP_EDU}/${Categories}/pages/${Page-1}`} className='text-[#009FCC] duration-200 hover:text-gray2'><FaChevronLeft/></a>
            </div>
          }
          {Page >= 1 && Page < 7 ?
            <div className='flex gap-4'>
              <a href={`/${process.env.REACT_APP_EDU}/${Categories}`} className='text-[#009FCC] duration-200 hover:text-gray2 font-inter'>1</a>
              <a href={`/${process.env.REACT_APP_EDU}/${Categories}/pages/2`} className='text-[#009FCC] duration-200 hover:text-gray2 font-inter'>2</a>
              <a href={`/${process.env.REACT_APP_EDU}/${Categories}/pages/3`} className='text-[#009FCC] duration-200 hover:text-gray2 font-inter'>3</a>
              <a href={`/${process.env.REACT_APP_EDU}/${Categories}/pages/4`} className='text-[#009FCC] duration-200 hover:text-gray2 font-inter'>4</a>
              <a href={`/${process.env.REACT_APP_EDU}/${Categories}/pages/5`} className='text-[#009FCC] duration-200 hover:text-gray2 font-inter'>5</a>
              <a href={`/${process.env.REACT_APP_EDU}/${Categories}/pages/6`} className='text-[#009FCC] duration-200 hover:text-gray2 font-inter'>6</a>
              <a href={`/${process.env.REACT_APP_EDU}/${Categories}/pages/7`} className='text-[#009FCC] duration-200 hover:text-gray2 font-inter'>7</a>
            </div>
          :Page >=7 && Page <= post-6 ?
           <div className='flex gap-4'>
              <a href={`/${process.env.REACT_APP_EDU}/${Categories}/pages/${Page-3}`} className='text-[#009FCC] duration-200 hover:text-gray2 font-inter'>{Page-3}</a>
              <a href={`/${process.env.REACT_APP_EDU}/${Categories}/pages/${Page-2}`} className='text-[#009FCC] duration-200 hover:text-gray2 font-inter'>{Page-2}</a>
              <a href={`/${process.env.REACT_APP_EDU}/${Categories}/pages/${Page-1}`} className='text-[#009FCC] duration-200 hover:text-gray2 font-inter'>{Page-1}</a>
              <a href={`/${process.env.REACT_APP_EDU}/${Categories}/pages/${Page}`} className='text-[#009FCC] duration-200 hover:text-gray2 font-inter'>{Page}</a>
              <a href={`/${process.env.REACT_APP_EDU}/${Categories}/pages/${Page-1+2}`} className='text-[#009FCC] duration-200 hover:text-gray2 font-inter'>{Page-1+2}</a>
              <a href={`/${process.env.REACT_APP_EDU}/${Categories}/pages/${Page-1+3}`} className='text-[#009FCC] duration-200 hover:text-gray2 font-inter'>{Page-1+3}</a>
              <a href={`/${process.env.REACT_APP_EDU}/${Categories}/pages/${Page-1+4}`} className='text-[#009FCC] duration-200 hover:text-gray2 font-inter'>{Page-1+4}</a>
            </div>
          :Page >=7 && Page < post ?
            <div className='flex gap-4'>
              <a href={`/${process.env.REACT_APP_EDU}/${Categories}/pages/${Page-6}`} className='text-[#009FCC] duration-200 hover:text-gray2 font-inter'>{Page-6}</a>
              <a href={`/${process.env.REACT_APP_EDU}/${Categories}/pages/${Page-5}`} className='text-[#009FCC] duration-200 hover:text-gray2 font-inter'>{Page-5}</a>
              <a href={`/${process.env.REACT_APP_EDU}/${Categories}/pages/${Page-4}`} className='text-[#009FCC] duration-200 hover:text-gray2 font-inter'>{Page-4}</a>
              <a href={`/${process.env.REACT_APP_EDU}/${Categories}/pages/${Page-3}`} className='text-[#009FCC] duration-200 hover:text-gray2 font-inter'>{Page-3}</a>
              <a href={`/${process.env.REACT_APP_EDU}/${Categories}/pages/${Page-2}`} className='text-[#009FCC] duration-200 hover:text-gray2 font-inter'>{Page-2}</a>
              <a href={`/${process.env.REACT_APP_EDU}/${Categories}/pages/${Page-1}`} className='text-[#009FCC] duration-200 hover:text-gray2 font-inter'>{Page-1}</a>
              <a href={`/${process.env.REACT_APP_EDU}/${Categories}/pages/${Page}`} className='text-[#009FCC] duration-200 hover:text-gray2 font-inter'>{Page}</a>
            </div>
          :Page = post &&
            <div className='flex gap-4'>
              <a href={`/${process.env.REACT_APP_EDU}/${Categories}/pages/${Page-6}`} className='text-[#009FCC] duration-200 hover:text-gray2 font-inter'>{Page-6}</a>
              <a href={`/${process.env.REACT_APP_EDU}/${Categories}/pages/${Page-5}`} className='text-[#009FCC] duration-200 hover:text-gray2 font-inter'>{Page-5}</a>
              <a href={`/${process.env.REACT_APP_EDU}/${Categories}/pages/${Page-4}`} className='text-[#009FCC] duration-200 hover:text-gray2 font-inter'>{Page-4}</a>
              <a href={`/${process.env.REACT_APP_EDU}/${Categories}/pages/${Page-3}`} className='text-[#009FCC] duration-200 hover:text-gray2 font-inter'>{Page-3}</a>
              <a href={`/${process.env.REACT_APP_EDU}/${Categories}/pages/${Page-2}`} className='text-[#009FCC] duration-200 hover:text-gray2 font-inter'>{Page-2}</a>
              <a href={`/${process.env.REACT_APP_EDU}/${Categories}/pages/${Page-1}`} className='text-[#009FCC] duration-200 hover:text-gray2 font-inter'>{Page-1}</a>
              <a href={`/${process.env.REACT_APP_EDU}/${Categories}/pages/${Page}`} className='text-[#009FCC] duration-200 hover:text-gray2 font-inter'>{Page}</a>
            </div>
          }
          {Page < post && Page >=7 &&
            <a  href={`/${process.env.REACT_APP_EDU}/${Categories}/pages/${post}`} className='text-[#009FCC] duration-200 hover:text-gray2 font-inter'>{post}</a>
          }
          {Page === 1 ? 
            <div className='flex gap-2'>
              <a  href={`/${process.env.REACT_APP_EDU}/${Categories}/pages/${Page-1+2}`} className='text-[#009FCC] duration-200 hover:text-gray2'><FaChevronRight/></a>
              <a  href={`/${process.env.REACT_APP_EDU}/${Categories}/pages/${post}`} className='text-[#009FCC] duration-200 hover:text-gray2'><MdLastPage/></a>
            </div>
          :
          Page >= 1 && Page < post &&
            <div className='flex gap-2'>
              <a  href={`/${process.env.REACT_APP_EDU}/${Categories}/pages/${Page-1+2}`} className='text-[#009FCC] duration-200 hover:text-gray2'><FaChevronRight/></a>
              <a  href={`/${process.env.REACT_APP_EDU}/${Categories}/pages/${post}`} className='text-[#009FCC] duration-200 hover:text-gray2'><MdLastPage/></a>
            </div>
          }
        </div>
        <Footer/>
    </div>
  )
}

export default Education