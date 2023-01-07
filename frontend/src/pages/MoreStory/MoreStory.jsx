import React from 'react'
import { Link } from 'react-router-dom'
import {FaChevronRight, FaChevronLeft} from 'react-icons/fa'
import { Footer } from '../../components'
import {artikel1} from '../../assets/image'

const MoreStory = () => {
  return (
    <section className='bg-white'>
      <div className='container mb-20'>
        <div className='flex items-center font-inter font-600 mt-10 mb-6'>
          <p className='text-[#009FCC] mr-[15.33px]'>Pusat Edukasi</p>
          <FaChevronRight className='text-gray1'/>
          <p className='text-gray2 ml-[14.67px]'>Cerita Kisah / Timbal Balik</p>
        </div>
        <div className='mb-6 flex items-center justify-between'>
          <p className='font-century text-4xl font-700 text-dark'>Cerita Kisah / Timbal Balik</p>
        </div>
        <div className='flex flex-wrap justify-center gap-6'>
          <div className='rounded-lg w-[384px] shadow-md shadow-black/40 sm:w-[430px] lg:w-[384px]'>
            <div className='w-[384px] overflow-hidden rounded-t-md h-[240px] sm:w-[430px] sm:h-[270px] lg:w-[384px] lg:h-[240px]'>
              <img src={artikel1} alt={artikel1} className='w-[384px] h-[240px] sm:w-[430px] sm:h-[270px] lg:w-[384px] lg:h-[240px]'/>
            </div>
            <div className='w-[352px] mx-auto sm:w-[370px] lg:w-[352px]'>
              <Link to='/detail-cerita-kisah'>
                <p className='font-century font-700 text-2xl leading-[30px] my-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>  
              </Link>
              <p className='limit-content font-inter font-400 text-gray2 leading-6 mb-4'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus commodo luctus venenatis. Integer rhoncus iaculis quam, et iaculis odio sagittis consequat. In at enim justo. Ut in lacus a sem iaculis accumsan.
              </p>
              <p className='font-inter text-[12px] text-gray2 pb-2'>31 January 2030</p>
            </div>
          </div>
          <div className='rounded-lg w-[384px] shadow-md shadow-black/40 sm:w-[430px] lg:w-[384px]'>
            <div className='w-[384px] overflow-hidden rounded-t-md h-[240px] sm:w-[430px] sm:h-[270px] lg:w-[384px] lg:h-[240px]'>
              <img src={artikel1} alt={artikel1} className='w-[384px] h-[240px] sm:w-[430px] sm:h-[270px] lg:w-[384px] lg:h-[240px]'/>
            </div>
            <div className='w-[352px] mx-auto sm:w-[370px] lg:w-[352px]'>
              <Link to='/detail-cerita-kisah'>
                <p className='font-century font-700 text-2xl leading-[30px] my-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>  
              </Link>
              <p className='limit-content font-inter font-400 text-gray2 leading-6 mb-4'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus commodo luctus venenatis. Integer rhoncus iaculis quam, et iaculis odio sagittis consequat. In at enim justo. Ut in lacus a sem iaculis accumsan.
              </p>
              <p className='font-inter text-[12px] text-gray2 pb-2'>31 January 2030</p>
            </div>
          </div>
          <div className='rounded-lg w-[384px] shadow-md shadow-black/40 sm:w-[430px] lg:w-[384px]'>
            <div className='w-[384px] overflow-hidden rounded-t-md h-[240px] sm:w-[430px] sm:h-[270px] lg:w-[384px] lg:h-[240px]'>
              <img src={artikel1} alt={artikel1} className='w-[384px] h-[240px] sm:w-[430px] sm:h-[270px] lg:w-[384px] lg:h-[240px]'/>
            </div>
            <div className='w-[352px] mx-auto sm:w-[370px] lg:w-[352px]'>
              <Link to='/detail-cerita-kisah'>
                <p className='font-century font-700 text-2xl leading-[30px] my-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>  
              </Link>
              <p className='limit-content font-inter font-400 text-gray2 leading-6 mb-4'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus commodo luctus venenatis. Integer rhoncus iaculis quam, et iaculis odio sagittis consequat. In at enim justo. Ut in lacus a sem iaculis accumsan.
              </p>
              <p className='font-inter text-[12px] text-gray2 pb-2'>31 January 2030</p>
            </div>
          </div>
          <div className='rounded-lg w-[384px] shadow-md shadow-black/40 sm:w-[430px] lg:w-[384px]'>
            <div className='w-[384px] overflow-hidden rounded-t-md h-[240px] sm:w-[430px] sm:h-[270px] lg:w-[384px] lg:h-[240px]'>
              <img src={artikel1} alt={artikel1} className='w-[384px] h-[240px] sm:w-[430px] sm:h-[270px] lg:w-[384px] lg:h-[240px]'/>
            </div>
            <div className='w-[352px] mx-auto sm:w-[370px] lg:w-[352px]'>
              <Link to='/detail-cerita-kisah'>
                <p className='font-century font-700 text-2xl leading-[30px] my-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>  
              </Link>
              <p className='limit-content font-inter font-400 text-gray2 leading-6 mb-4'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus commodo luctus venenatis. Integer rhoncus iaculis quam, et iaculis odio sagittis consequat. In at enim justo. Ut in lacus a sem iaculis accumsan.
              </p>
              <p className='font-inter text-[12px] text-gray2 pb-2'>31 January 2030</p>
            </div>
          </div>
          <div className='rounded-lg w-[384px] shadow-md shadow-black/40 sm:w-[430px] lg:w-[384px]'>
            <div className='w-[384px] overflow-hidden rounded-t-md h-[240px] sm:w-[430px] sm:h-[270px] lg:w-[384px] lg:h-[240px]'>
              <img src={artikel1} alt={artikel1} className='w-[384px] h-[240px] sm:w-[430px] sm:h-[270px] lg:w-[384px] lg:h-[240px]'/>
            </div>
            <div className='w-[352px] mx-auto sm:w-[370px] lg:w-[352px]'>
              <Link to='/detail-cerita-kisah'>
                <p className='font-century font-700 text-2xl leading-[30px] my-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>  
              </Link>
              <p className='limit-content font-inter font-400 text-gray2 leading-6 mb-4'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus commodo luctus venenatis. Integer rhoncus iaculis quam, et iaculis odio sagittis consequat. In at enim justo. Ut in lacus a sem iaculis accumsan.
              </p>
              <p className='font-inter text-[12px] text-gray2 pb-2'>31 January 2030</p>
            </div>
          </div>
          <div className='rounded-lg w-[384px] shadow-md shadow-black/40 sm:w-[430px] lg:w-[384px]'>
            <div className='w-[384px] overflow-hidden rounded-t-md h-[240px] sm:w-[430px] sm:h-[270px] lg:w-[384px] lg:h-[240px]'>
              <img src={artikel1} alt={artikel1} className='w-[384px] h-[240px] sm:w-[430px] sm:h-[270px] lg:w-[384px] lg:h-[240px]'/>
            </div>
            <div className='w-[352px] mx-auto sm:w-[370px] lg:w-[352px]'>
              <Link to='/detail-cerita-kisah'>
                <p className='font-century font-700 text-2xl leading-[30px] my-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>  
              </Link>
              <p className='limit-content font-inter font-400 text-gray2 leading-6 mb-4'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus commodo luctus venenatis. Integer rhoncus iaculis quam, et iaculis odio sagittis consequat. In at enim justo. Ut in lacus a sem iaculis accumsan.
              </p>
              <p className='font-inter text-[12px] text-gray2 pb-2'>31 January 2030</p>
            </div>
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
      <footer>
        <Footer/>
      </footer>
    </section>
  )
}

export default MoreStory