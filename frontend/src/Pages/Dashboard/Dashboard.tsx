import React, {useState} from 'react'
import Sidebar from '../../Components/Sidebar/Sidebar'
import profileNeymar from '../../Asset/Image/profile-neymar.jpg'
import {BiMenu} from 'react-icons/bi'
import {GiBookPile} from 'react-icons/gi'
import {MdEventAvailable} from 'react-icons/md'
import {VscFeedback} from 'react-icons/vsc'
import {HiUsers} from 'react-icons/hi'
import {AiOutlineSearch, AiOutlinePoweroff} from 'react-icons/ai'
import {FaUser} from 'react-icons/fa'

const Dashboard = () => {
    const [openProfile, setOpenProfile] = useState(false)
    const toggle = () => setOpenProfile(!openProfile)
  return (
    <div className='flex'>
        <div>
            <Sidebar/>
        </div>
        <div className='w-full overflow-hidden'>
            <nav className='relative top-6 flex md:top-4 items-center'>
                <BiMenu className='ml-3 text-30 cursor-pointer hidden md:block'/>
                <div className='mx-auto mr-3 mt-1 md:mt-0'>
                    <div className='flex items-center relative left-2 md:0'>
                        <AiOutlineSearch className='absolute text-gray-700 left-2 text-23 border-r-2 border-gray-100'/>
                        <input type="search" placeholder='search' className='border-1 border-black w-60 md:w-72 rounded-md outline-none px-2 pl-9 py-1'/>
                    </div>
                </div>
                <div className='ml-auto mr-10'>
                    <div className='w-9 h-9 flex items-center justify-center rounded-full cursor-pointer ml-auto profile'>
                        <img src={profileNeymar} alt={profileNeymar} className='w-9 h-9 rounded-full bg-slate-500' onClick={toggle}/>
                    </div>
                </div>
            </nav>
            <div className='absolute right-0'>
                {openProfile && (<div className='relative top-7 md:top-5 rounded-md sidebar right-6 py-2 w-48'>
                    <div className='flex cursor-pointer items-center mb-2 text-white font-poppins mx-2 py-1 font-light duration-200 hover:bg-blue-400 rounded-sm'>
                        <FaUser className='text-20 ml-2'/>
                        <p className='ml-3'>Profil Saya</p>
                    </div>
                    <button className='flex items-center text-white font-poppins font-light mx-2 py-1 duration-200 hover:bg-blue-400 w-44 rounded-sm'>
                        <AiOutlinePoweroff className='mr-3 text-20 ml-2'/>
                        Keluar
                    </button>
                </div>)}
            </div>
            <div className='mt-8 ml-5'>
                <p className='font-poppins font-semibold text-22 mb-1 tracking-tighter text-slate-700'>Halaman Utama</p>
                <p className='tracking-tight text-slate-500'>Selamat Datang Wyero JR</p>
            </div>
            <div className='mt-5 mx-5 flex flex-wrap pb-7'>
                <div className='h-36 w-56 justify-center rounded-xl mr-3 mb-3 flex items-center bg-blue-500 shadow-lg shadow-blue-500/50'>
                    <div className='ml-2 flex items-end'>
                        <div className='font-poppins'>
                            <p className='text-35 text-white'>15</p>
                            <p className='text-20 tracking-tighter font-bold text-white'>Artikel</p>
                        </div>
                        <div className='ml-6'>
                            <GiBookPile className='text-70 text-white'/>
                        </div>
                    </div>
                </div>
                <div>
                <div className='h-36 w-56 justify-evenly rounded-xl mr-3 mb-3 flex items-center bg-blue-500 shadow-lg shadow-blue-500/50'>
                    <div className='ml-2 flex items-end'>
                        <div className='font-poppins'>
                            <p className='text-35 text-white'>15</p>
                            <p className='text-20 tracking-tighter font-bold text-white'>Event</p>
                        </div>
                        <div className='ml-6'>
                            <MdEventAvailable className='text-70 text-white'/>
                        </div>
                    </div>
                </div>
                </div>
                <div>
                <div className='h-36 w-56 rounded-xl mr-3 mb-3 flex items-center bg-blue-500 shadow-lg shadow-blue-500/50'>
                    <div className='ml-2 flex items-end'>
                        <div className='font-poppins'>
                            <p className='text-35 text-white'>15</p>
                            <p className='text-20 tracking-tighter font-bold text-white'>Cerita Kisah</p>
                        </div>
                        <div className='ml-6'>
                            <VscFeedback className='text-70 text-white'/>
                        </div>
                    </div>
                </div>
                </div>
                <div>
                <div className='h-36 w-56 rounded-xl mr-3 mb-3 flex items-center bg-blue-500 shadow-lg shadow-blue-500/50'>
                    <div className='ml-2 flex items-end'>
                        <div className='font-poppins'>
                            <p className='text-35 text-white'>15</p>
                            <p className='text-20 tracking-tighter font-bold text-white'>Pengguna</p>
                        </div>
                        <div className='ml-6'>
                            <HiUsers className='text-70 text-white'/>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Dashboard