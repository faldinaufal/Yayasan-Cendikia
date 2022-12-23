import React from 'react'
import { Link } from 'react-router-dom'
import {BsChevronLeft} from 'react-icons/bs'
import {logoYayasan} from '../../assets/image'

const PassSucc = () => {
  return (
    <section>
        <div className='flex items-center justify-center md:justify-start lg:gap-6 xl:gap-20'>
            <div className='hidden md:block bg-image-login h-[960px] rounded-br-[40px] rounded-tr-[40px] bg-no-repeat w-[708px] bg-center'></div>
            <div className='mx-0 md:mx-5'>
                <div className='w-[348px]'>
                    <Link to='' className='flex items-center text-[#009FCC] font-inter font-600 hover:opacity-70 duration-200 my-10'>
                        <BsChevronLeft className='mr-[8.89px]'/>
                        Kembali ke Beranda
                    </Link>
                    <div className='flex justify-center'>
                        <div className='relative border-[12px] border-[#19AB6E] w-[119.86px] h-[119.86px] rounded-full'>
                            <div className='absolute left-[73px] top-2 bg-white rotate-45 w-8 h-7'></div>
                            <div className='absolute top-7 left-8 border-[10px] bg-[#19AB6E] rounded-r-full rounded-l-full border-[#19AB6E] w-[83px] -rotate-45'></div>
                            <div className='absolute top-10 left-4 border-[10px] bg-[#19AB6E] rounded-r-full border-[#19AB6E] w-[48px] rounded-l-full rotate-[44deg]'></div>
                        </div>
                    </div>
                    <p className='font-century font-700 text-4xl mt-10 mb-2'>Password Berhasil Diperbarui</p>
                    <p className='font-inter leading-6 text-gray3 mb-10'>Password anda berhasil diperbarui. Silahkan kembali ke halaman Masuk dengan tombol di bawah</p>
                    <Link to='/login' className='font-inter font-600 rounded-md bg-[#009FCC] py-4 px-3 text-white hover:opacity-70 duration-200 flex justify-center mt-2 mb-[252px]'>Masuk</Link>
                </div>
                <div className='flex flex-col items-center mb-10'>
                    <img src={logoYayasan} alt={logoYayasan} className='w-12 h-12 mb-4'/>
                    <p className='font-inter text-gray3 text-center'>&copy; 2022 Ruang Disabilitas. All Rights Reserved.</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default PassSucc