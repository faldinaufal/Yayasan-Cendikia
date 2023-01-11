import React from 'react'
import { Footer, Navbar } from '../../components'
import image1 from '../../assets/image/Gambar-1.jpg'
import image2 from '../../assets/image/Gambar-2.jpg'
import image3 from '../../assets/image/Gambar-3.jpg'
import image4 from '../../assets/image/Gambar-4.jpg'
import Fb from '../../assets/Icon/FB.svg'
import FbHover from '../../assets/Icon/FBHover.svg'
import IG from '../../assets/Icon/Sosmed Icon/Social Media=Instagram, State=Default.svg'
import IGHover from '../../assets/Icon/Sosmed Icon/Social Media=Instagram, State=Hover.svg'
import Twitter from '../../assets/Icon/Sosmed Icon/Social Media=Twitter, State=Default.svg'
import TwitterHover from '../../assets/Icon/Sosmed Icon/Social Media=Twitter, State=Hover.svg'
import Tiktok from '../../assets/Icon/Sosmed Icon/Social Media=Tik Tok, State=Default.svg'
import TiktokHover from '../../assets/Icon/Sosmed Icon/Social Media=Tik Tok, State=Hover.svg'
import WA from '../../assets/Icon/Sosmed Icon/Social Media=Whatsapp, State=Default.svg'
import WAHover from '../../assets/Icon/Sosmed Icon/Social Media=Whatsapp, State=Hover.svg'
import Gmail from '../../assets/Icon/Sosmed Icon/Social Media=Gmail, State=Default.svg'
import GmailHover from '../../assets/Icon/Sosmed Icon/Social Media=Gmail, State=Hover.svg'
import YT from '../../assets/Icon/Sosmed Icon/Social Media=Youtube, State=Default.svg'
import YTHover from '../../assets/Icon/Sosmed Icon/Social Media=Youtube, State=Hover.svg'
import Background from '../../assets/image/FrameBackgroundSectionAboutUs.svg'
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
                <div className='relative flex gap-6'>
                    <button href="#">
                        <img src={Fb} alt="Facebook Logo" className='w-12 h-12'/>
                    </button>
                    <button href="#">
                        <img src={IG} alt="Instagram Logo" className='w-12 h-12'/>
                    </button>
                    <button href="#">
                        <img src={Twitter} alt="Twitter Logo" className='w-12 h-12'/>
                    </button>
                    <button href="#">
                        <img src={Tiktok} alt="Tiktok Logo" className='w-12 h-12'/>
                    </button>
                    <button href="#">
                        <img src={WA} alt="Whatsapp Logo" className='w-12 h-12'/>
                    </button>
                    <button href="#">
                        <img src={Gmail} alt="Gmail Logo" className='w-12 h-12'/>
                    </button>
                    <button href="#">
                        <img src={YT} alt="Youtube Logo" className='w-12 h-12'/>
                    </button>
                    
                </div>
            </div>
        </div>
        <div className='bg-Background-AboutUs bg-no-repeat bg-left-bottom'>
            <div className='container flex py-[80px] gap-6'>
                <div className='container relative right-0'>
                    <div className='absolute right-0 w-[384px] grid gap-4'>
                        <h3 className='font-century text-[36px] leading-[42px] font-bold text-Text-Title'>Hubungi Kami</h3>
                        <p className='font-inter text-[18px] leading-[28px] font-normal text-Text-Paragraph'>Jangan ragu untuk bertanya tentang kami. Tim kami yang ramah akan senang menjawab pertanyaan Anda!</p>
                    </div>
                </div>
                <div className='container'>
                    <div className='w-[384px] h-[524px] p-6 grid gap-10 bg-[#E0E7FF] rounded-lg'>
                        <div className='grid gap-4'>
                            <div className='grid gap-1'>
                                <p className='font-inter font-semibold text-base text-Text-Title'>Nama</p>
                                <input type="text" placeholder='Nama' className='px-4 py-3 font-inter border-2 border-[#9CA3AF] rounded-[4px] bg-white h-12'/>
                            </div>
                            <div className='grid gap-1'>
                                <p className='font-inter font-semibold text-base text-Text-Title'>Email</p>
                                <input type="text" placeholder='Email' className='px-4 py-3 font-inter border-2 border-[#9CA3AF] rounded-[4px] bg-white h-12'/>
                            </div>
                            <div className='grid gap-1'>
                                <p className='font-inter font-semibold text-base text-Text-Title'>Nomor Whatsapp</p>
                                <input type="text" placeholder='Nomor Whatsapp' className='px-4 py-3 font-inter border-2 border-[#9CA3AF] rounded-[4px] bg-white h-12'/>
                            </div>
                            <div className='grid gap-1'>
                                <p className='font-inter font-semibold text-base text-Text-Title'>Deskripsi</p>
                                <textarea type="text" placeholder='Deskripsi' className='px-4 py-3 font-inter border-2 border-[#9CA3AF] rounded-[4px] bg-white h-[84px]'/>
                            </div>
                            <div className='grid'>
                                <button className='bg-[#9CA3AF] text-[#6B7280] duration-200 hover:bg-[#009FCC] hover:text-white rounded-[4px] text-center py-3'>
                                    <p className='font-inter text-base font-semibold '>Kirim</p>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default AboutUs