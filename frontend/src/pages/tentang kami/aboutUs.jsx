import React from 'react'
import { Footer, Navbar } from '../../components'
import image1 from '../../assets/image/Gambar-1.jpg'
import image2 from '../../assets/image/Gambar-2.jpg'
import image3 from '../../assets/image/Gambar-3.jpg'
import image4 from '../../assets/image/Gambar-4.jpg'
import Fb from '../../assets/Icon/FB.svg'
// import FbHover from '../../assets/Icon/FBHover.svg'
import './style.css'

const AboutUs = () => {
  return (
    <div>
        <Navbar/>
        <div className='banner h-[476px]'>
            <div className='container grid justify-items-center gap-6 pt-[72px]'>
                <div className='font-century text-[64px] leading-[76px] text-[#262626]'>
                    <h1>Tentang Kami</h1>
                </div>
                <div className='font-inter text-lg text-center text-[#6B7280]'>
                    <p>Ruang Disabilitas merupakan platform yang mewadahi para teman disabalitas dan kerabatnya untuk membentuk dan mengembangkan segala potensi yang dimiliki, sehingga dapat menjadi pribadi yang bermanfaat untuk bangsa Indonesia.</p>
                </div>
            </div>
        </div>
        <div className='h-[543px]'>
            <div className='container flex justify-center items-center gap-6'>
                <div className='relative -top-10'>
                    <img src={image1} alt="" />
                </div>
                <div>
                    <img src={image2} alt="" />
                </div>
                <div className='relative -top-20'>
                    <img src={image3} alt="" />
                </div>
                <div className='relative top-10'>
                    <img src={image4} alt="" />
                </div>
            </div>
        </div>
        <div className='bg-[#008CB2]'>
            <div className='container flex justify-center py-[43px] gap-6'>
                <div>
                    <h3 className='text font-century text-[36px] leading-[42px]'>Keep in touch with us</h3>
                </div>
                <div className='relative'>
                    <button href="#">
                        <img src={Fb} alt="Facebook Logo" className='w-12 h-12'/>
                    </button>
                    {/* <a href="#" className=''>
                        <img src={FbHover} alt="Facebook Logo" className='w-12 h-12'/>
                    </a> */}
                </div>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default AboutUs