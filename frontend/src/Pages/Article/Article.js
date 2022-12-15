import React, {useState} from 'react'
import Sidebar from '../../Components/Sidebar/Sidebar'
import profileNeymar from '../../Asset/Image/profile-neymar.jpg'
import {BiMenu} from 'react-icons/bi'
import {AiOutlinePoweroff, AiOutlineSearch, AiOutlinePlus} from 'react-icons/ai'
import {FaUser} from 'react-icons/fa'
import {TbListDetails} from 'react-icons/tb'
import {IoClose} from 'react-icons/io5'
import {FiEdit} from 'react-icons/fi'
import Detail from './Detail'
import Edit from './Edit'
import CreateArticle from './CreateArticle'

const Dashboard = () => {
    const [openProfile, setOpenProfile] = useState(false)
    const toggle = () => setOpenProfile(!openProfile)
    const [openSearch, setOpenSearch] = useState(false)
    const toggleSearch = () => setOpenSearch(!openSearch)
    const [popUpDetail, setPopUpDetail] = useState(false)
    const handlePopUp = () => setPopUpDetail(!popUpDetail)
    const [popUpEdit, setPopUpEdit] = useState(false)
    const handlePopUpEdit = () => setPopUpEdit(!popUpEdit)
    const [popUpArticle, setPopUpArticle] = useState(false)
    const handlePopUpArticle = () => setPopUpArticle(!popUpArticle)
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
                <p className='font-poppins font-semibold text-22 mb-1 tracking-tighter text-slate-700'>Artikel</p>
            </div>
            <div className='mx-5 -mt-1 mb-2 cursor-pointer flex justify-center p-1 rounded-full'>
                <AiOutlinePlus className='text-25 bg-create text-white rounded-full  hover:-translate-y-1 duration-200' onClick={handlePopUpArticle}/>
            </div>
            <div className='mt-3 mx-5 flex flex-wrap pb-7'>
                <div className='mr-3 mb-3 w-48 rounded-xl bg-artikel shadow-md shadow-blue-500/50 duration-300 hover:-translate-y-1'>
                    <div className='relative w-48 h-28 rounded-xl overflow-hidden rounded-b-none'>
                        <img src={profileNeymar} alt={profileNeymar} className='w-48 h-28 rounded-t-xl duration-300 hover:scale-110'/>
                    </div>
                    <div className='mt-1 -mb-1 flex justify-evenly w-36 cursor-pointer mx-auto'>
                        <TbListDetails className='text-18 mt-1 text-white duration-200 hover:-translate-y-1 hover:text-green-300' onClick={handlePopUp}/>
                        <button className='text-20 mt-1 text-white duration-200 hover:-translate-y-1 hover:text-red-500'><IoClose/></button>
                        <FiEdit className='text-18 mt-1 text-white duration-200 hover:-translate-y-1 hover:text-blue-400' onClick={handlePopUpEdit}/>
                    </div>
                    <div className='mt-2 px-2 pb-1'>
                        <p className='text-white text-center font-poppins text-20 font-bold tracking-tighter'>Cristiano Ronaldo</p>
                        <p className='text-white font-poppins text-15 overflow-hidden article-content'>Cristiano Ronaldo dos Santos Aveiro GOIH ComM is a Portuguese professional footballer who plays as a forward for Premier League club Manchester United and captains the Portugal national team</p>
                    </div>
                </div>
            </div>
            <div>
                {popUpDetail && (<Detail/>)}
            </div>
            <div>
               {popUpEdit && (<Edit/>)}
            </div>
            <div>
                {popUpArticle && (<CreateArticle/>)}
            </div>
        </div>
    </div>
  )
}

export default Dashboard