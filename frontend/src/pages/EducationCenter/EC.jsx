import React from 'react'
import { Link } from 'react-router-dom'
import {AiOutlineRight} from 'react-icons/ai'
import { Footer } from '../../components'
import {artikel1} from '../../assets/image'

const EC = () => {
  return (
    <section className='bg-white'>
      <div className='container pb-7 pt-4'>
        {/* artikel ilmiah */}
        <div className='mt-2 mb-3 flex items-center justify-between'>
          <p className='font-century text-4xl font-700 text-dark'>Artikel Ilmiah</p>
          <div className='my-1 flex justify-end mr-3'>
            <Link to='/' className='flex items-center font-inter text-[#009FCC] font-600 duration-150 hover:opacity-70'>
              More
              <AiOutlineRight className='ml-0.5'/>
            </Link>
          </div>
        </div>
        <div className='flex flex-wrap justify-around'>
          <div className='rounded-lg w-[384px] shadow-md shadow-black/40 mb-4'>
            <div className='w-[384px] overflow-hidden rounded-t-md h-[240px]'>
              <img src={artikel1} alt={artikel1} className='w-[384px] h-[240px]'/>
            </div>
            <div className='w-[352px] mx-auto'>
              <Link to=''>
                <p className='font-century font-700 text-2xl leading-[30px] my-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>  
              </Link>
              <p className='limit-content font-inter font-400 text-[#6B7280] leading-6 mb-2'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus commodo luctus venenatis. Integer rhoncus iaculis quam, et iaculis odio sagittis consequat. In at enim justo. Ut in lacus a sem iaculis accumsan.
              </p>
              <p className='font-inter text-[12px] text-[#6B7280] pb-2'>31 January 2030</p>
            </div>
          </div>
          <div className='rounded-lg w-[384px] shadow-md shadow-black/40 mb-4'>
            <div className='w-[384px] overflow-hidden rounded-t-md h-[240px]'>
              <img src={artikel1} alt={artikel1} className='w-[384px] h-[240px]'/>
            </div>
            <div className='w-[352px] mx-auto'>
              <Link to=''>
                <p className='font-century font-700 text-2xl leading-[30px] my-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>  
              </Link>
              <p className='limit-content font-inter font-400 text-[#6B7280] leading-6 mb-2'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus commodo luctus venenatis. Integer rhoncus iaculis quam, et iaculis odio sagittis consequat. In at enim justo. Ut in lacus a sem iaculis accumsan.
              </p>
              <p className='font-inter text-[12px] text-[#6B7280] pb-2'>31 January 2030</p>
            </div>
          </div>
          <div className='rounded-lg w-[384px] shadow-md shadow-black/40 mb-4'>
            <div className='w-[384px] overflow-hidden rounded-t-md h-[240px]'>
              <img src={artikel1} alt={artikel1} className='w-[384px] h-[240px]'/>
            </div>
            <div className='w-[352px] mx-auto'>
              <Link to=''>
                <p className='font-century font-700 text-2xl leading-[30px] my-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>  
              </Link>
              <p className='limit-content font-inter font-400 text-[#6B7280] leading-6 mb-2'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus commodo luctus venenatis. Integer rhoncus iaculis quam, et iaculis odio sagittis consequat. In at enim justo. Ut in lacus a sem iaculis accumsan.
              </p>
              <p className='font-inter text-[12px] text-[#6B7280] pb-2'>31 January 2030</p>
            </div>
          </div>
        </div>
        {/* acara & kegiatan */}
        <div className='mt-6 mb-3 flex items-center justify-between'>
          <p className='font-century text-4xl font-700 text-dark'>Acara & Kegiatan</p>
          <div className='my-1 flex justify-end mr-3'>
            <Link to='/' className='flex items-center font-inter text-[#009FCC] font-600 duration-150 hover:opacity-70'>
              More
              <AiOutlineRight className='ml-0.5'/>
            </Link>
          </div>
        </div>
        <div className='flex flex-wrap justify-around'>
          <div className='rounded-lg w-[384px] shadow-md shadow-black/40 mb-4'>
            <div className='w-[384px] overflow-hidden rounded-t-md h-[240px]'>
              <img src={artikel1} alt={artikel1} className='w-[384px] h-[240px]'/>
            </div>
            <div className='w-[352px] mx-auto'>
              <Link to=''>
                <p className='font-century font-700 text-2xl leading-[30px] my-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>  
              </Link>
              <p className='limit-content font-inter font-400 text-[#6B7280] leading-6 mb-2'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus commodo luctus venenatis. Integer rhoncus iaculis quam, et iaculis odio sagittis consequat. In at enim justo. Ut in lacus a sem iaculis accumsan.
              </p>
              <p className='font-inter text-[12px] text-[#6B7280] pb-2'>31 January 2030</p>
            </div>
          </div>
          <div className='rounded-lg w-[384px] shadow-md shadow-black/40 mb-4'>
            <div className='w-[384px] overflow-hidden rounded-t-md h-[240px]'>
              <img src={artikel1} alt={artikel1} className='w-[384px] h-[240px]'/>
            </div>
            <div className='w-[352px] mx-auto'>
              <Link to=''>
                <p className='font-century font-700 text-2xl leading-[30px] my-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>  
              </Link>
              <p className='limit-content font-inter font-400 text-[#6B7280] leading-6 mb-2'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus commodo luctus venenatis. Integer rhoncus iaculis quam, et iaculis odio sagittis consequat. In at enim justo. Ut in lacus a sem iaculis accumsan.
              </p>
              <p className='font-inter text-[12px] text-[#6B7280] pb-2'>31 January 2030</p>
            </div>
          </div>
          <div className='rounded-lg w-[384px] shadow-md shadow-black/40 mb-4'>
            <div className='w-[384px] overflow-hidden rounded-t-md h-[240px]'>
              <img src={artikel1} alt={artikel1} className='w-[384px] h-[240px]'/>
            </div>
            <div className='w-[352px] mx-auto'>
              <Link to=''>
                <p className='font-century font-700 text-2xl leading-[30px] my-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>  
              </Link>
              <p className='limit-content font-inter font-400 text-[#6B7280] leading-6 mb-2'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus commodo luctus venenatis. Integer rhoncus iaculis quam, et iaculis odio sagittis consequat. In at enim justo. Ut in lacus a sem iaculis accumsan.
              </p>
              <p className='font-inter text-[12px] text-[#6B7280] pb-2'>31 January 2030</p>
            </div>
          </div>
        </div>
        {/* cerita kisah / timbal balik */}
        <div className='mt-6 mb-3 flex items-center justify-between'>
          <p className='font-century text-4xl font-700 text-dark'>Cerita Kisah / Timbal Balik</p>
          <div className='my-1 flex justify-end mr-3'>
            <Link to='/' className='flex items-center font-inter text-[#009FCC] font-600 duration-150 hover:opacity-70'>
              More
              <AiOutlineRight className='ml-0.5'/>
            </Link>
          </div>
        </div>
        <div className='flex flex-wrap justify-around'>
          <div className='rounded-lg w-[384px] shadow-md shadow-black/40 mb-4'>
            <div className='w-[384px] overflow-hidden rounded-t-md h-[240px]'>
              <img src={artikel1} alt={artikel1} className='w-[384px] h-[240px]'/>
            </div>
            <div className='w-[352px] mx-auto'>
              <Link to=''>
                <p className='font-century font-700 text-2xl leading-[30px] my-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>  
              </Link>
              <p className='limit-content font-inter font-400 text-[#6B7280] leading-6 mb-2'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus commodo luctus venenatis. Integer rhoncus iaculis quam, et iaculis odio sagittis consequat. In at enim justo. Ut in lacus a sem iaculis accumsan.
              </p>
              <p className='font-inter text-[12px] text-[#6B7280] pb-2'>31 January 2030</p>
            </div>
          </div>
          <div className='rounded-lg w-[384px] shadow-md shadow-black/40 mb-4'>
            <div className='w-[384px] overflow-hidden rounded-t-md h-[240px]'>
              <img src={artikel1} alt={artikel1} className='w-[384px] h-[240px]'/>
            </div>
            <div className='w-[352px] mx-auto'>
              <Link to=''>
                <p className='font-century font-700 text-2xl leading-[30px] my-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>  
              </Link>
              <p className='limit-content font-inter font-400 text-[#6B7280] leading-6 mb-2'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus commodo luctus venenatis. Integer rhoncus iaculis quam, et iaculis odio sagittis consequat. In at enim justo. Ut in lacus a sem iaculis accumsan.
              </p>
              <p className='font-inter text-[12px] text-[#6B7280] pb-2'>31 January 2030</p>
            </div>
          </div>
          <div className='rounded-lg w-[384px] shadow-md shadow-black/40 mb-4'>
            <div className='w-[384px] overflow-hidden rounded-t-md h-[240px]'>
              <img src={artikel1} alt={artikel1} className='w-[384px] h-[240px]'/>
            </div>
            <div className='w-[352px] mx-auto'>
              <Link to=''>
                <p className='font-century font-700 text-2xl leading-[30px] my-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>  
              </Link>
              <p className='limit-content font-inter font-400 text-[#6B7280] leading-6 mb-2'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus commodo luctus venenatis. Integer rhoncus iaculis quam, et iaculis odio sagittis consequat. In at enim justo. Ut in lacus a sem iaculis accumsan.
              </p>
              <p className='font-inter text-[12px] text-[#6B7280] pb-2'>31 January 2030</p>
            </div>
          </div>
        </div>
      </div>
      <footer className='mt-auto'>
        <Footer/>
      </footer>
    </section>
  )
}

export default EC