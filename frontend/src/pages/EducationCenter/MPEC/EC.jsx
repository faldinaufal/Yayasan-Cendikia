import React from 'react'
import { Link } from 'react-router-dom'
import {AiOutlineRight} from 'react-icons/ai'
import { Footer, Navbar } from '../../../components'
import {artikel1} from '../../../assets/image'

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
            <Link to='/pusat-edukasi-artikel' className='flex items-center font-inter text-[#009FCC] font-600 duration-150 hover:opacity-70'>
              More
              <AiOutlineRight className='ml-0.5'/>
            </Link>
          </div>
        </div>
        <div className='flex flex-wrap justify-center gap-6'>
          <div className='rounded-lg w-[384px]  shadow-card sm:w-[430px] lg:w-[384px]'>
            <div className='w-[384px] overflow-hidden rounded-t-md h-[240px] sm:w-[430px] sm:h-[270px] lg:w-[384px] lg:h-[240px]'>
              <img src={artikel1} alt={artikel1} className='w-[384px] h-[240px] sm:w-[430px] sm:h-[270px] lg:w-[384px] lg:h-[240px]'/>
            </div>
            <div className='w-[352px] mx-auto sm:w-[370px] lg:w-[352px]'>
              <Link to='/detail-artikel'>
                <p className='font-century font-700 text-2xl leading-[30px] my-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>  
              </Link>
              <p className='limit-content font-inter font-400 text-gray2 leading-6 mb-4'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus commodo luctus venenatis. Integer rhoncus iaculis quam, et iaculis odio sagittis consequat. In at enim justo. Ut in lacus a sem iaculis accumsan.
              </p>
              <p className='font-inter text-[12px] text-gray2 pb-2'>31 January 2030</p>
            </div>
          </div>
          <div className='rounded-lg w-[384px]  shadow-card sm:w-[430px] lg:w-[384px]'>
            <div className='w-[384px] overflow-hidden rounded-t-md h-[240px] sm:w-[430px] sm:h-[270px] lg:w-[384px] lg:h-[240px]'>
              <img src={artikel1} alt={artikel1} className='w-[384px] h-[240px] sm:w-[430px] sm:h-[270px] lg:w-[384px] lg:h-[240px]'/>
            </div>
            <div className='w-[352px] mx-auto sm:w-[370px] lg:w-[352px]'>
              <Link to='/detail-artikel'>
                <p className='font-century font-700 text-2xl leading-[30px] my-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>  
              </Link>
              <p className='limit-content font-inter font-400 text-gray2 leading-6 mb-4'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus commodo luctus venenatis. Integer rhoncus iaculis quam, et iaculis odio sagittis consequat. In at enim justo. Ut in lacus a sem iaculis accumsan.
              </p>
              <p className='font-inter text-[12px] text-gray2 pb-2'>31 January 2030</p>
            </div>
          </div>
          <div className='rounded-lg w-[384px]  shadow-card sm:w-[430px] lg:w-[384px]'>
            <div className='w-[384px] overflow-hidden rounded-t-md h-[240px] sm:w-[430px] sm:h-[270px] lg:w-[384px] lg:h-[240px]'>
              <img src={artikel1} alt={artikel1} className='w-[384px] h-[240px] sm:w-[430px] sm:h-[270px] lg:w-[384px] lg:h-[240px]'/>
            </div>
            <div className='w-[352px] mx-auto sm:w-[370px] lg:w-[352px]'>
              <Link to='/detail-artikel'>
                <p className='font-century font-700 text-2xl leading-[30px] my-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>  
              </Link>
              <p className='limit-content font-inter font-400 text-gray2 leading-6 mb-4'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus commodo luctus venenatis. Integer rhoncus iaculis quam, et iaculis odio sagittis consequat. In at enim justo. Ut in lacus a sem iaculis accumsan.
              </p>
              <p className='font-inter text-[12px] text-gray2 pb-2'>31 January 2030</p>
            </div>
          </div>
        </div>
        {/* acara & kegiatan */}
        <div className='mt-20 mb-6 flex items-center justify-between'>
          <p className='font-century text-4xl font-700 text-dark'>Acara & Kegiatan</p>
          <div className='my-1 flex justify-end mr-3'>
            <Link to='/pusat-edukasi-acara' className='flex items-center font-inter text-[#009FCC] font-600 duration-150 hover:opacity-70'>
              More
              <AiOutlineRight className='ml-0.5'/>
            </Link>
          </div>
        </div>
        <div className='flex flex-wrap justify-center gap-6'>
          <div className='rounded-lg w-[384px]  shadow-card sm:w-[430px] lg:w-[384px]'>
            <div className='w-[384px] overflow-hidden rounded-t-md h-[240px] sm:w-[430px] sm:h-[270px] lg:w-[384px] lg:h-[240px]'>
              <img src={artikel1} alt={artikel1} className='w-[384px] h-[240px] sm:w-[430px] sm:h-[270px] lg:w-[384px] lg:h-[240px]'/>
            </div>
            <div className='w-[352px] mx-auto sm:w-[370px] lg:w-[352px]'>
              <Link to='/detail-acara'>
                <p className='font-century font-700 text-2xl leading-[30px] my-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>  
              </Link>
              <p className='limit-content font-inter font-400 text-gray2 leading-6 mb-4'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus commodo luctus venenatis. Integer rhoncus iaculis quam, et iaculis odio sagittis consequat. In at enim justo. Ut in lacus a sem iaculis accumsan.
              </p>
              <p className='font-inter text-[12px] text-gray2 pb-2'>31 January 2030</p>
            </div>
          </div>
          <div className='rounded-lg w-[384px]  shadow-card sm:w-[430px] lg:w-[384px]'>
            <div className='w-[384px] overflow-hidden rounded-t-md h-[240px] sm:w-[430px] sm:h-[270px] lg:w-[384px] lg:h-[240px]'>
              <img src={artikel1} alt={artikel1} className='w-[384px] h-[240px] sm:w-[430px] sm:h-[270px] lg:w-[384px] lg:h-[240px]'/>
            </div>
            <div className='w-[352px] mx-auto sm:w-[370px] lg:w-[352px]'>
              <Link to='/detail-acara'>
                <p className='font-century font-700 text-2xl leading-[30px] my-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>  
              </Link>
              <p className='limit-content font-inter font-400 text-gray2 leading-6 mb-4'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus commodo luctus venenatis. Integer rhoncus iaculis quam, et iaculis odio sagittis consequat. In at enim justo. Ut in lacus a sem iaculis accumsan.
              </p>
              <p className='font-inter text-[12px] text-gray2 pb-2'>31 January 2030</p>
            </div>
          </div>
          <div className='rounded-lg w-[384px]  shadow-card sm:w-[430px] lg:w-[384px]'>
            <div className='w-[384px] overflow-hidden rounded-t-md h-[240px] sm:w-[430px] sm:h-[270px] lg:w-[384px] lg:h-[240px]'>
              <img src={artikel1} alt={artikel1} className='w-[384px] h-[240px] sm:w-[430px] sm:h-[270px] lg:w-[384px] lg:h-[240px]'/>
            </div>
            <div className='w-[352px] mx-auto sm:w-[370px] lg:w-[352px]'>
              <Link to='/detail-acara'>
                <p className='font-century font-700 text-2xl leading-[30px] my-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>  
              </Link>
              <p className='limit-content font-inter font-400 text-gray2 leading-6 mb-4'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus commodo luctus venenatis. Integer rhoncus iaculis quam, et iaculis odio sagittis consequat. In at enim justo. Ut in lacus a sem iaculis accumsan.
              </p>
              <p className='font-inter text-[12px] text-gray2 pb-2'>31 January 2030</p>
            </div>
          </div>
        </div>
        {/* cerita kisah / timbal balik */}
        <div className='mt-20 mb-6 flex items-center justify-between'>
          <p className='font-century text-4xl font-700 text-dark'>Cerita Kisah / Timbal Balik</p>
          <div className='my-1 flex justify-end mr-3'>
            <Link to='/pusat-edukasi-cerita-kisah' className='flex items-center font-inter text-[#009FCC] font-600 duration-150 hover:opacity-70'>
              More
              <AiOutlineRight className='ml-0.5'/>
            </Link>
          </div>
        </div>
        <div className='flex flex-wrap justify-center gap-6 mb-20'>
          <div className='rounded-lg w-[384px]  shadow-card sm:w-[430px] lg:w-[384px]'>
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
          <div className='rounded-lg w-[384px]  shadow-card sm:w-[430px] lg:w-[384px]'>
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
          <div className='rounded-lg w-[384px]  shadow-card sm:w-[430px] lg:w-[384px]'>
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
      </div>
      <footer>
        <Footer/>
      </footer>
    </section>
  )
}

export default MPEC