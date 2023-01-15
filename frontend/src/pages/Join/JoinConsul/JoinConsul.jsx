import React from 'react'
import { Link } from 'react-router-dom'
import { Footer, Navbar } from '../../../components'
import {AiFillLike} from 'react-icons/ai'
import {MdWork} from 'react-icons/md'
import {FaCalendarAlt, FaChevronRight, FaChevronLeft} from 'react-icons/fa'
import { profile } from '../../../assets/image'

const JoinConsul = () => {
  return (
    <section>
      <nav>
        <Navbar/>
      </nav>
      <div className='container mb-20'>
        <div className='mt-10'>
            <div className='flex items-center font-inter font-600 mb-5 ml-2 sm:ml-0'>
                <Link to='/join'><p className='text-[#009FCC] mr-[15.33px]'>Join Yuk</p></Link>
                <FaChevronRight className='text-gray1'/>
                <p className='text-gray2 ml-[14.67px]'>Konsultasi</p>
            </div>
          <div className='flex items-center justify-between mb-6 ml-2 sm:ml-0'>
            <p className='font-century font-700 text-3xl text-dark sm:text-4xl'>Konsultasi</p>
          </div>
          <div className='flex flex-wrap justify-center gap-6'>
            <div className=''>
              <div className='flex flex-col items-center border-[1px] border-gray1 rounded-md w-[284px] h-[248px] p-[16px]'>
                <img src={profile} alt={profile} className='w-[80px] h-[80px] rounded-full mb-2'/>
                <p className='font-inter font-600 text-[18px] text-dark mb-1'>dr. Lorem Ipsum</p>
                <p className='font-inter text-gray2'>Keahlian Lorem Ipsum</p>
                <div className='font-inter text-[14px] flex items-center text-gray2 mb-1'>
                  <MdWork className='mr-[9.67px] text-[17px]'/>
                  <p>6 Tahun</p>
                </div>
                <div className='font-inter text-[14px] flex items-center text-gray2 mb-1'>
                  <AiFillLike className='mr-[9.67px] text-[17px]'/>
                  <p>4.9/5</p>
                </div>
                <div className='font-inter text-[14px] flex items-center text-gray2'>
                  <FaCalendarAlt className='mr-[9.67px] text-[17px]'/>
                  <p>Senin-Rabu 07:00-11:00</p>
                </div>
              </div>
            </div>
            <div className=''>
              <div className='flex flex-col items-center border-[1px] border-gray1 rounded-md w-[284px] h-[248px] p-[16px]'>
                <img src={profile} alt={profile} className='w-[80px] h-[80px] rounded-full mb-2'/>
                <p className='font-inter font-600 text-[18px] text-dark mb-1'>dr. Lorem Ipsum</p>
                <p className='font-inter text-gray2'>Keahlian Lorem Ipsum</p>
                <div className='font-inter text-[14px] flex items-center text-gray2 mb-1'>
                  <MdWork className='mr-[9.67px] text-[17px]'/>
                  <p>6 Tahun</p>
                </div>
                <div className='font-inter text-[14px] flex items-center text-gray2 mb-1'>
                  <AiFillLike className='mr-[9.67px] text-[17px]'/>
                  <p>4.9/5</p>
                </div>
                <div className='font-inter text-[14px] flex items-center text-gray2'>
                  <FaCalendarAlt className='mr-[9.67px] text-[17px]'/>
                  <p>Senin-Rabu 07:00-11:00</p>
                </div>
              </div>
            </div>
            <div className=''>
              <div className='flex flex-col items-center border-[1px] border-gray1 rounded-md w-[284px] h-[248px] p-[16px]'>
                <img src={profile} alt={profile} className='w-[80px] h-[80px] rounded-full mb-2'/>
                <p className='font-inter font-600 text-[18px] text-dark mb-1'>dr. Lorem Ipsum</p>
                <p className='font-inter text-gray2'>Keahlian Lorem Ipsum</p>
                <div className='font-inter text-[14px] flex items-center text-gray2 mb-1'>
                  <MdWork className='mr-[9.67px] text-[17px]'/>
                  <p>6 Tahun</p>
                </div>
                <div className='font-inter text-[14px] flex items-center text-gray2 mb-1'>
                  <AiFillLike className='mr-[9.67px] text-[17px]'/>
                  <p>4.9/5</p>
                </div>
                <div className='font-inter text-[14px] flex items-center text-gray2'>
                  <FaCalendarAlt className='mr-[9.67px] text-[17px]'/>
                  <p>Senin-Rabu 07:00-11:00</p>
                </div>
              </div>
            </div>
            <div className=''>
              <div className='flex flex-col items-center border-[1px] border-gray1 rounded-md w-[284px] h-[248px] p-[16px]'>
                <img src={profile} alt={profile} className='w-[80px] h-[80px] rounded-full mb-2'/>
                <p className='font-inter font-600 text-[18px] text-dark mb-1'>dr. Lorem Ipsum</p>
                <p className='font-inter text-gray2'>Keahlian Lorem Ipsum</p>
                <div className='font-inter text-[14px] flex items-center text-gray2 mb-1'>
                  <MdWork className='mr-[9.67px] text-[17px]'/>
                  <p>6 Tahun</p>
                </div>
                <div className='font-inter text-[14px] flex items-center text-gray2 mb-1'>
                  <AiFillLike className='mr-[9.67px] text-[17px]'/>
                  <p>4.9/5</p>
                </div>
                <div className='font-inter text-[14px] flex items-center text-gray2'>
                  <FaCalendarAlt className='mr-[9.67px] text-[17px]'/>
                  <p>Senin-Rabu 07:00-11:00</p>
                </div>
              </div>
            </div>
            <div className=''>
              <div className='flex flex-col items-center border-[1px] border-gray1 rounded-md w-[284px] h-[248px] p-[16px]'>
                <img src={profile} alt={profile} className='w-[80px] h-[80px] rounded-full mb-2'/>
                <p className='font-inter font-600 text-[18px] text-dark mb-1'>dr. Lorem Ipsum</p>
                <p className='font-inter text-gray2'>Keahlian Lorem Ipsum</p>
                <div className='font-inter text-[14px] flex items-center text-gray2 mb-1'>
                  <MdWork className='mr-[9.67px] text-[17px]'/>
                  <p>6 Tahun</p>
                </div>
                <div className='font-inter text-[14px] flex items-center text-gray2 mb-1'>
                  <AiFillLike className='mr-[9.67px] text-[17px]'/>
                  <p>4.9/5</p>
                </div>
                <div className='font-inter text-[14px] flex items-center text-gray2'>
                  <FaCalendarAlt className='mr-[9.67px] text-[17px]'/>
                  <p>Senin-Rabu 07:00-11:00</p>
                </div>
              </div>
            </div>
            <div className=''>
              <div className='flex flex-col items-center border-[1px] border-gray1 rounded-md w-[284px] h-[248px] p-[16px]'>
                <img src={profile} alt={profile} className='w-[80px] h-[80px] rounded-full mb-2'/>
                <p className='font-inter font-600 text-[18px] text-dark mb-1'>dr. Lorem Ipsum</p>
                <p className='font-inter text-gray2'>Keahlian Lorem Ipsum</p>
                <div className='font-inter text-[14px] flex items-center text-gray2 mb-1'>
                  <MdWork className='mr-[9.67px] text-[17px]'/>
                  <p>6 Tahun</p>
                </div>
                <div className='font-inter text-[14px] flex items-center text-gray2 mb-1'>
                  <AiFillLike className='mr-[9.67px] text-[17px]'/>
                  <p>4.9/5</p>
                </div>
                <div className='font-inter text-[14px] flex items-center text-gray2'>
                  <FaCalendarAlt className='mr-[9.67px] text-[17px]'/>
                  <p>Senin-Rabu 07:00-11:00</p>
                </div>
              </div>
            </div>
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
      <footer>
        <Footer/>
      </footer>
    </section>
  )
}

export default JoinConsul