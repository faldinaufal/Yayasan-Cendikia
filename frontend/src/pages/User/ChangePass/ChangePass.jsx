import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Navbar, Footer } from '../../../components'
import Cookies from 'universal-cookie'
import axios from 'axios'

const ChangePass = () => {
    const cookies = new Cookies()
    const navigate = useNavigate()
    const [oldPassword, setOldPassword] = useState()
    const [newPassword, setNewPassword] = useState()
    const [confPassword, setConfPassword] = useState()
    const [msg, setMsg] = useState(null)

    const jwttoken = cookies.get('token')

    useEffect(() => { 
        if(!jwttoken){
        return navigate("/")
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[jwttoken])

    const ChangePass = async () => {
        try {
            await axios({
            method: "POST",
            url: `${process.env.REACT_APP_API_URL}/api/auth/change-password`,
            data: {
                currentPassword: oldPassword,
                password: newPassword,
                passwordConfirmation: confPassword
            },
            headers: {
                Authorization: `Bearer ${jwttoken}`
            },
            })
            setMsg("Password Berhasil Diubah")
        } catch (error) {
            console.log(error)
            setMsg("Password Tidak Sesuai")
        }
    }

    return (
        <section>
            <Navbar/>
            <div className='container my-12 md:my-36'>
                <div className=''>
                    <h1 className='font-century text-[40px] mb-2 sm:text-[48px] text-center text-[#009FCC] sm:text-start sm:ml-5'>Ganti Password</h1>
                    {msg === "Password Berhasil Diubah" &&
                    <div className='bg-[#79EC66] p-2 mx-5 rounded-md bg-opacity-50 text-[15px] text-green-600 font-inter'>
                        <p>{msg}</p>
                    </div>
                    }
                    {msg === "Password Tidak Sesuai" &&
                    <div className='bg-pink-200 bg-opacity-60 p-2 text-red-600 mx-5 rounded-md text-[15px] font-inter'>
                        <p>{msg}</p>
                    </div>
                    }
                    <div className='mx-5'>
                        <div className=''>
                            <div className='mt-3'>
                                <label htmlFor="oldPassword" className='font-century text-lg'>Password Lama</label>
                                <input type="password" onChange={(e) => setOldPassword(e.target.value)} id='oldPassword' className='border-[1px] mt-1 border-dark rounded-md py-2 px-3 w-full focus:outline-[1px] focus:outline-[#009FCC]'/>
                            </div>
                            <div className='my-5'>
                                <label htmlFor="newPassword" className='font-century text-lg'>Password Baru</label>
                                <input type="password" id='newPassword' onChange={(e) => setNewPassword(e.target.value)} className='border-[1px] mt-1 border-dark rounded-md py-2 px-3 w-full focus:outline-[1px] focus:outline-[#009FCC]'/>
                            </div>
                            <div className=''>
                                <label htmlFor="pass" className='font-century text-lg'>Ulangi Password Baru</label>
                                <input type="password" id='pass' onChange={(e) => setConfPassword(e.target.value)} className='border-[1px] mt-1 border-dark rounded-md py-2 px-3 w-full focus:outline-[1px] focus:outline-[#009FCC]'/>
                            </div>
                            <button onClick={ChangePass} className='font-inter bg-[#009FCC] px-3 py-2 rounded-md text-white font-600 mt-5 hover:bg-white border-2 border-[#009FCC] duration-200 hover:border-[#009FCC] hover:text-[#009FCC]'>Ubah Password</button>
                        </div>  
                    </div>
                </div>
            </div>
            <Footer/>
        </section>
    )
}

export default ChangePass