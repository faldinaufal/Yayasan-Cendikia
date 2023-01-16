import React, { useEffect, useState } from 'react'
import {Card, Footer, Navbar} from '../../../components'
import Detail from '../../../components/detail/Detail'
import {FaFacebookF} from 'react-icons/fa'
import {AiOutlineTwitter} from 'react-icons/ai'
import {BsYoutube, BsInstagram} from 'react-icons/bs'
import axios from 'axios'

const DetailAEC = () => {

  const [post, setPost] = useState([])

  useEffect(() => {
      fetch()
  },[])

  const fetch = async () => {
    try {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/posts?sort[1]=id%3Adesc&populate=*`)
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
        <Detail />
        <div className='w-full border-[1px] bg-gray1 my-10'></div>
        <div className='flex items-center'>
          <p className='font-inter mr-4'>Bagikan</p>
          <a href="/" target={'_blank'} className='share-sosmed hover:bg-[#1877F2]'><FaFacebookF className='text-white'/></a>
          <a href="/" target={'_blank'} className='share-sosmed hover:bg-[#E4405F]'><BsInstagram className='text-white'/></a>
          <a href="/" target={'_blank'} className='share-sosmed hover:bg-[#1DA1F2]'><AiOutlineTwitter className='text-white'/></a>
          <a href="/" target={'_blank'} className='share-sosmed hover:bg-[#CD201F] '><BsYoutube className='text-white'/></a>
        </div>
        <div>
          <p className='font-century font-700 text-4xl text-dark mt-[46px] mb-2'>Lihat Juga</p>
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

export default DetailAEC