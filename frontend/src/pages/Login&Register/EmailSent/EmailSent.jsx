import React from 'react'
import { Link } from 'react-router-dom'
import {BsChevronLeft} from 'react-icons/bs'
import {logoYayasan, lupaPassword} from '../../../assets/image'

const EmailSent = () => {
  return (
    <section>
        <div className='flex justify-center md:justify-between lg:gap-6 xl:gap-20'>
        <div className='hidden md:block bg-bgLogin h-screen sticky top-0 rounded-br-[40px] rounded-tr-[40px] bg-no-repeat w-[80%] bg-center bg-cover'></div>
            <div className='mx-0 md:mx-5'>
                <div className='w-[348px]'>
                    <Link to='/' className='flex items-center text-[#009FCC] font-inter font-600 hover:opacity-70 duration-200 mt-10'>
                        <BsChevronLeft className='mr-[8.89px]'/>
                        Kembali ke Beranda
                    </Link>
                    <img src={lupaPassword} alt={lupaPassword} className='mt-2'/>
                    <p className='font-century font-700 text-4xl mt-5 mb-2'>Email Terkirim</p>
                    <p className='font-inter leading-6 text-gray3 mb-10'>Silahkan cek email anda, kami sudah mengirim tautan untuk memperbarui password anda</p>
                </div>
                <div className='font-inter flex items-center justify-center'>
                    <p className='text-dark mr-1'>Tidak menerima email?</p>
                    <Link to='/lupa-password' className='font-600 text-[#009FCC] hover:opacity-70 duration-200'>Kirim ulang email</Link>
                </div>
                <div className='flex flex-col items-center mb-10 mt-[308px]'>
                    <img src={logoYayasan} alt={logoYayasan} className='w-12 h-12 mb-4'/>
                    <p className='font-inter text-gray3 text-center'>&copy; 2022 Ruang Disabilitas. All Rights Reserved.</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default EmailSent