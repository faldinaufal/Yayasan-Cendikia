import React from 'react'

const ContactUs = () => {
  return (
    <section className='bg-[#E0E7FF] flex items-center justify-center w-[450px] rounded-lg'>
        <div className='w-[336px] py-20'>
            <p className='text-center text-blue-500 font-700 text-3xl font-century mb-4'>Hubungi Kami</p>
            <form>
                <div className='flex flex-col font-inter font-600 mb-4'>
                    <label htmlFor="nama" className='mb-1'>Nama</label>
                    <input type="text" placeholder='Name' className='py-3 px-4 rounded-lg font-400'/>
                </div>
                <div className='flex flex-col font-inter font-600 mb-4'>
                    <label htmlFor="email" className='mb-1'>Email</label>
                    <input type="email" placeholder='Email' className='py-3 px-4 rounded-lg font-400 invalid:border-pink-600 invalid:border-2 invalid:outline-pink-600 valid:outline-blue-600'/>
                </div>
                <div className='flex flex-col font-inter font-600 mb-4'>
                    <label htmlFor="wa" className='mb-1'>Nomor Whatsapp</label>
                    <input type="number" placeholder='Nomor Whatsapp' className='py-3 px-4 rounded-lg font-400'/>
                </div>
                <div className='flex flex-col font-inter font-600 mb-4'>
                    <label htmlFor="deskripsi" className='mb-1'>Deskripsi</label>
                    <textarea name="deskripsi" id="deskripsi" className='py-3 px-4 rounded-lg h-[84px] font-400'></textarea>
                </div>
                <button className='bg-[#009FCC] w-[336px] py-3 px-4 text-white rounded-md font-inter font-600 duration-200 hover:opacity-90'>Kirim</button>
            </form>
        </div>
    </section>
  )
}

export default ContactUs