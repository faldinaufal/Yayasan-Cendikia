import React from 'react'
import { Link } from 'react-router-dom'
import {BsChevronLeft} from 'react-icons/bs'
import {logoYayasan} from '../../assets/image'

const Login = () => {
  return (
    <section>
        <div className='flex items-center justify-center md:justify-start lg:gap-6 xl:gap-20'>
            <div className='hidden md:block bg-image-login h-[960px] rounded-br-[40px] rounded-tr-[40px] bg-no-repeat w-[708px] bg-center'></div>
            <div className='mx-0 md:mx-5'>
                <div>
                    <div className='w-[348px]'>
                        <Link to='/' className='flex items-center text-[#009FCC] font-inter font-600 hover:opacity-70 duration-200 mt-10'>
                            <BsChevronLeft className='mr-[8.89px]'/>
                            Kembali ke Beranda
                        </Link>
                        <p className='font-century font-700 text-4xl mt-10 mb-2'>Masuk</p>
                        <p className='font-inter leading-6 text-gray3 mb-10'>Masuk dengan akun yang pernah anda daftarkan</p>
                        <form>
                            <div className='font-inter font-600 flex flex-col mb-4'>
                                <label htmlFor="email" className='mb-1'>Email</label>
                                <input type="email" placeholder='Email' id='email' className='font-400 border-2 border-gray1 py-3 px-4 rounded-md invalid:outline-pink-500 text-gray2 valid:border-2 invalid:text-pink-500 outline-2 outline-blue-500 invalid:border-pink-600'/>
                            </div>
                            <div className='font-inter font-600 flex flex-col'>
                                <label htmlFor="password" className='mb-1'>Password</label>
                                <input type="password" placeholder='Password' id='password' className=' font-400 border-2 border-gray1 py-3 px-4 rounded-md text-gray2 valid:border-2 outline-blue-500'/>
                            </div>
                            <button className='mt-10 w-full mb-10 hover:bg-[#009FCC] duration-200 hover:text-white bg-gray1 rounded-md font-inter font-600 text-gray2 py-3'>Masuk</button>
                        </form>
                        <div className='font-inter flex items-center justify-center'>
                            <p className='text-dark mr-1'>Belum Pernah Mendaftar?</p>
                            <Link to='/daftar' className='font-600 text-[#009FCC] hover:opacity-70 duration-200'>Daftar sekarang</Link>
                        </div>
                        <Link to='/lupa-password' className='font-inter font-600 text-[#009FCC] hover:opacity-70 duration-200 flex justify-center mt-2 mb-[174px]'>Lupa Password</Link>
                    </div>
                    
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

export default Login