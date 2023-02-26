import React from 'react'
import {HiOutlineMail} from 'react-icons/hi'
import {HiOutlineMapPin} from 'react-icons/hi2'
import logoYayasan from '../../assets/image/Logo Yayasan.png'
import logoSalt from '../../assets/image/logoSalt.svg'
import Medsos from '../medsos/Medsos'

const Footer = () => {
  return (
    <footer className='bg-[#262626]'>
        <div className='container text-white flex justify-center'>
            <section className='flex lg:justify-evenly flex-wrap pb-3 pt-1'>
                <div className='hidden sm:grid font-century w-[588px] mt-10 mb-1 lg:mr-1'>
                    <p className='text-2xl font-700 mb-4'>Ruang Disabilitas</p>
                    <p className='text-base font-inter font-400 leading-24'>
                        Ruang Disabilitas adalah sebuah ruang melatih potensi dan mengembangkan sebuah bakat yang dimiliki
                        oleh anak-anak agar menjadi pribadi yang tumbuh optimal, kreatif, hebat, dan pribadi yang mandiri
                    </p>
                    <div className='my-4'>
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
                     <Medsos/>
                </div>
                <div className='hidden sm:block mt-10 w-[282px]'>
                    <p className='font-century text-2xl font-700'>Tautan Cepat</p>
                    <div className='ml-1 font-inter text-16 font-600'>
                        <div className='mb-1 duration-150 hover:translate-x-2 w-[65px]'>
                            <a href='/' className='duration-150 hover:opacity-70'>Beranda</a>
                        </div>
                        <div className='mb-1 duration-150 hover:translate-x-2 w-[58px]'>
                            <a href='/' className='duration-150 hover:opacity-70'>Privacy</a>
                        </div>
                        <div className='mb-1 duration-150 hover:translate-x-2 w-[49px]'>
                            <a href='/' className='duration-150 hover:opacity-70'>Terms</a>
                        </div>
                        <div className='duration-150 hover:translate-x-2 w-[43px]'>
                            <a href={`/${process.env.REACT_APP_LOGIN}`} className='duration-150 hover:opacity-70'>Login</a>
                        </div>
                    </div>
                </div>
                <div className='mt-10 w-[282px]'>
                    <p className='font-century text-2xl font-700 mb-4'>Kolaborasi Bersama</p>
                    <div className='flex gap-6'>
                        <img src={logoYayasan} alt={logoYayasan} className='h-[40px]'/>
                        <img src={logoSalt} alt={logoSalt} className='h-[52px]'/>
                    </div>
                </div>
            </section>
        </div>
        <div className='w-full bg-[#6B7280] h-[2px] mt-2'></div>
        <div className='text-white font-inter text-16 font-400 py-5 container flex flex-col gap-2 md:flex-row md:justify-between'>
            <p className='text-center'>&copy; 2022 Ruang Disabilitas. All Rights Reserved.</p>
            <p className='text-center'>Powered by <span className='font-600'>SALT Academy</span></p>
        </div>
    </footer>
  )
}

export default Footer