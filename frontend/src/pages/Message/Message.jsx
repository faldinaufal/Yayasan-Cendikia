import React, { useEffect, useState } from 'react'
import { Navbar, Footer, MessageCard } from '../../components'
import Cookies from 'universal-cookie'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const Message = () => {
    let {terapisId} = useParams()
    const cookies = new Cookies()
    const [data, setData] = useState()
    const [therapiesLength, setTherapiesLength] = useState()
    const [consultationLength, setConsultationLength] = useState()
    const [userRole, setUserRole] = useState()

    const jwttoken = cookies.get('token')

    useEffect(() => { 
        if(jwttoken){
            const getMe = async () => {
                try {
                    const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/users/me?populate=*`, {
                    headers: {
                        Authorization: `Bearer ${jwttoken}`
                    }})
                    setUserRole(response.data.userRole)
                } catch (error) {
                    console.log(error)
                }
            }
            const getTherapist = async () => {
                try {
                    const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/therapists?filters[terapisId][$eq]=${terapisId}&populate=*`, {
                    headers: {
                        Authorization: `Bearer ${jwttoken}`
                    }})
                    setData(response.data.data)
                    setTherapiesLength(response.data.data[0].attributes.therapies.data)
                    setConsultationLength(response.data.data[0].attributes.consultations.data)
                } catch (error) {
                    console.log(error)
                }
            }
            getMe()
            getTherapist()
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[jwttoken])

    if(jwttoken && userRole === "Terapis") {
        return (
            <div>
                <Navbar/>
                <div className='container min-h-[50vh] my-10'>
                    <h1 className='font-century text-[40px] sm:text-[48px] text-[#009FCC] mt-10 mb-2 text-center sm:text-start'>Pesan</h1>
                    <div className='flex items-center justify-center flex-wrap gap-6'>
                        {data && therapiesLength.length < 1 && consultationLength.length < 1 ?
                            <p className='font-inter text-[24px]'>Anda tidak memiliki pesan konsultasi</p>
                        :data && data.map((index) => (
                            <MessageCard data={index} />
                        ))}
                    </div>
                </div>
                <Footer/>
            </div>
        )
    } else {
        return (
            <div>
                <Navbar/>
                <div className='container grid justify-items-center gap-5 my-20'>
                    <h1 className='font-century text-[48px] text-[#009FCC]'>Pesan</h1>
                    <p className='font-inter text-[24px]'>Halaman ini tidak tersedia, Silahkan Tekan tombol untuk kembali ke beranda</p>
                    <a href="/"><button className='px-3 py-2 bg-[#009FCC] text-white text-lg font-bold font-inter rounded-sm duration-150 hover:bg-gray1'>Kembali ke beranda</button></a>
                </div>
                <div className="absolute bottom-0 right-0 left-0">
                    <Footer/>
                </div>
            </div>
        )
    }
}

export default Message