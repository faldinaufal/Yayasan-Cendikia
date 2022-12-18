import React from 'react'
import { Link } from 'react-router-dom'
import {HiOutlineMail} from 'react-icons/hi'
import {HiOutlineMapPin} from 'react-icons/hi2'
import {FaFacebookF, FaTiktok} from 'react-icons/fa'
import {AiOutlineTwitter} from 'react-icons/ai'
import {BsWhatsapp, BsYoutube, BsInstagram} from 'react-icons/bs'
import {SiGmail} from 'react-icons/si'
import {MdEmail} from 'react-icons/md'

const Footer = () => {
  return (
    <footer className='bg-[#262626] mt-auto'>
        <div className='container text-white'>
            <section className='flex flex-wrap pb-3 pt-1'>
                <div className='font-century w-[588px] mt-3 mb-1 lg:mr-1'>
                    <p className='text-2xl font-700 mb-1'>Ruang Disabilitas</p>
                    <p className='text-base font-inter font-400 leading-24'>
                        Ruang Disabilitas adalah sebuah ruang melatih potensi dan mengembangkan sebuah bakat yang dimiliki
                        oleh anak-anak agar menjadi pribadi yang tumbuh optimal, kreatif, hebat, dan pribadi yang mandiri
                    </p>
                    <div className='my-2'>
                        <div className='flex items-center'>
                            <div className='mr-2'>
                                <HiOutlineMapPin className='text-18'/>
                            </div>
                            <p className='text-base font-inter font-400'>Jl. Medan Merdeka Utara No.2, RT.5/RW.2, Gambir, Kecamatan Gambir, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10110</p>
                        </div>
                        <div className='flex items-center mt-2'>
                            <HiOutlineMail className='text-18 mr-2'/>
                            <p className='text-base font-inter font-400'>contact@ruangdisabilitas.com</p>
                        </div>
                    </div>
                    <div className='flex mt-3'>
                        <a href="/" target={'_blank'} className='a-sosmed group hover:bg-[#1877F2] '><FaFacebookF className='text-slate-600 text-16 group-hover:text-white'/></a>
                        <a href="/" target={'_blank'} className='a-sosmed group hover:bg-[#E4405F] '><BsInstagram className='text-slate-600 text-16 group-hover:text-white'/></a>
                        <a href="/" target={'_blank'} className='a-sosmed group hover:bg-[#1DA1F2] '><AiOutlineTwitter className='text-slate-600 text-16 group-hover:text-white'/></a>
                        <a href="/" target={'_blank'} className='a-sosmed group hover:bg-[#EE1D51] '><FaTiktok className='text-slate-600 text-16 group-hover:text-white'/></a>
                        <a href="/" target={'_blank'} className='a-sosmed group hover:bg-[#CD201F] '><BsYoutube className='text-slate-600 text-16 group-hover:text-white'/></a>
                        <a href="/" target={'_blank'} className='a-sosmed group hover:bg-[#25D366] '><BsWhatsapp className='text-slate-600 text-16 group-hover:text-white'/></a>
                        <a href="/" target={'_blank'} className='a-sosmed group hover:bg-[#9146ff]'><SiGmail className='text-slate-600 text-16 group-hover:text-white'/></a>
                    </div>
                </div>
                <div className='mt-3 mr-1 mb-1 w-[282px]'>
                    <p className='font-century text-2xl font-700 mb-1'>Tautan Cepat</p>
                    <div className='ml-1 font-inter text-16 font-600'>
                        <div className='mb-1 duration-150 hover:translate-x-2 w-[65px]'>
                            <Link to='/' className='duration-150 hover:opacity-70'>Beranda</Link>
                        </div>
                        <div className='mb-1 duration-150 hover:translate-x-2 w-[58px]'>
                            <Link to='/' className='duration-150 hover:opacity-70'>Privacy</Link>
                        </div>
                        <div className='mb-1 duration-150 hover:translate-x-2 w-[49px]'>
                            <Link to='/' className='duration-150 hover:opacity-70'>Terms</Link>
                        </div>
                        <div className='duration-150 hover:translate-x-2 w-[43px]'>
                            <Link to='/' className='duration-150 hover:opacity-70'>Login</Link>
                        </div>
                    </div>
                </div>
                <div className='mt-3 w-[282px]'>
                    <p className='font-century text-2xl font-700 mb-1'>Subscribe</p>
                    <form className='flex flex-col'>
                        <label htmlFor="email" className='font-inter text-base font-600 mb-1'>Email</label>
                        <div className='flex items-center relative'>
                            <MdEmail className='absolute left-2 text-gray-500 text-2xl z-50'/>
                            <input type="email" placeholder='Email' id='email' className='relative w-full rounded-sm outline-1 py-2 pl-10 font-inter font-16 font-400 outline-blue-500 text-slate-800 invalid:text-pink-500 invalid:outline-pink-500 valid:text-blue-400 valid:border-blue-400 valid:border-2 invalid:border-2 invalid:border-pink-500'/>
                        </div>
                        <button className='bg-[#009FCC] mt-4 py-2 rounded-sm font-intern font-600 duration-200 hover:bg-opacity-80'>Berlangganan Artikel</button>
                    </form>
                </div>
            </section>
        </div>
        <div className='w-full bg-[#6B7280] h-[2px] mt-2'></div>
        <div className='text-white font-inter text-16 font-400 py-5'>
            <p className='text-center'>&copy; 2022 Ruang Disabilitas. All Rights Reserved.</p>
        </div>
    </footer>
  )
}

export default Footer