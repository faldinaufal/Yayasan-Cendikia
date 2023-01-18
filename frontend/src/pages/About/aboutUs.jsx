import React, { useState } from 'react'
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
import axios from 'axios'
import '../User/Contact/style.css'

const AboutUs = () => {
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [phoneNumber, setPhoneNumber] = useState()
    const [description, setDescription] = useState()
    const [msg, setMsg] = useState()

    const Post = async () => {
        try {
            await axios.post(`${process.env.REACT_APP_API_URL}/api/contacts`, {
                data: {
                    Name: name,
                    Email: email,
                    phoneNumber: phoneNumber,
                    Description : description
                }
            })
            console.log("Berhasil Mengirim Pesan")
            window.location.reload(false);
        } catch (error) {
            setMsg(error)
            console.log(msg)
        }
    }

    return (
        <div>
            <Navbar/>
            <div className='bg-about mb-8 md:h-[476px] md:mb-0 md:flex md:items-center'>
                <div className='container gap-6 pt-5 pb-16 px-2'>
                    <h1 className='font-century text-[45px] text-center leading-[85px] text-[#262626] md:text-[64px] md:leading-[76px]'>Tentang Kami</h1>
                    <p className='font-inter text-lg text-center text-[#6B7280]'>Ruang Disabilitas merupakan platform yang mewadahi para teman disabalitas dan kerabatnya untuk membentuk dan mengembangkan segala potensi yang dimiliki, sehingga dapat menjadi pribadi yang bermanfaat untuk bangsa Indonesia.</p>
                </div>
            </div>
            <div className='mb-24 md:mb-0 md:h-[543px]'>
                <div className='container flex justify-center items-center gap-1 md:gap-6'>
                    <div className='relative -top-10'>
                        <img src={image1} alt="" className='w-96 h-40 md:w-[282px] md:h-[423px]'/>
                    </div>
                    <div>
                        <img src={image2} alt="" className='w-96 h-40 md:w-[282px] md:h-[423px]'/>
                    </div>
                    <div className='relative -top-20'>
                        <img src={image3} alt="" className='w-96 h-40 md:w-[282px] md:h-[423px]'/>
                    </div>
                    <div className='relative top-10'>
                        <img src={image4} alt="" className='w-96 h-40 md:w-[282px] md:h-[423px]'/>
                    </div>
                </div>
            </div>
            <div className='bg-[#008CB2]'>
                <div className='container flex flex-col items-center justify-center py-[43px] gap-6 lg:md:flex-row'>
                    <h3 className='text text-center font-century text-[36px] leading-[42px]'>Keep in touch with us</h3>
                    <div className='relative flex flex-wrap justify-center gap-6'>
                        <div className='group duration-150 rounded-full'>
                            <a href="/" target="_blank"><img src={Fb} alt="Facebook Logo" className='w-12 h-12 rounded-full group-hover:hidden'/></a>
                            <a href="/" target="_blank"><img src={FbHover} alt="Facebook Logo" className='w-12 h-12 rounded-full hidden group-hover:block'/></a>
                        </div>
                        <div className='group duration-150 rounded-full'>
                            <a href="/" target="_blank"><img src={IG} alt="Instagram Logo" className='w-12 h-12 rounded-full group-hover:hidden'/></a>
                            <a href="/" target="_blank"><img src={IGHover} alt="Instagram Logo" className='w-12 h-12 rounded-full hidden group-hover:block'/></a>
                        </div>
                        <div className='group duration-150 rounded-full'>
                            <a href="/" target="_blank"><img src={Twitter} alt="Twitter Logo" className='w-12 h-12 rounded-full group-hover:hidden'/></a>
                            <a href="/" target="_blank"><img src={TwitterHover} alt="Twitter Logo" className='w-12 h-12 rounded-full hidden group-hover:block'/></a>
                        </div>
                        <div className='group duration-150 rounded-full'>
                            <a href="/" target="_blank"><img src={Tiktok} alt="Tiktok Logo" className='w-12 h-12 rounded-full group-hover:hidden'/></a>
                            <a href="/" target="_blank"><img src={TiktokHover} alt="Tiktok Logo" className='w-12 h-12 rounded-full hidden group-hover:block'/></a>
                        </div>
                        <div className='group duration-150 rounded-full'>
                            <a href="/" target="_blank"><img src={WA} alt="Whatsapp Logo" className='w-12 h-12 rounded-full group-hover:hidden'/></a>
                            <a href="/" target="_blank"><img src={WAHover} alt="Whatsapp Logo" className='w-12 h-12 rounded-full hidden group-hover:block'/></a>
                        </div>
                        <div className='group duration-150 rounded-full'>
                            <a href="/" target="_blank"><img src={Gmail} alt="Gmail Logo" className='w-12 h-12 rounded-full group-hover:hidden'/></a>
                            <a href="/" target="_blank"><img src={GmailHover} alt="Gmail Logo" className='w-12 h-12 rounded-full hidden group-hover:block'/></a>
                        </div>
                        <div className='group duration-150 rounded-full'>
                            <a href="/" target="_blank"><img src={YT} alt="Youtube Logo" className='w-12 h-12 rounded-full group-hover:hidden'/></a>     
                            <a href="/" target="_blank"><img src={YTHover} alt="Youtube Logo" className='w-12 h-12 rounded-full hidden group-hover:block'/></a>
                        </div>
                    </div>
                </div>    
            </div>
            <div className='bg-Background-AboutUs bg-no-repeat bg-left-bottom'>
                <div className='container py-9 gap-6 lg:flex lg:py-[80px]'>
                    <div className='container relative right-0 mb-5 lg:mb-0'>
                        <div className='grid gap-4 mx-auto text-center lg:mx-0 lg:absolute lg:right-0 lg:w-[384px] lg:text-start'>
                            <h3 className='font-century text-[36px] leading-[42px] font-bold text-Text-Title'>Hubungi Kami</h3>
                            <p className='font-inter text-[18px] leading-[28px] font-normal text-Text-Paragraph'>Jangan ragu untuk bertanya tentang kami. Tim kami yang ramah akan senang menjawab pertanyaan Anda!</p>
                        </div>
                    </div>
                    <div className='container'>
                        <div className='p-6 grid gap-10 bg-[#E0E7FF] rounded-lg mx-auto md:w-[450px] lg:w-[384px] lg:mx-0'>
                            <div className='grid gap-4'>
                                <div className='grid gap-1'>
                                    <p className='font-inter font-semibold text-base text-Text-Title'>Nama</p>
                                    <input type="text" placeholder='Nama' onChange={(e) => setName(e.target.value)} className='px-4 py-3 font-inter border-2 border-[#9CA3AF] rounded-[4px] bg-white h-12 focus:outline-2 focus:outline-blue-500 duration-200'/>
                                </div>
                                <div className='grid gap-1'>
                                    <p className='font-inter font-semibold text-base text-Text-Title'>Email</p>
                                    <input type="email" placeholder='Email' onChange={(e) => setEmail(e.target.value)} className='px-4 py-3 font-inter border-2 border-[#9CA3AF] rounded-[4px] bg-white h-12 focus:outline-2 focus:outline-blue-500 duration-200 focus:invalid:outline-pink-600 invalid:text-pink-600 invalid:border-pink-600'/>
                                </div>
                                <div className='grid gap-1'>
                                    <p className='font-inter font-semibold text-base text-Text-Title'>Nomor Whatsapp</p>
                                    <input type="number" placeholder='Nomor Whatsapp' onChange={(e) => setPhoneNumber(e.target.value)} className='px-4 py-3 font-inter border-2 border-[#9CA3AF] rounded-[4px] bg-white h-12 focus:outline-2 focus:outline-blue-500 duration-200'/>
                                </div>
                                <div className='grid gap-1'>
                                    <p className='font-inter font-semibold text-base text-Text-Title'>Deskripsi</p>
                                    <textarea type="text" placeholder='Deskripsi' onChange={(e) => setDescription(e.target.value)} className='px-4 py-3 font-inter border-2 border-[#9CA3AF] rounded-[4px] bg-white h-[84px] focus:outline-2 focus:outline-blue-500 duration-200'/>
                                </div>
                                <button onClick={Post} className='bg-[#9CA3AF] text-[#6B7280] duration-200 hover:bg-[#009FCC] hover:text-white rounded-[4px] text-center py-3'>
                                    <p className='font-inter text-base font-semibold '>Kirim</p>
                                </button>
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