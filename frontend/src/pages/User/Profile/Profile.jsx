import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Navbar, Footer } from '../../../components'
import Cookies from 'universal-cookie'
import axios from 'axios'
import ImgProfileDefault from '../../../assets/image/noProfile2.jpg'

const Profile = () => {
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
        <section>
            <Navbar/>
            {data &&
                <div className='container my-12 md:my-36'>
                    <div className=''>
                        <form className='flex flex-wrap justify-evenly'>
                            <div>
                                <label htmlFor="img" className='cursor-pointer'>
                                    <div className='hover:opacity-80'>
                                    {data.photoProfile === null ?
                                        <img className='object-cover rounded-full w-[250px] h-[250px]' src={ImgProfileDefault} alt="Foto Profil" />
                                    :data.photoProfile !== null &&
                                        <img className='object-cover rounded-full w-[250px] h-[250px]' src={process.env.REACT_APP_API_URL+data.photoProfile.url} alt="Foto Profil" />
                                    }
                                    </div>
                                </label> 
                                <input type="file" id='img' className='hidden'/>
                            </div>  
                            <div className='mx-5 w-[384px] sm:mx-0 lg:w-[500px]'>
                                <h1 className='text-center font-century text-[40px] sm:text-[48px] text-[#009FCC]'>Profil</h1>
                                <div className='sm:flex sm:items-center gap-3 my-7'>
                                    <label htmlFor="name" className='font-century text-lg'>Nama</label>
                                    <input type="text" id='name' value={data.username} className='border-[1px] text-black  mt-1 sm:mt-0 border-dark rounded-md py-2 px-3 w-full focus:outline-[1px] focus:outline-[#009FCC]' disabled/>
                                </div>
                                <div className='sm:flex sm:items-center gap-5'>
                                    <label htmlFor="email" className='font-century text-lg'>Email</label>
                                    <input disabled type="email" value={data.email} id='email' className='border-[1px] mt-1 sm:mt-0 border-dark rounded-md py-2 px-3 w-full focus:outline-[1px] focus:outline-[#009FCC] invalid:focus:outline-pink-500'/>
                                </div>
                            </div>  
                        </form>
                    </div>
                </div>
            }
            <Footer/>
        </section>
    )
}

export default Profile