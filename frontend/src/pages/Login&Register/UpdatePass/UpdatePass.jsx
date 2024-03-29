import React from 'react'
import { Link } from 'react-router-dom'
import {BsChevronLeft} from 'react-icons/bs'
import {logoYayasan} from '../../../assets/image'

const UpdatePass = () => {
  return (
    <section>
        <div className='flex justify-center md:justify-start gap-3'>
        <div className='hidden md:block bg-bgLogin h-screen sticky top-0 rounded-br-[40px] rounded-tr-[40px] bg-no-repeat w-[708px] bg-center bg-cover'></div>
            <div className='mx-0 md:mx-7 lg:mx-auto'>
                <div className='w-[348px] flex flex-col items-center sm:block'>
                    <Link to='' className='flex items-center text-[#009FCC] font-inter font-600 hover:opacity-70 duration-200 mt-10'>
                        <BsChevronLeft className='mr-[8.89px]'/>
                        Kembali ke Beranda
                    </Link>
                    <p className='font-century font-700 text-4xl mt-10 mb-2'>Perbarui Password</p>
                    <p className='font-inter leading-6 text-gray3 mb-10 text-center sm:text-start'>Silahkan masukkan password baru untuk masuk ke akun anda</p>
                    <form>
                        <div className='font-inter font-600 flex flex-col'>
                            <label htmlFor="password" className='mb-1'>Password</label>
                            <input type="password" placeholder='Password' id='password' className='border-2 border-gray1 py-3 px-4 rounded-md text-gray2 valid:border-2 outline-blue-500'/>
                        </div>
                        <button className='mt-10 w-full mb-10 hover:opacity-80 bg-[#009FCC] duration-200 text-white rounded-md font-inter font-600 py-3'>Perbarui Password</button>
                    </form>
                </div>
                <div className='flex flex-col items-center mb-10 mt-[362px]'>
                    <img src={logoYayasan} alt={logoYayasan} className='h-10 mb-4'/>
                    <p className='font-inter text-gray3 text-center'>&copy; 2022 Ruang Disabilitas. All Rights Reserved.</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default UpdatePass