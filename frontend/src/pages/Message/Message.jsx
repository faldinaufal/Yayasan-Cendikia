import React, { useEffect, useState } from 'react'
import { Navbar, Footer, MessageCard } from '../../components'
import Cookies from 'universal-cookie'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Message = () => {
    const cookies = new Cookies()
    const navigate = useNavigate()
    const [data, setData] = useState()

    const jwttoken = cookies.get('token')

    useEffect(() => { 
        if(!jwttoken){
            return navigate("/")
        }
        getMe()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[jwttoken])
    
    const getMe = async () => {
        try {
            await axios.get(`${process.env.REACT_APP_API_URL}/api/users/me?populate=*`, {
            headers: {
                Authorization: `Bearer ${jwttoken}`
            },
            }).then((response) => setData(response.data))
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div>
            <Navbar/>
            <div className='container my-10'>
                <h1 className='font-century text-[48px] text-[#009FCC] mt-10 mb-2'>Pesan</h1>
                <div className='flex items-center justify-center flex-wrap gap-6'>
                    <MessageCard/>
                    <MessageCard/>
                    <MessageCard/>
                    <MessageCard/>
                    <MessageCard/>
                    <MessageCard/>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

 {/*  <div>
    <Navbar/>
    <div className='container grid justify-items-center gap-5 my-20'>
        <h1 className='font-century text-[48px] text-[#009FCC]'>Pesan</h1>
        <p className='font-inter text-[24px]'>Halaman ini tidak tersedia, Silahkan Tekan tombol untuk kembali ke beranda</p>
        <a href="/"><button className='px-3 py-2 bg-[#009FCC] text-white text-lg font-bold font-inter rounded-sm duration-150 hover:bg-gray1'>Kembali ke beranda</button></a>
    </div>
    <Footer/>
</div> */}

export default Message