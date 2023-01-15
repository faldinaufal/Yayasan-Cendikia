import React from 'react'
import { Navbar, Footer } from '../../../components'

const Contact = () => {
  return (
    <section>
      <Navbar/>
      <div className='container my-12'>
        <h1 className='font-century text-[40px] text-center'>Konsultasi</h1>
        <form action="" className='md:w-[550px] md:mx-auto mt-5'>
          <div className='p-6 grid gap-10 bg-[#E0E7FF] rounded-lg lg:mx-0'>
            <div className='grid gap-4'>
                <div className='grid gap-1'>
                    <p className='font-inter font-semibold text-base text-Text-Title'>Nama</p>
                    <input type="text" placeholder='Nama' className='px-4 py-3 font-inter border-2 border-[#9CA3AF] rounded-[4px] bg-white h-12 focus:outline-2 focus:outline-blue-500 duration-200'/>
                </div>
                <div className='grid gap-1'>
                    <p className='font-inter font-semibold text-base text-Text-Title'>Email</p>
                    <input type="email" placeholder='Email' className='px-4 py-3 font-inter border-2 border-[#9CA3AF] rounded-[4px] bg-white h-12 focus:outline-2 focus:outline-blue-500 duration-200 focus:invalid:outline-pink-600 invalid:text-pink-600 invalid:border-pink-600'/>
                </div>
                <div className='grid gap-1'>
                    <p className='font-inter font-semibold text-base text-Text-Title'>Nomor Whatsapp</p>
                    <input type="text" placeholder='Nomor Whatsapp' className='px-4 py-3 font-inter border-2 border-[#9CA3AF] rounded-[4px] bg-white h-12 focus:outline-2 focus:outline-blue-500 duration-200'/>
                </div>
                <div className='grid gap-1'>
                    <p className='font-inter font-semibold text-base text-Text-Title'>Deskripsi</p>
                    <textarea type="text" placeholder='Deskripsi' className='px-4 py-3 font-inter border-2 border-[#9CA3AF] rounded-[4px] bg-white h-[84px] focus:outline-2 focus:outline-blue-500 duration-200'/>
                </div>
                <div className='grid'>
                    <button className='bg-[#9CA3AF] text-[#6B7280] duration-200 hover:bg-[#009FCC] hover:text-white rounded-[4px] text-center py-3'>
                        <p className='font-inter text-base font-semibold '>Kirim</p>
                    </button>
                </div>
            </div>
          </div>
        </form>
      </div>
      <Footer/>
    </section>
  )
}

export default Contact