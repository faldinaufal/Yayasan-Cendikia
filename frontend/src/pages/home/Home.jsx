import React, { useEffect } from 'react'
import { Banner, Footer, Navbar, Categories } from '../../components'
import ArrowLeft from '../../assets/Icon/Button.svg'
import ArrowRight from '../../assets/Icon/Button-1.svg'
import LogoM1 from '../../assets/image/LogoM1.svg'
import LogoM2 from '../../assets/image/LogoM2.svg'
import LogoM3 from '../../assets/image/LogoM3.svg'
import LogoM4 from '../../assets/image/LogoM4.svg'
import LogoM5 from '../../assets/image/LogoM5.svg'
import LogoM6 from '../../assets/image/LogoM6.svg'
import {AiOutlineRight} from 'react-icons/ai'
import image2 from '../../assets/image/image1.png'
import './style.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'

const Home = () => {
  const [item, setItem] = useState()

  useEffect(() => { 
    const fetch = async () => {
      try {
          const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/posts?sort[1]=id%3Adesc&populate=*`)
          setItem(res.data.data)
      } catch (error) {
          console.log(error);
      }
    }
    fetch()
  },[])

  const slides = [
   {},{},{}
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  const prevSlide = () => {
    const firstSlide = currentIndex === 0
    const newIndex = firstSlide ? slides.length - 1 : currentIndex - 1
    setCurrentIndex(newIndex)
  }

  const nextSlide = () => {
    const lastSlide = currentIndex === slides.length - 1
    const newIndex = lastSlide ? 0 : currentIndex + 1
    setCurrentIndex(newIndex)
  }

  return (
    <div className='overflow-hidden'>
        <Navbar/>
        <div>
          <Banner/> 
        </div>
        <div className='container flex items-center md:h-[538px]'>
          <div className='gap-10 grid'>
            <div className='text-[#009FCC] font-century text-[40px] mt-5 leading-[58px] mb-5 md:text-[48px] md:mb-0'>
              <h2 className='text-center md:text-start'>Education Center</h2>
            </div>
            {item && 
             (<div className='gap-5 flex flex-col justify-center items-center mb-5 md:flex-row'>
                <div className='md:container'>
                  <img src={process.env.REACT_APP_API_URL+item[currentIndex].attributes.Image.data.attributes.url} alt="Gambar Keluarga" className='w-[588px] h-[360px] rounded-md'/>
                </div>
                <div className='md:container'>
                  <div className='font-century text-[36px] leading-[42px] font-bold text-[#262626] mx-2 md:mx-0'>
                    <h3 className='text-center md:text-start'>{item[currentIndex].attributes.Title}</h3>
                  </div>
                  <div className='font-inter text-18 leading-[28px] gap-2 font-normal text-[#6B7280] mt-4 mx-2 md:mx-0'>
                    <p className='text-center md:text-start line-clamp-3'>{item[currentIndex].attributes.Body}</p>
                    <a className='rounded-md text-[#009FCC] font-600' href={`/${process.env.REACT_APP_EDU}/${item[currentIndex].attributes.Categories}/${item[currentIndex].attributes.Title}`}>Baca Selengkapnya...</a>
                  </div>
                  <div className='flex justify-evenly mt-4 gap-4 md:justify-center'>
                    <button onClick={prevSlide} className='p-1 cursor-pointer'>
                      <img src={ArrowLeft} alt="Panah Kiri"/>
                    </button>
                    <button onClick={nextSlide} className='p-1 cursor-pointer'>
                      <img src={ArrowRight} alt="Panah Kanan"/>
                    </button>
                  </div>
                </div>
              </div>)
            }
          </div>
        </div>
        <div className='bg-[#E0E7FF] py-10'>
          <div className='container'>
            <div className='text-[40px] font-century leading-[58px] text-[#009FCC] md:text-[48px] mb-10'>
              <h2 className='text-center md:text-start'>Mitra Kerja</h2>
            </div>
            <div className='mt-10 flex gap-3 justify-center flex-wrap md:gap-6'>
              <div className='w-[180px] h-[120px] bg-white rounded-lg flex justify-center items-center'>
                <img src={LogoM1} alt="Logo Mitra" className='w-[130px] h-[80px]'/>
              </div>
              <div className='w-[180px] h-[120px] bg-white rounded-lg flex justify-center items-center'>
                <img src={LogoM2} alt="Logo Mitra" className='w-[130px] h-[80px]'/>
              </div>
              <div className='w-[180px] h-[120px] bg-white rounded-lg flex justify-center items-center'>
                <img src={LogoM3} alt="Logo Mitra" className='w-[130px] h-[80px]'/>
              </div>
              <div className='w-[180px] h-[120px] bg-white rounded-lg flex justify-center items-center'>
                <img src={LogoM4} alt="Logo Mitra" className='w-[130px] h-[80px]'/>
              </div>
              <div className='w-[180px] h-[120px] bg-white rounded-lg flex justify-center items-center'>
                <img src={LogoM5} alt="Logo Mitra" className='w-[130px] h-[80px]'/>
              </div>
              <div className='w-[180px] h-[120px] bg-white rounded-lg flex justify-center items-center'>
                <img src={LogoM6} alt="Logo Mitra" className='w-[130px] h-[80px]'/>
              </div>
              <div className='w-[180px] h-[120px] bg-white rounded-lg flex justify-center items-center'>
                <img src={LogoM1} alt="Logo Mitra" className='w-[130px] h-[80px]'/>
              </div>
              <div className='w-[180px] h-[120px] bg-white rounded-lg flex justify-center items-center'>
                <img src={LogoM2} alt="Logo Mitra" className='w-[130px] h-[80px]'/>
              </div>
              <div className='w-[180px] h-[120px] bg-white rounded-lg flex justify-center items-center'>
                <img src={LogoM3} alt="Logo Mitra" className='w-[130px] h-[80px]'/>
              </div>
              <div className='w-[180px] h-[120px] bg-white rounded-lg flex justify-center items-center'>
                <img src={LogoM4} alt="Logo Mitra" className='w-[130px] h-[80px]'/>
              </div>
              <div className='w-[180px] h-[120px] bg-white rounded-lg flex justify-center items-center'>
                <img src={LogoM5} alt="Logo Mitra" className='w-[130px] h-[80px]'/>
              </div>
            </div>
          </div>
        </div>
        <div className='flex items-center mt-[52px] mb-[92px]'>
          <div className='container'>
            <div className='text-[40px] font-century leading-[58px] text-[#009FCC] md:text-[48px]'>
              <h2 className='text-center md:text-start'>Artikel Terbaru</h2>
            </div>
            <div className='mt-10'>
              <Categories categories="Article"/>
            </div>
            <div className='flex justify-center items-center mt-10'>
              <Link to={`/${process.env.REACT_APP_EDU}/${process.env.REACT_APP_POST_ARTICLE}`} className='w-[183px] h-[48px] px-3 py-4 rounded-[4px]'>
                <button className='font-inter font-semibold text-base text-[#262626] hover:text-[#009FCC]'>Lihat Semua Artikel</button>
              </Link>
            </div>
          </div>
        </div>
        <div className='container relative flex justify-center bg-dark rounded-2xl lg:justify-start lg:h-[288px] mb-20'>
          <div className='m-10'>
            <div>
              <p className='font-century font-700 text-[40px] text-linear mb-4'>Let's Join Us</p>
              <p className='font-century font-700 text-[18px] leading-7 text-gray1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus commodo luctus venenatis.</p>
              <a href={`/login`} className='hover:opacity-90 duration-200 mt-6 rounded-sm w-[114px] bg-[#009FCC] p-3 text-white font-inter font-700 flex items-center justify-center'>
                Join Us
                <AiOutlineRight className='ml-2'/>
              </a>
            </div>
          </div>
          <div className='hidden bg-vector w-[800px] rounded-2xl lg:block'>
            <div className='m-10 flex items-center justify-end'>
              <img src={image2} alt={image2} className='w-[208px] h-[208px] rounded-full border-2 border-white'/>
            </div>
          </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Home