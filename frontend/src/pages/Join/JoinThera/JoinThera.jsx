import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Footer, Navbar, TherapistCard } from '../../../components'
import {FaChevronRight, FaChevronLeft} from 'react-icons/fa'
import axios from 'axios'

const JoinThera = () => {
  const [data, setData] = useState([])

  useEffect(() => {
      const Fetch = async () => {
          try {
              const res = await axios.get(`${process.env.REACT_APP_API_URL}/users?filters[userRole][$eq]=Terapis&populate=*`)
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
            <div className='flex items-center font-inter font-600 mb-5 ml-2 sm:ml-0'>
                <Link to='/join'><p className='text-[#009FCC] mr-[15.33px]'>Join Yuk</p></Link>
                <FaChevronRight className='text-gray1'/>
                <p className='text-gray2 ml-[14.67px]'>Terapis</p>
            </div>
          <div className='flex items-center justify-between mb-6 ml-2 sm:ml-0'>
            <p className='font-century font-700 text-3xl text-dark sm:text-4xl'>Terapis</p>
          </div>
          <div className='flex flex-wrap justify-center gap-6'>
            {data.slice(0,9).map((index) => (
                <TherapistCard index={index} key={index.id}/>
            ))}
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

export default JoinThera