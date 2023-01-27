import React from 'react'
import Fb from '../../assets/Icon/FB.svg'
import FbHover from '../../assets/Icon/FBHover.svg'
import IG from '../../assets/Icon/Sosmed Icon/Social Media=Instagram, State=Default.svg'
import IGHover from '../../assets/Icon/Sosmed Icon/Social Media=Instagram, State=Hover.svg'
import Twitter from '../../assets/Icon/Sosmed Icon/Social Media=Twitter, State=Default.svg'
import TwitterHover from '../../assets/Icon/Sosmed Icon/Social Media=Twitter, State=Hover.svg'
import Tiktok from '../../assets/Icon/Sosmed Icon/Social Media=Tik Tok, State=Default.svg'
import TiktokHover from '../../assets/Icon/Sosmed Icon/Social Media=Tik Tok, State=Hover.svg'
import WA from '../../assets/Icon/Sosmed Icon/Social Media=Whatsapp, State=Default.svg'
import WAHover from '../../assets/Icon/Sosmed Icon/Social Media=Whatsapp, State=Hover.svg'
import Gmail from '../../assets/Icon/Sosmed Icon/Social Media=Gmail, State=Default.svg'
import GmailHover from '../../assets/Icon/Sosmed Icon/Social Media=Gmail, State=Hover.svg'
import YT from '../../assets/Icon/Sosmed Icon/Social Media=Youtube, State=Default.svg'
import YTHover from '../../assets/Icon/Sosmed Icon/Social Media=Youtube, State=Hover.svg'

const Medsos = () => {
  return (
    <section>
        <div className='flex flex-wrap gap-4 items-center'>
            <div className='group duration-150 rounded-full'>
                <a href="/" target="_blank"><img src={Fb} alt="Facebook Logo" className='w-10 h-10 rounded-full group-hover:hidden'/></a>
                <a href="/" target="_blank"><img src={FbHover} alt="Facebook Logo" className='w-10 h-10 rounded-full hidden group-hover:block'/></a>
            </div>
            <div className='group duration-150 rounded-full'>
                <a href="/" target="_blank"><img src={IG} alt="Instagram Logo" className='w-10 h-10 rounded-full group-hover:hidden'/></a>
                <a href="/" target="_blank"><img src={IGHover} alt="Instagram Logo" className='w-10 h-10 rounded-full hidden group-hover:block'/></a>
            </div>
            <div className='group duration-150 rounded-full'>
                <a href="/" target="_blank"><img src={Twitter} alt="Twitter Logo" className='w-10 h-10 rounded-full group-hover:hidden'/></a>
                <a href="/" target="_blank"><img src={TwitterHover} alt="Twitter Logo" className='w-10 h-10 rounded-full hidden group-hover:block'/></a>
            </div>
            <div className='group duration-150 rounded-full'>
                <a href="/" target="_blank"><img src={Tiktok} alt="Tiktok Logo" className='w-10 h-10 rounded-full group-hover:hidden'/></a>
                <a href="/" target="_blank"><img src={TiktokHover} alt="Tiktok Logo" className='w-10 h-10 rounded-full hidden group-hover:block'/></a>
            </div>
            <div className='group duration-150 rounded-full'>
                <a href="/" target="_blank"><img src={WA} alt="Whatsapp Logo" className='w-10 h-10 rounded-full group-hover:hidden'/></a>
                <a href="/" target="_blank"><img src={WAHover} alt="Whatsapp Logo" className='w-10 h-10 rounded-full hidden group-hover:block'/></a>
            </div>
            <div className='group duration-150 rounded-full'>
                <a href="/" target="_blank"><img src={Gmail} alt="Gmail Logo" className='w-10 h-10 rounded-full group-hover:hidden'/></a>
                <a href="/" target="_blank"><img src={GmailHover} alt="Gmail Logo" className='w-10 h-10 rounded-full hidden group-hover:block'/></a>
            </div>
            <div className='group duration-150 rounded-full'>
                <a href="/" target="_blank"><img src={YT} alt="Youtube Logo" className='w-10 h-10 rounded-full group-hover:hidden'/></a>     
                <a href="/" target="_blank"><img src={YTHover} alt="Youtube Logo" className='w-10 h-10 rounded-full hidden group-hover:block'/></a>
            </div>
        </div>
    </section>
  )
}

export default Medsos