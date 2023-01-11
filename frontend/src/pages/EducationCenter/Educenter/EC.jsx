import React from 'react'
import { Link } from 'react-router-dom'
import {AiOutlineRight} from 'react-icons/ai'
import { Footer, Navbar, Categories } from '../../../components'

const MPEC = () => {
  return (
    <section className='bg-white'>
      <nav>
        <Navbar/>
      </nav>
      <div className='container mb-20'>
        {/* artikel ilmiah */}
        <div className='flex items-center justify-between mt-10 mb-6'>
          <p className='font-century text-4xl font-700 text-dark'>Artikel Ilmiah</p>
          <div className='flex justify-end'>
            <Link to='/educenter/article' className='flex items-center font-inter text-[#009FCC] font-600 duration-150 hover:opacity-70'>
              More
              <AiOutlineRight className='ml-0.5'/>
            </Link>
          </div>
        </div>
        <div className='flex flex-wrap justify-center gap-6'>
          <Categories categories="Article" />
        </div>
        {/* acara & kegiatan */}
        <div className='mt-20 mb-6 flex items-center justify-between'>
          <p className='font-century text-4xl font-700 text-dark'>Acara & Kegiatan</p>
          <div className='my-1 flex justify-end mr-3'>
            <Link to='/educenter/event' className='flex items-center font-inter text-[#009FCC] font-600 duration-150 hover:opacity-70'>
              More
              <AiOutlineRight className='ml-0.5'/>
            </Link>
          </div>
        </div>
        <div className='flex flex-wrap justify-center gap-6'>
          <Categories categories="Event" />
        </div>
        {/* cerita kisah / timbal balik */}
        <div className='mt-20 mb-6 flex items-center justify-between'>
          <p className='font-century text-4xl font-700 text-dark'>Cerita Kisah / Timbal Balik</p>
          <div className='my-1 flex justify-end mr-3'>
            <Link to='/educenter/story' className='flex items-center font-inter text-[#009FCC] font-600 duration-150 hover:opacity-70'>
              More
              <AiOutlineRight className='ml-0.5'/>
            </Link>
          </div>
        </div>
        <div className='flex flex-wrap justify-center gap-6 mb-20'>
          <Categories categories="Story" />
        </div>
      </div>
      <footer>
        <Footer/>
      </footer>
    </section>
  )
}

export default MPEC