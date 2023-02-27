import React from 'react'
import {FaChevronRight, FaChevronLeft} from 'react-icons/fa'

const Pagination = ({Page, post, cat}) => {
  return (
    <div className='flex items-center justify-center mt-10 mb-20 gap-5'>
          {Page === 1 ? 
            <div className='text-[#009FCC]'></div>
          :
          Page !== 1 && Page > 1 &&
            <div className='flex gap-2'>
              <a  href={`/${process.env.REACT_APP_EDU}/${cat}/pages/${Page-1}`} className='text-[#009FCC] duration-200 hover:text-gray2'><FaChevronLeft/></a>
            </div>
          }
          {Page >= 1 && Page < 4 ?
            <div className='flex gap-4'>
              <a href={`/${process.env.REACT_APP_EDU}/${cat}`} className='text-[#009FCC] duration-200 hover:text-gray2 font-inter'>1</a>
              <a href={`/${process.env.REACT_APP_EDU}/${cat}/pages/2`} className='text-[#009FCC] duration-200 hover:text-gray2 font-inter'>2</a>
              <a href={`/${process.env.REACT_APP_EDU}/${cat}/pages/3`} className='text-[#009FCC] duration-200 hover:text-gray2 font-inter'>3</a>
              <a href={`/${process.env.REACT_APP_EDU}/${cat}/pages/4`} className='text-[#009FCC] duration-200 hover:text-gray2 font-inter'>4</a>
              <a href={`/${process.env.REACT_APP_EDU}/${cat}/pages/5`} className='text-[#009FCC] duration-200 hover:text-gray2 font-inter'>5</a>
            </div>
          :Page = post ?
            <div className='flex gap-4'>
              <a href={`/${process.env.REACT_APP_EDU}/${cat}/pages/${Page-4}`} className='text-[#009FCC] duration-200 hover:text-gray2 font-inter'>{Page-4}</a>
              <a href={`/${process.env.REACT_APP_EDU}/${cat}/pages/${Page-3}`} className='text-[#009FCC] duration-200 hover:text-gray2 font-inter'>{Page-3}</a>
              <a href={`/${process.env.REACT_APP_EDU}/${cat}/pages/${Page-2}`} className='text-[#009FCC] duration-200 hover:text-gray2 font-inter'>{Page-2}</a>
              <a href={`/${process.env.REACT_APP_EDU}/${cat}/pages/${Page-1}`} className='text-[#009FCC] duration-200 hover:text-gray2 font-inter'>{Page-1}</a>
              <a href={`/${process.env.REACT_APP_EDU}/${cat}/pages/${Page}`} className='text-[#009FCC] duration-200 hover:text-gray2 font-inter'>{Page}</a>
            </div>
          :Page >=4 && Page < post-2 ?
           <div className='flex gap-4'>
              <a href={`/${process.env.REACT_APP_EDU}/${cat}/pages/${Page-2}`} className='text-[#009FCC] duration-200 hover:text-gray2 font-inter'>{Page-2}</a>
              <a href={`/${process.env.REACT_APP_EDU}/${cat}/pages/${Page-1}`} className='text-[#009FCC] duration-200 hover:text-gray2 font-inter'>{Page-1}</a>
              <a href={`/${process.env.REACT_APP_EDU}/${cat}/pages/${Page}`} className='text-[#009FCC] duration-200 hover:text-gray2 font-inter'>{Page}</a>
              <a href={`/${process.env.REACT_APP_EDU}/${cat}/pages/${Page-1+2}`} className='text-[#009FCC] duration-200 hover:text-gray2 font-inter'>{Page-1+2}</a>
              <a href={`/${process.env.REACT_APP_EDU}/${cat}/pages/${Page-1+3}`} className='text-[#009FCC] duration-200 hover:text-gray2 font-inter'>{Page-1+3}</a>
            </div>
          :Page >=4 && Page < post &&
            <div className='flex gap-4'>
              <a href={`/${process.env.REACT_APP_EDU}/${cat}/pages/${Page-3}`} className='text-[#009FCC] duration-200 hover:text-gray2 font-inter'>{Page-3}</a>
              <a href={`/${process.env.REACT_APP_EDU}/${cat}/pages/${Page-2}`} className='text-[#009FCC] duration-200 hover:text-gray2 font-inter'>{Page-2}</a>
              <a href={`/${process.env.REACT_APP_EDU}/${cat}/pages/${Page-1}`} className='text-[#009FCC] duration-200 hover:text-gray2 font-inter'>{Page-1}</a>
              <a href={`/${process.env.REACT_APP_EDU}/${cat}/pages/${Page}`} className='text-[#009FCC] duration-200 hover:text-gray2 font-inter'>{Page}</a>
              <a href={`/${process.env.REACT_APP_EDU}/${cat}/pages/${Page-1+2}`} className='text-[#009FCC] duration-200 hover:text-gray2 font-inter'>{Page-1+2}</a>
            </div>
          }
          {Page === 1 ? 
            <div className='flex gap-2'>
              <a  href={`/${process.env.REACT_APP_EDU}/${cat}/pages/${Page-1+2}`} className='text-[#009FCC] duration-200 hover:text-gray2'><FaChevronRight/></a>
            </div>
          :
          Page >= 1 && Page < post &&
            <div className='flex gap-2'>
              <a  href={`/${process.env.REACT_APP_EDU}/${cat}/pages/${Page-1+2}`} className='text-[#009FCC] duration-200 hover:text-gray2'><FaChevronRight/></a>
            </div>
          }
        </div>
  )
}

export default Pagination