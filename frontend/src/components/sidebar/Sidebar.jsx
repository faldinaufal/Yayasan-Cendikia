import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { logoCendikia } from '../../assets/image'
import {HiOutlineMenu} from 'react-icons/hi'
import {MdOutlineMenuOpen} from 'react-icons/md'
import {BsChevronDown} from 'react-icons/bs'
import { menu } from '../../data/data'

const Sidebar = () => {
  const [open, setOpen] = useState(false)
  const [subMenu, setSubMenu] = useState(false)
  return (
    <section>
      <div className=''>
        <aside className={`background-sidebar min-h-screen duration-300 ${open ? 'w-72' : 'w-20'}`}>
          <div className='relative flex items-center gap-3 mx-3 py-3'>
            <img src={logoCendikia} alt={logoCendikia} className='w-14 h-14 float-left'/>
            <p className={`uppercase font-century font-700 text-4xl text-white ${!open && 'scale-0'}`}>cendikia</p>
            <div className={`text-black  cursor-pointer absolute -right-16 ${open ? 'top-6' : 'top-7'} duration-200`} onClick={()=>setOpen(!open)}>
              {!open ? <HiOutlineMenu className='text-3xl'/> : <MdOutlineMenuOpen className='text-4xl'/>}
            </div>
          </div>
          <div className={`mt-4 mx-auto ${open?'w-[280px]':'w-10'}`}>
            {menu.map((menu, index)=>(
              <>
              <Link key={index} to={menu.path} className={`relative flex items-center ${!open?'justify-center':'justify-start'} gap-3 py-2 rounded-lg my-2 text-white font-century font-700 duration-200 hover:bg-slate-800`}>
                <span className={`text-2xl ${open && 'ml-6'}`}>{menu.icon}</span>
                <div className={`text-lg ${!open && 'hidden'}`} onClick={()=>setSubMenu(menu.title)}>{menu.title}</div>
                <div className='absolute right-5'>
                  {menu.submenu && (
                    <BsChevronDown className={`text-lg ${!open && 'hidden'}`}/>
                  )}
                </div>
              </Link>
              <div>
                {menu.submenu && subMenu && (
                  <div className={`ml-14 ${!open && 'hidden'}`}>
                    {menu.submenuItems.map((submenuItems, index)=>(
                      <Link key={index} to={submenuItems.path} className='flex font-century font-600 rounded-lg items-center gap-3 py-2 my-1 text-white duration-200 hover:bg-slate-800'>
                        <span className={`text-xl ${open && 'ml-2'}`}>{submenuItems.icon}</span>
                        <div>{submenuItems.title}</div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              </>
            ))}
          </div>
        </aside>
      </div>
    </section>
  )
}

export default Sidebar