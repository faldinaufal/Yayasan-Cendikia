import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import { Footer } from '../../components'
import {AiOutlineRight, AiFillLike} from 'react-icons/ai'
import {IoClose} from 'react-icons/io5'
import {MdWork} from 'react-icons/md'
import {FaCalendarAlt} from 'react-icons/fa'
import { profile, kerjasama } from '../../assets/image'
import ContactUs from '../ContactUs/ContactUs'

const Join = () => {
  const [open, setOpen] = useState(false)
  return (
    <section>
      <div className='container mb-20'>
        <div className='mt-10'>
          <div className='flex items-center justify-between mb-6'>
            <p className='font-century font-700 text-4xl text-dark'>Terapis</p>
            <Link to='' className='flex items-center text-[#009FCC] font-600 font-inter duration-150 hover:opacity-80'>
              More
              <AiOutlineRight className='text-dark ml-1'/>
            </Link>
          </div>
          <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 place-items-center'>
            <div className=''>
              <div className='flex border-[1px] border-gray1 rounded-md w-[384px] h-[160px] p-[16px]'>
                <img src={profile} alt={profile} className='w-[80px] h-[80px] rounded-full'/>
                <div className='font-inter w-[264px] ml-2'>
                  <p className='text-lg font-600 text-dark'>dr. Lorem Ipsum</p>
                  <p className='text-gray2'>Keahlian Lorem Ipsum</p>
                  <div className='text-gray2 text-[14px] font-600'>
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
            <div className=''>
              <div className='flex border-[1px] border-gray1 rounded-md w-[384px] h-[160px] p-[16px]'>
                <img src={profile} alt={profile} className='w-[80px] h-[80px] rounded-full'/>
                <div className='font-inter w-[264px] ml-2'>
                  <p className='text-lg font-600 text-[#262626]'>dr. Lorem Ipsum</p>
                  <p className='text-gray2'>Keahlian Lorem Ipsum</p>
                  <div className='text-gray2 text-[14px] font-600'>
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
            <div className=''>
              <div className='flex border-[1px] border-gray1 rounded-md w-[384px] h-[160px] p-[16px]'>
                <img src={profile} alt={profile} className='w-[80px] h-[80px] rounded-full'/>
                <div className='font-inter w-[264px] ml-2'>
                  <p className='text-lg font-600 text-[#262626]'>dr. Lorem Ipsum</p>
                  <p className='text-gray2'>Keahlian Lorem Ipsum</p>
                  <div className='text-gray2 text-[14px] font-600'>
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
        <div className='my-20'>
          <div className='flex items-center justify-between mb-6'>
            <p className='font-century font-700 text-4xl text-dark my-5'>Konsultasi</p>
            <Link to='' className='flex items-center text-[#009FCC] font-600 font-inter duration-150 hover:opacity-80'>
              More
              <AiOutlineRight className='text-dark ml-1'/>
            </Link>
          </div>
          <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-items-center'>
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
        <div className='relative flex justify-center bg-dark rounded-2xl lg:justify-start lg:h-[288px] mb-20'>
          <div className='w-[548px] m-10'>
            <div>
              <p className='font-century font-700 text-[40px] text-linear w-[223px] mb-4'>Kerja Sama</p>
              <p className='font-century font-700 text-[18px] leading-7 text-gray1'>Butuh konsultan untuk lembaga/instansi di tempat anda? Atau kerja sama dalam hal lainnya? Silahkan hubungi kami!</p>
              <a href="#hubungi-kami" onClick={()=>setOpen(!open)} className='hover:opacity-90 duration-200 mt-6 rounded-sm w-[164px] bg-[#009FCC] p-3 text-white font-inter font-700 flex items-center justify-center'>
                Hubungi Kami
                <AiOutlineRight className='ml-2'/>
              </a>
            </div>
          </div>
          <div className='hidden bg-vector w-[588px] h-[288px] rounded-2xl lg:block'>
            <div className='m-10 flex items-center justify-end'>
              <img src={kerjasama} alt={kerjasama} className='w-[208px] h-[208px]'/>
            </div>
          </div>
          {open && <div id='hubungi-kami' className='absolute -top-40 lg:left-1/3 z-50'>
            <IoClose onClick={()=>setOpen(!open)} className='z-50 text-slate-700 relative -bottom-12 left-[390px] cursor-pointer duration-200 hover:text-white text-4xl'/>
            <ContactUs className='z-50'/>
          </div>}
          {open && <div id='hubungi-kami' className='absolute bg-black h-[550px] -top-40 bottom-0 opacity-60 w-full'></div>}
        </div>
      </div>
      <footer>
        <Footer/>
      </footer>
    </section>
  )
}

export default Join