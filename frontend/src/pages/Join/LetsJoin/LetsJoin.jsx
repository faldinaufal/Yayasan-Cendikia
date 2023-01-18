import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ConsultationCard, Footer, Navbar, TherapistCard } from '../../../components'
import {AiOutlineRight, AiFillLike} from 'react-icons/ai'
import {MdWork} from 'react-icons/md'
import {FaCalendarAlt} from 'react-icons/fa'
import { profile, kerjasama } from '../../../assets/image'
import axios from 'axios'

const LetsJoin = () => {

  const [data, setData] = useState([])

  useEffect(() => {
      const Fetch = async () => {
          try {
              const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/users?filters[userRole][$eq]=Terapis&populate=*`)
              setData(res.data)
          } catch (error) {
              console.log(error);
          }
          }
      Fetch()
  },[])

  return (
    <section>
      <nav>
        <Navbar/>
      </nav>
      <div className='container mb-20'>
        <div className='mt-10'>
          <div className='flex items-center justify-between mb-6 mx-2 sm:mx-0'>
            <p className='font-century font-700 text-3xl text-dark sm:text-4xl'>Terapis</p>
            <a href={`/${process.env.REACT_APP_JOIN}/therapist`} className='flex items-center text-[#009FCC] font-600 font-inter duration-150 hover:opacity-80'>
              More
              <AiOutlineRight className='text-[#009FCC] ml-1'/>
            </a>
          </div>
          <div className='flex flex-wrap justify-center gap-6'>
            {data.slice(0,3).map((index) => (
                <TherapistCard index={index} key={index.id}/>
            ))}
          </div>
        </div>
        <div className='my-20'>
          <div className='flex items-center justify-between mb-6 mx-2 sm:mx-0'>
            <p className='font-century font-700 text-3xl text-dark my-5 sm:text-4xl'>Konsultasi</p>
            <a href={`/${process.env.REACT_APP_JOIN}/consultation`} className='flex items-center text-[#009FCC] font-600 font-inter duration-150 hover:opacity-80'>
              More
              <AiOutlineRight className='text-[#009FCC] ml-1'/>
            </a>
          </div>
          <div className='flex flex-wrap justify-center gap-5'>
            {data.slice(0,4).map((index) => (
                <ConsultationCard index={index} key={index.id}/>
            ))}
          </div>
        </div>
        <div className='container relative flex justify-center bg-dark rounded-2xl lg:justify-start lg:h-[288px] mb-20'>
          <div className='m-10'>
            <div>
              <p className='font-century font-700 text-[40px] text-linear mb-4'>Kerja Sama</p>
              <p className='font-century font-700 text-[18px] leading-7 text-gray1'>Butuh konsultan untuk lembaga/instansi di tempat anda? Atau kerja sama dalam hal lainnya? Silahkan hubungi kami!</p>
              <a href="/contact/consultation" className='hover:opacity-90 duration-200 mt-6 rounded-sm w-[164px] bg-[#009FCC] p-3 text-white font-inter font-700 flex items-center justify-center'>
                Hubungi Kami
                <AiOutlineRight className='ml-2'/>
              </a>
            </div>
          </div>
          <div className='hidden bg-vector w-[950px] rounded-2xl lg:block'>
            <div className='m-10 flex items-center justify-end'>
              <img src={kerjasama} alt={kerjasama} className='w-[208px] h-[208px]'/>
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

export default LetsJoin