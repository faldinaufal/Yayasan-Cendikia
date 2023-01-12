import React from 'react'
import { Link } from 'react-router-dom'
import {BsChevronLeft} from 'react-icons/bs'
import {logoYayasan} from '../../../assets/image'

const Register = () => {
  return (
    <section>
        <div className='flex justify-center md:justify-start gap-3'>
        <div className='hidden md:block bg-bgLogin h-screen sticky top-0 rounded-br-[40px] rounded-tr-[40px] bg-no-repeat w-[708px] bg-center bg-cover'></div>
            <div className='mx-0 md:mx-7 lg:mx-auto'>
                <div className='w-[348px]'>
                    <Link to='/' className='flex items-center text-[#009FCC] font-inter font-600 hover:opacity-70 duration-200 mt-10'>
                        <BsChevronLeft className='mr-[8.89px]'/>
                        Kembali ke Beranda
                    </Link>
                    <p className='font-century font-700 text-4xl mt-10 mb-2'>Daftar</p>
                    <p className='font-inter leading-6 text-gray3 mb-10'>Daftarkan akun untuk bergabung bersama Ruang Disabilitas</p>
                    <form>
                        <div className='font-inter font-600 flex flex-col mb-4'>
                            <label htmlFor="email" className='mb-1'>Email</label>
                            <input type="email" placeholder='Email' id='email' className='font-400 border-2 border-gray1 py-3 px-4 rounded-md invalid:outline-pink-500 text-gray2 valid:border-2 invalid:text-pink-500 outline-2 outline-blue-500 invalid:border-pink-600'/>
                        </div>
                        <div className='font-inter font-600 flex flex-col mb-4'>
                            <label htmlFor="nama" className='mb-1'>Nama</label>
                            <input type="text" placeholder='Nama' id='nama' className='font-400 border-2 focus:outline-2 focus:outline-blue-500 border-gray1 py-3 px-4 rounded-md text-gray2 valid:border-2'/>
                        </div>
                        <div className='font-inter font-600 flex flex-col'>
                            <label htmlFor="password" className='mb-1'>Password</label>
                            <input type="password" placeholder='Password' id='password' className='font-400 border-2 border-gray1 py-3 px-4 rounded-md text-gray2 valid:border-2 outline-blue-500'/>
                        </div>
                        <button className='my-10 w-full hover:bg-[#009FCC] duration-200 hover:text-white bg-gray1 rounded-md font-inter font-600 text-gray2 py-3'>Daftar</button>
                    </form>
                    <div className='font-inter flex items-center justify-center'>
                        <p className='text-dark mr-1'>Sudah memiliki akun?</p>
                        <Link to='/login' className='font-600 text-[#009FCC] hover:opacity-70 duration-200'>Masuk sekarang</Link>
                    </div>
                </div>
                <div className='flex flex-col mt-[114px] items-center mb-10'>
                    <img src={logoYayasan} alt={logoYayasan} className='w-12 h-12 mb-4'/>
                    <p className='font-inter text-gray3 text-center'>&copy; 2022 Ruang Disabilitas. All Rights Reserved.</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Register