import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import {ImHome3} from 'react-icons/im'
import {GiBookCover, GiBookPile} from 'react-icons/gi'
import {MdEventAvailable} from 'react-icons/md'
import {VscFeedback} from 'react-icons/vsc'
import {AiOutlineDown} from 'react-icons/ai'
import {BiMenu} from 'react-icons/bi'

const Sidebar = () => {
    const [isOpenMenu, setIsOpenMenu] = useState(false)
    const toggle = () => setIsOpenMenu(!isOpenMenu)
  return (
    <div className='sidebar w-14 h-screen sticky top-0 md:w-60'>
        <div className='mb-3 flex justify-center md:mb-7'>
            <span className='text-35 md:hidden'>
                <BiMenu className='top-7 left-6 relative rounded-full bg-white cursor-pointer'/>
            </span>
            <Link to=''>
                <span className='hidden md:block md:text-44 md:font-poppins md:font-bold md:text-white'>Cendikia</span>
            </Link>
        </div>
        <div className='mt-12 md:mt-0'>
            <div className='mb-3 flex justify-center md:block md:ml-2 md:duration-300 md:hover:-translate-x-5 md:hover:bg-zinc-100 hover:border-l-2 md:rounded-r-full p-1 text-white hover:text-black'>
                <Link to='/halaman-utama' className='duration-300 hover:bg-white hover:-translate-y-2 rounded-full md:duration-75'>
                    <div className='p-1 flex justify-center md:justify-start md:items-center md:pl-2 md:hover:pl-4'>
                        <ImHome3 className='text-30 duration-200 hover:text-slate-700 md:text-22 md:hover:text-black md:duration-75'/>
                        <span className='hidden text-18 ml-2 font-poppins md:block'>Halaman Utama</span>
                    </div>
                </Link>
            </div>
            <div className='mb-2 flex justify-center md:block md:ml-2 md:duration-300 md:hover:-translate-x-5 md:hover:bg-zinc-100 md:rounded-r-full p-1 text-white hover:text-black' onClick={toggle}>
                    <div className='p-1 flex justify-center duration-300 hover:bg-white hover:-translate-y-2 rounded-full cursor-pointer md:pl-2 md:hover:bg-zinc-100 md:justify-start md:hover:-translate-y-0 md:items-center md:hover:pl-4'>
                        <GiBookCover className='text-30 duration-200 hover:text-slate-700 md:duration-75 md:text-22 md:hover:text-black'/>
                        <span className='hidden text-18 ml-2 font-poppins md:block'>Edukasi</span>
                        <AiOutlineDown className='hidden md:block md:ml-20'/>
                    </div>
            </div>
            {isOpenMenu && (<div>
                <div className='mb-2 flex justify-center md:block md:duration-300 md:hover:translate-x-5 md:w-48 md:hover:bg-zinc-100 md:rounded-l-full p-1 text-white hover:text-black md:ml-9'>
                    <Link to='/artikel' className='duration-300 hover:translate-x-1 rounded-full hover:bg-white md:duration-75'>
                        <div className='p-1 flex justify-center md:pl-2 md:justify-start md:items-center'>
                            <GiBookPile className='text-25 duration-200 hover:text-slate-700 md:duration-75 md:text-22 md:hover:text-black'/>
                            <span className='hidden text-18 ml-2 font-poppins md:block'>Artikel</span>
                        </div>
                    </Link>
                </div>
                <div className='mb-2 flex justify-center md:block md:duration-300 md:hover:translate-x-5 md:w-48 md:hover:bg-zinc-100 md:rounded-l-full p-1 text-white hover:text-black md:ml-9'>
                    <Link to='/event' className='duration-300 hover:translate-x-1 rounded-full hover:bg-white md:duration-75'>
                        <div className='p-1 flex justify-center md:pl-2 md:justify-start md:items-center'>
                            <MdEventAvailable className='text-25 duration-200 hover:text-slate-700 md:duration-75 md:text-22 md:hover:text-black'/>
                            <span className='hidden text-18 ml-2 font-poppins md:block'>Event</span>
                        </div>
                    </Link>
                </div>
                <div className='mb-1 flex justify-center md:block md:duration-300 md:hover:translate-x-5 md:w-48 md:hover:bg-zinc-100 md:rounded-l-full p-1 text-white hover:text-black md:ml-9'>
                    <Link to='/cerita-kisah' className='duration-300 hover:translate-x-1 rounded-full hover:bg-white md:duration-75'>
                        <div className='p-1 flex justify-center md:pl-2 md:justify-start md:items-center'>
                            <VscFeedback className='text-25 duration-200 hover:text-slate-700 md:duration-75 md:text-22 md:hover:text-black'/>
                            <span className='hidden text-18 ml-2 font-poppins md:block'>Cerita Kisah</span>
                        </div>
                    </Link>
                </div>
            </div>)}
        </div>
    </div>
  )
}

export default Sidebar