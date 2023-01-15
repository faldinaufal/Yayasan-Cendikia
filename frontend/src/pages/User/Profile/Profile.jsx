import Reacte from 'react'
import { Navbar, Footer } from '../../../components'
import ImageProfile from '../../../components/imageProfile/ImageProfile'

const Profile = () => {
  return (
    <section>
        <Navbar/>
        <div className='container my-12 md:my-36'>
            <div className=''>
                <form className='flex flex-wrap justify-evenly'>
                    <div className='w-[250px] h-[250px] rounded-full'>
                        <label htmlFor="img" className='cursor-pointer'>
                            <div className='w-[250px] h-[250px] rounded-full hover:opacity-80'>
                                <ImageProfile/>
                            </div>
                        </label> 
                        <input type="file" id='img' className='hidden'/>
                    </div>  
                    <div className='mx-5 w-[384px] sm:mx-0 lg:w-[500px]'>
                        <h1 className='text-center font-century text-[40px] sm:text-[48px] text-[#009FCC]'>Profil</h1>
                        <div className='sm:flex sm:items-center gap-3 my-7'>
                            <label htmlFor="name" className='font-century text-lg'>Nama</label>
                            <input type="text" id='name' className='border-[1px] mt-1 sm:mt-0 border-dark rounded-md py-2 px-3 w-full focus:outline-[1px] focus:outline-[#009FCC]'/>
                        </div>
                        <div className='sm:flex sm:items-center gap-5'>
                            <label htmlFor="email" className='font-century text-lg'>Email</label>
                            <input type="email" id='email' className='border-[1px] mt-1 sm:mt-0 border-dark rounded-md py-2 px-3 w-full focus:outline-[1px] focus:outline-[#009FCC] invalid:focus:outline-pink-500'/>
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

export default Profile