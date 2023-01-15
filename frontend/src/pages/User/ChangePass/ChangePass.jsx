import React from 'react'
import { Navbar, Footer } from '../../../components'

const ChangePass = () => {
  return (
    <section>
        <Navbar/>
        <div className='container my-12 md:my-36'>
            <div className=''>
                <h1 className='font-century text-[40px] sm:text-[48px] mx-5 text-[#009FCC]'>Ganti Password</h1>
                <form className=' mx-5'>
                    <div className=''>
                        <div className='mt-7'>
                            <label htmlFor="oldPassword" className='font-century text-lg'>Password Lama</label>
                            <input type="password" id='oldPassword' className='border-[1px] mt-1 border-dark rounded-md py-2 px-3 w-full focus:outline-[1px] focus:outline-[#009FCC]'/>
                        </div>
                        <div className='my-5'>
                            <label htmlFor="newPassword" className='font-century text-lg'>Password Baru</label>
                            <input type="password" id='newPassword' className='border-[1px] mt-1 border-dark rounded-md py-2 px-3 w-full focus:outline-[1px] focus:outline-[#009FCC]'/>
                        </div>
                        <div className=''>
                            <label htmlFor="pass" className='font-century text-lg'>Ulangi Password Baru</label>
                            <input type="password" id='pass' className='border-[1px] mt-1 border-dark rounded-md py-2 px-3 w-full focus:outline-[1px] focus:outline-[#009FCC]'/>
                        </div>
                        <button className='font-inter bg-[#009FCC] w-[90px] py-2 rounded-md text-white font-600 mt-5 hover:bg-white hover:border-2 duration-200 hover:border-[#009FCC] hover:text-black'>Update</button>
                    </div>  
                </form>
            </div>
        </div>
        <Footer/>
    </section>
  )
}

export default ChangePass