import React from 'react'
import { Link } from 'react-router-dom'
import { Footer } from '../../components'
import {AiOutlineRight, AiFillLike} from 'react-icons/ai'
import {MdWork} from 'react-icons/md'
import {FaCalendarAlt} from 'react-icons/fa'
import { profile } from '../../assets/image'

const Join = () => {
  return (
    <section>
      <div className='container border-2 border-black'>
        <div>
          <div className='flex items-center justify-between'>
            <p className='font-century font-700 text-4xl text-[#262626] my-5'>Terapis</p>
            <Link to='' className='flex items-center text-[#009FCC] font-600 font-inter duration-150 hover:opacity-80'>
              More
              <AiOutlineRight className='text-[#262626] ml-1'/>
            </Link>
          </div>
          <div className='flex flex-wrap justify-center'>
            <div className='mr-3 mb-3'>
              <div className='flex border-[1px] border-[#9CA3AF] rounded-md w-[384px] p-[16px]'>
                <img src={profile} alt={profile} className='w-[80px] h-[80px] rounded-full'/>
                <div className='font-inter w-[264px] ml-2'>
                  <p className='text-lg font-600 text-[#262626]'>dr. Lorem Ipsum</p>
                  <p className='text-[#6B7280]'>Keahlian Lorem Ipsum</p>
                  <div className='text-[#6B7280] text-[14px] font-600'>
                    <div className='flex items-center'>
                      <MdWork className='text-[17px] mr-2'/>
                      <p>6 Tahun</p>
                    </div>
                    <div className='flex items-center'>
                      <AiFillLike className='text-[17px] mr-2'/>
                      <p>4.9/5</p>
                    </div>
                    <div className='flex items-center'>
                      <FaCalendarAlt className='text-[17px] mr-2'/>
                      <p>Senin-Rabu 07:00-11:00</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='mr-3 mb-3'>
              <div className='flex border-[1px] border-[#9CA3AF] rounded-md w-[384px] p-[16px]'>
                <img src={profile} alt={profile} className='w-[80px] h-[80px] rounded-full'/>
                <div className='font-inter w-[264px] ml-2'>
                  <p className='text-lg font-600 text-[#262626]'>dr. Lorem Ipsum</p>
                  <p className='text-[#6B7280]'>Keahlian Lorem Ipsum</p>
                  <div className='text-[#6B7280] text-[14px] font-600'>
                    <div className='flex items-center'>
                      <MdWork className='text-[17px] mr-2'/>
                      <p>6 Tahun</p>
                    </div>
                    <div className='flex items-center'>
                      <AiFillLike className='text-[17px] mr-2'/>
                      <p>4.9/5</p>
                    </div>
                    <div className='flex items-center'>
                      <FaCalendarAlt className='text-[17px] mr-2'/>
                      <p>Senin-Rabu 07:00-11:00</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='mr-3'>
              <div className='flex border-[1px] border-[#9CA3AF] rounded-md w-[384px] p-[16px]'>
                <img src={profile} alt={profile} className='w-[80px] h-[80px] rounded-full'/>
                <div className='font-inter w-[264px] ml-2'>
                  <p className='text-lg font-600 text-[#262626]'>dr. Lorem Ipsum</p>
                  <p className='text-[#6B7280]'>Keahlian Lorem Ipsum</p>
                  <div className='text-[#6B7280] text-[14px] font-600'>
                    <div className='flex items-center'>
                      <MdWork className='text-[17px] mr-2'/>
                      <p>6 Tahun</p>
                    </div>
                    <div className='flex items-center'>
                      <AiFillLike className='text-[17px] mr-2'/>
                      <p>4.9/5</p>
                    </div>
                    <div className='flex items-center'>
                      <FaCalendarAlt className='text-[17px] mr-2'/>
                      <p>Senin-Rabu 07:00-11:00</p>
                    </div>
                  </div>
                </div>
              </div>
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

export default Join