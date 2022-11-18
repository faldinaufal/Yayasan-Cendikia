import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import {ImHome3} from 'react-icons/im'
import {GiBookCover, GiBookPile} from 'react-icons/gi'
import {MdEventAvailable} from 'react-icons/md'
import {VscFeedback} from 'react-icons/vsc'
import {AiOutlineDown} from 'react-icons/ai'

const Sidebar = () => {
    const [isOpenMenu, setIsOpenMenu] = useState(false)
    const toggle = () => setIsOpenMenu(!isOpenMenu)
  return (
    <div className='sidebar w-60 h-screen sticky'>
        <div className='font-poppins text-44 text-slate-100 text-center font-bold'>Cendikia</div>
        <div className='mt-7'>
            <div className="text-18 font-poppins font-semibold text-white mb-4 duration-300 hover:translate-x-4 hover:ml-2">
                <Link to='' className='flex items-center ml-3 pl-1 py-1.5 hover:pl-3 hover:bg-zinc-100 hover:text-slate-800 hover:rounded-full'>
                    <ImHome3 className='mr-2 text-22'/>
                    Halaman Utama
                </Link>
            </div>
            <div className="text-18 font-poppins font-semibold text-white" onClick={toggle}>
                <div className='flex items-center pl-4 py-1.5 hover:bg-zinc-100 duration-300 hover:text-slate-800 hover:rounded-full cursor-pointer'>
                    <GiBookCover className='mr-2 text-22'/>
                    Edukasi
                    <AiOutlineDown className='ml-24'/>
                </div>
            </div>
            {isOpenMenu && (
                <div>
                <div className="text-18 font-poppins font-semibold text-white pl-8 mt-2 mb-2 duration-300 hover:translate-x-4">
                    <Link to='' className='flex items-center pl-3 py-1.5 hover:bg-zinc-100 hover:text-slate-800 hover:rounded-full'>
                        <GiBookPile className='mr-2 text-22'/>
                        Artikel
                    </Link>
                </div>
                <div className="text-18 font-poppins font-semibold text-white pl-8 mb-2 duration-300 hover:translate-x-4">
                    <Link to='' className='flex items-center pl-3 py-1.5 hover:bg-zinc-100 hover:text-slate-800 hover:rounded-full'>
                        <MdEventAvailable className='mr-2 text-22'/>
                        Event
                    </Link>
                </div>
                <div className="text-18 font-poppins font-semibold text-white pl-8 duration-300 hover:translate-x-4">
                    <Link to='' className='flex items-center pl-3 py-1.5 hover:bg-zinc-100 hover:text-slate-800 hover:rounded-full'>
                        <VscFeedback className='mr-1.5 text-22'/>
                        Cerita Kisah
                    </Link>
                </div>
            </div>
            )}
        </div>
    </div>
  )
}

export default Sidebar