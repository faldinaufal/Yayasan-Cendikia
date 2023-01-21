import React, { useEffect, useState } from 'react'
import {Card, DetailPost, Footer, Navbar} from '../../../components'
import Fb from '../../../assets/Icon/FB.svg'
import FbHover from '../../../assets/Icon/FBHover.svg'
import IG from '../../../assets/Icon/Sosmed Icon/Social Media=Instagram, State=Default.svg'
import IGHover from '../../../assets/Icon/Sosmed Icon/Social Media=Instagram, State=Hover.svg'
import Twitter from '../../../assets/Icon/Sosmed Icon/Social Media=Twitter, State=Default.svg'
import TwitterHover from '../../../assets/Icon/Sosmed Icon/Social Media=Twitter, State=Hover.svg'
import YT from '../../../assets/Icon/Sosmed Icon/Social Media=Youtube, State=Default.svg'
import YTHover from '../../../assets/Icon/Sosmed Icon/Social Media=Youtube, State=Hover.svg'
import axios from 'axios'

const SeePost = () => {
  const [post, setPost] = useState([])

  useEffect(() => {
      fetch()
  },[])

  const fetch = async () => {
    try {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/posts?sort[1]=id%3Adesc&populate=*`)
        setPost(res.data.data)
    } catch (error) {
        console.log(error);
    }
  }

  return (
    <section className='w-full bg-white'>
      <nav>
        <Navbar/>
      </nav>
      <div className='container mb-20'>
        <DetailPost/>
        <div className='w-full border-[1px] bg-gray1 my-10'></div>
        <div className='flex items-center ml-2 sm:ml-0'>
          <p className='font-inter mr-4'>Bagikan</p>
          <div className='relative flex flex-wrap justify-center gap-4'>
            <div className='group duration-150 rounded-full'>
                <a href="#" target="_blank"><img src={Fb} alt="Facebook Logo" className='w-9 h-9 rounded-full group-hover:hidden'/></a>
                <a href="#" target="_blank"><img src={FbHover} alt="Facebook Logo" className='w-9 h-9 rounded-full hidden group-hover:block'/></a>
            </div>
            <div className='group duration-150 rounded-full'>
                <a href="#" target="_blank"><img src={IG} alt="Instagram Logo" className='w-9 h-9 rounded-full group-hover:hidden'/></a>
                <a href="#" target="_blank"><img src={IGHover} alt="Instagram Logo" className='w-9 h-9 rounded-full hidden group-hover:block'/></a>
            </div>
            <div className='group duration-150 rounded-full'>
                <a href="#" target="_blank"><img src={Twitter} alt="Twitter Logo" className='w-9 h-9 rounded-full group-hover:hidden'/></a>
                <a href="#" target="_blank"><img src={TwitterHover} alt="Twitter Logo" className='w-9 h-9 rounded-full hidden group-hover:block'/></a>
            </div>
            <div className='group duration-150 rounded-full'>
                <a href="#" target="_blank"><img src={YT} alt="Youtube Logo" className='w-9 h-9 rounded-full group-hover:hidden'/></a>     
                <a href="#" target="_blank"><img src={YTHover} alt="Youtube Logo" className='w-9 h-9 rounded-full hidden group-hover:block'/></a>
            </div>
          </div>
        </div>
        <div>
          <p className='font-century font-700 text-4xl text-dark mt-[46px] mb-2 text-center sm:text-start'>Lihat Juga</p>
          <div className='flex flex-wrap justify-center gap-6 mb-20'>
            {post.slice(0,3).map((index) => (
                <Card index={index} key={index.id}/>
            ))}
          </div>
         </div> 
      </div>
      <footer>
        <Footer/>
      </footer>
    </section>
  )
}

export default SeePost