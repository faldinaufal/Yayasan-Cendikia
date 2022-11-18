import React from 'react'
import Sidebar from '../../Components/Sidebar/Sidebar'
import {BiMenu} from 'react-icons/bi'
import {GiBookPile} from 'react-icons/gi'
import {MdEventAvailable} from 'react-icons/md'
import {VscFeedback} from 'react-icons/vsc'
import {HiUsers} from 'react-icons/hi'

const Dashboard = () => {
  return (
    <div className='flex'>
        <div>
            <Sidebar/>
        </div>
        <div className='w-full'>
            <nav className='mt-6 h-10 flex items-center md:mt-4'>
                <BiMenu className='ml-3 text-30 cursor-pointer text-gray-70000'/>
            </nav>
            <div className='mt-4 ml-5'>
                <p className='font-poppins font-semibold text-22 mb-1 tracking-tighter text-slate-700'>Halaman Utama</p>
                <p className='tracking-tight text-slate-500'>Selamat Datang Wyero JR</p>
            </div>
            <div className='mt-7 mx-5 flex flex-wrap pb-7 overflow-auto h-96'>
                <div className='h-36 px-7 rounded-xl mr-3 mb-3 flex items-center bg-blue-500 shadow-lg shadow-blue-500/50'>
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
                <div className='h-36 px-7 rounded-xl mr-3 mb-3 flex items-center bg-blue-500 shadow-lg shadow-blue-500/50'>
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
                <div className='h-36 px-7 rounded-xl mr-3 mb-3 flex items-center bg-blue-500 shadow-lg shadow-blue-500/50'>
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
                <div className='h-36 px-7 rounded-xl mr-3 mb-3 flex items-center bg-blue-500 shadow-lg shadow-blue-500/50'>
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