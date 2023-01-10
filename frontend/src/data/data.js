import {IoHome} from 'react-icons/io5'
import {MdArticle, MdOutlineCastForEducation} from 'react-icons/md'
import {SiEventstore, SiConsul} from 'react-icons/si'
import {BiLayer} from 'react-icons/bi'
import {FiUsers} from 'react-icons/fi'
import {RiPsychotherapyFill, RiAdminFill} from 'react-icons/ri'

export const menu = [
    {
        title: 'Halaman Utama',
        path: '/halaman-utama',
        icon: <IoHome/>
    },
    {
        title: 'Pusat Edukasi',
        icon: <MdOutlineCastForEducation/>,
        submenu: true,
        submenuItems: [
            { title: 'Artikel', path: '/artikel-admin', icon: <MdArticle/> },
            { title: 'Acara', path: '/acara-admin', icon: <SiEventstore/> },
            { title: 'Cerita', path: '/cerita-admin', icon: <BiLayer/> },
        ]
    },
    {
        title: 'Join Yuk',
        icon: <FiUsers/>,
        submenu: true,
        submenuItems: [
            { title: 'Terapis', path: '/terapis-admin', icon: <RiPsychotherapyFill/> },
            { title: 'Konsultasi', path: '/konsultasi-admin', icon: <SiConsul/> },
        ]
    },
    {
        title: 'Admin',
        path: '/halaman-admin',
        icon: <RiAdminFill/>
    },
]