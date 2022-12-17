import React from 'react'
import { Link } from 'react-router-dom'
import {HiOutlineMail} from 'react-icons/hi'
import {HiOutlineMapPin} from 'react-icons/hi2'
import {FaFacebookF, FaTiktok} from 'react-icons/fa'
import {AiOutlineTwitter} from 'react-icons/ai'
import {BsWhatsapp, BsYoutube, BsInstagram} from 'react-icons/bs'
import {SiGmail} from 'react-icons/si'
import {MdEmail} from 'react-icons/md'
import Navbar from '../navbar/Navbar'

const Footer = () => {
  return (
    <div>
<Navbar/>
    <footer className='bg-dark'>
        <div className='container w-80% mx-auto text-white'>
            <section className='flex flex-wrap pb-3 pt-1'>
                <div className='font-century w-588 mt-3 mr-4'>
                    <p className='text-24 font-700'>Ruang Disabilitas</p>
                    <p className='text-16 font-inter font-400 leading-24'>
                        Ruang Disabilitas adalah sebuah ruang melatih potensi dan mengembangkan sebuah bakat yang dimiliki
                        oleh anak-anak agar menjadi pribadi yang tumbuh optimal, kreatif, hebat, dan pribadi yang mandiri
                    </p>
                    <div className='my-2'>
                        <div className='flex items-center'>
                            <div className='mr-2'>
                                <HiOutlineMapPin className='text-18'/>
                            </div>
                            <p className='text-16 font-inter font-400'>Jl. Medan Merdeka Utara No.2, RT.5/RW.2, Gambir, Kecamatan Gambir, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10110</p>
                        </div>
                        <div className='flex items-center mt-2'>
                            <HiOutlineMail className='text-18 mr-2'/>
                            <p className='text-16 font-inter font-400'>contact@ruangdisabilitas.com</p>
                        </div>
                    </div>
                    <div className='flex mt-3'>
                        <a href="/" target={'_blank'} className='bg-white p-1 w-40 h-40 flex justify-center items-center rounded-full duration-200 hover:-translate-y-1 hover:bg-fb group mr-3'><FaFacebookF className='text-slate-600 text-16 group-hover:text-white'/></a>
                        <a href="/" target={'_blank'} className='bg-white p-1 w-40 h-40 flex justify-center items-center rounded-full duration-200 hover:-translate-y-1 hover:bg-ig group mr-3'><BsInstagram className='text-slate-600 text-16 group-hover:text-white'/></a>
                        <a href="/" target={'_blank'} className='bg-white p-1 w-40 h-40 flex justify-center items-center rounded-full duration-200 hover:-translate-y-1 hover:bg-twitter group mr-3'><AiOutlineTwitter className='text-slate-600 text-16 group-hover:text-white'/></a>
                        <a href="/" target={'_blank'} className='bg-white p-1 w-40 h-40 flex justify-center items-center rounded-full duration-200 hover:-translate-y-1 hover:bg-tiktok group mr-3'><FaTiktok className='text-slate-600 text-16 group-hover:text-white'/></a>
                        <a href="/" target={'_blank'} className='bg-white p-1 w-40 h-40 flex justify-center items-center rounded-full duration-200 hover:-translate-y-1 hover:bg-yt group mr-3'><BsYoutube className='text-slate-600 text-16 group-hover:text-white'/></a>
                        <a href="/" target={'_blank'} className='bg-white p-1 w-40 h-40 flex justify-center items-center rounded-full duration-200 hover:-translate-y-1 hover:bg-wa group mr-3'><BsWhatsapp className='text-slate-600 text-16 group-hover:text-white'/></a>
                        <a href="/" target={'_blank'} className='bg-white p-1 w-40 h-40 flex justify-center items-center rounded-full duration-200 hover:-translate-y-1 hover:bg-gmail group'><SiGmail className='text-slate-600 text-16 group-hover:text-white'/></a>
                    </div>
                </div>
                <div className='w-282 mt-3 mr-4'>
                    <p className='font-century text-24 font-700'>Tautan Cepat</p>
                    <div className='ml-1 font-inter text-16 font-600'>
                        <div className='mb-1 duration-150 hover:translate-x-2 w-65'>
                            <Link to='/' className='duration-150 hover:opacity-70'>Beranda</Link>
                        </div>
                        <div className='mb-1 duration-150 hover:translate-x-2 w-58'>
                            <Link to='/' className='duration-150 hover:opacity-70'>Privacy</Link>
                        </div>
                        <div className='mb-1 duration-150 hover:translate-x-2 w-49'>
                            <Link to='/' className='duration-150 hover:opacity-70'>Terms</Link>
                        </div>
                        <div className='duration-150 hover:translate-x-2 w-43'>
                            <Link to='/' className='duration-150 hover:opacity-70'>Login</Link>
                        </div>
                    </div>
                </div>
                <div className='mt-3 w-282'>
                    <p className='font-century text-24 font-700'>Subscribe</p>
                    <form className='flex flex-col'>
                        <label htmlFor="email" className='font-inter text-16 font-600 mb-1'>Email</label>
                        <div className='flex items-center'>
                            <MdEmail className='relative left-3 text-gray-500 text-24 z-50'/>
                            <input type="email" placeholder='Email' id='email' className='relative w-282 -left-5 rounded-sm outline-1 py-2 pl-10 font-inter font-16 font-400 outline-blue-500 text-slate-800'/>
                        </div>
                        <button className='bg-btn-art mt-4 py-2 rounded-sm font-intern font-16 font-600 w-260 duration-200 hover:bg-opacity-80'>Berlangganan Artikel</button>
                    </form>
                </div>
            </section>
        </div>
        <div className='w-100% bg-hr h-0.5'></div>
        <div className='text-white font-century text-14 py-5'>
            <p className='text-center'>&copy; 2022 Ruang Disabilitas. All Rights Reserved.</p>
        </div>
    </footer>
    </div>
    
  )
}

export default Footer