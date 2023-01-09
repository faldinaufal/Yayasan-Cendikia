import React from 'react'
import { ArtikelPost, Banner, Footer, Navbar } from '../../components'
import image1 from '../../assets/image/image 1.jpg'
import ArrowLeft from '../../assets/Icon/Button.svg'
import ArrowRight from '../../assets/Icon/Button-1.svg'
import LogoM1 from '../../assets/image/LogoM1.svg'
import LogoM2 from '../../assets/image/LogoM2.svg'
import LogoM3 from '../../assets/image/LogoM3.svg'
import LogoM4 from '../../assets/image/LogoM4.svg'
import LogoM5 from '../../assets/image/LogoM5.svg'
import LogoM6 from '../../assets/image/LogoM6.svg'
import LogoM7 from '../../assets/image/LogoM7.svg'
import LogoM8 from '../../assets/image/LogoM8.svg'
import LogoM9 from '../../assets/image/LogoM9.svg'
import LogoM10 from '../../assets/image/LogoM10.svg'
import LogoM11 from '../../assets/image/LogoM11.svg'
import Vector from '../../assets/Icon/Vector.svg'
import image2 from '../../assets/image/image1.png'
import './style.css'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <div>
          <Banner/> 
        </div>
        <div className='container h-[538px] grid items-center'>
          <div className='grid gap-10'>
            <div className='text-[#009FCC] font-century text-[48px] leading-[58px]'>
              <h2>Education Center</h2>
            </div>
            <div className='flex gap-5'>
              <div className='container'>
                <img src={image1} alt="Gambar Keluarga" />
              </div>
              <div className='container'>
                <div className='font-century text-[36px] leading-[42px] font-bold text-[#262626]'>
                  <h3>Lorem Ipsum Dolor Sit Amet 1</h3>
                </div>
                <div className='font-inter text-18 leading-[28px] font-normal text-[#6B7280] mt-4'>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus commodo luctus venenatis. Integer rhoncus iaculis quam, et iaculis odio sagittis consequat.</p>
                </div>
                <div className='flex mt-4 gap-4'>
                  <button>
                    <img src={ArrowLeft} alt="" />
                  </button>
                  <button>
                    <img src={ArrowRight} alt="" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='bg-[#E0E7FF] h-[522px] grid items-center'>
          <div className='container'>
            <div className='text-[48px] font-century leading-[58px] text-[#009FCC]'>
              <h2>Mitra Kerja</h2>
            </div>
            <div className='mt-10 flex gap-6 justify-center'>
              <div className='w-[180px] h-[120px] bg-white rounded-lg flex justify-center items-center'>
                <img src={LogoM1} alt="Logo Mitra" />
              </div>
              <div className='w-[180px] h-[120px] bg-white rounded-lg flex justify-center items-center'>
                <img src={LogoM2} alt="Logo Mitra" />
              </div>
              <div className='w-[180px] h-[120px] bg-white rounded-lg flex justify-center items-center'>
                <img src={LogoM3} alt="Logo Mitra" />
              </div>
              <div className='w-[180px] h-[120px] bg-white rounded-lg flex justify-center items-center'>
                <img src={LogoM4} alt="Logo Mitra" />
              </div>
              <div className='w-[180px] h-[120px] bg-white rounded-lg flex justify-center items-center'>
                <img src={LogoM5} alt="Logo Mitra" />
              </div>
              <div className='w-[180px] h-[120px] bg-white rounded-lg flex justify-center items-center'>
                <img src={LogoM6} alt="Logo Mitra" />
              </div>
            </div>
            <div className='mt-6 flex gap-6 justify-center'>
              <div className='w-[180px] h-[120px] bg-white rounded-lg flex justify-center items-center'>
                <img src={LogoM7} alt="Logo Mitra" />
              </div>
              <div className='w-[180px] h-[120px] bg-white rounded-lg flex justify-center items-center'>
                <img src={LogoM8} alt="Logo Mitra" />
              </div>
              <div className='w-[180px] h-[120px] bg-white rounded-lg flex justify-center items-center'>
                <img src={LogoM9} alt="Logo Mitra" />
              </div>
              <div className='w-[180px] h-[120px] bg-white rounded-lg flex justify-center items-center'>
                <img src={LogoM10} alt="Logo Mitra" />
              </div>
              <div className='w-[180px] h-[120px] bg-white rounded-lg flex justify-center items-center'>
                <img src={LogoM11} alt="Logo Mitra" />
              </div>
            </div>
          </div>
        </div>
        <div className='h-[718px] grid items-center'>
          <div className='container'>
            <div className='text-[48px] font-century leading-[58px] text-[#009FCC]'>
              <h2>Artikel Terbaru</h2>
            </div>
            <div className='mt-10'>
              <ArtikelPost/>
            </div>
            <div className='flex justify-center items-center mt-10'>
              <a href='/educenter/article' className='w-[183px] h-[48px] px-3 py-4 rounded-[4px]'>
                <button className='font-inter font-semibold text-base text-[#262626] hover:text-[#009FCC]'>Lihat Semua Artikel</button>
              </a>
            </div>
          </div>
        </div>
        <div className='h-[408px]'>
          <div className='container flex'>
            <div className='container grid gap-4 p-10 bg-[#262626] rounded-l-[32px] shadow-box'>
              <div className='font-century'>
                <p className='text'>Let’s Join Us</p>
              </div>
              <div className='font-century text-lg text-[#9CA3AF] self-stretch'>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus commodo luctus venenatis.</p>
              </div>
              <div>
                <button className='bg-[#009FCC] rounded-[4px] w-[114px] h-[48px] flex justify-center items-center mt-6'>
                  <p className='font-inter text-base text-center text-white font-semibold'>Join Us</p>
                  <img src={Vector} alt="" className='pl-[14.11px]'/>
                </button>
              </div>
            </div>
            <div className='box2 container rounded-r-[32px] shadow-box flex items-center justify-end p-10'>
              <img src={image2} alt="Gambar Anak Sekolah" className='rounded-[300px] border-4 border-white'/>
            </div>
          </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Home