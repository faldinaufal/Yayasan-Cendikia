import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import {BsChevronLeft} from 'react-icons/bs'
import {logoYayasan} from '../../../assets/image'
import { useState } from 'react'
import axios from 'axios'

const Register = () => {
    const [email, setEmail] = useState()
    const [firstName, setFirstName] = useState()
    const [lastName, setLastName] = useState()
    const [password, setPassword] = useState()
    const [msg, setMsg] = useState()
    const navigate = useNavigate()

    useEffect(() => {
        abc()
    })

    const Register = async () => {
        try {
            await axios.post(`${process.env.REACT_APP_API_URL}/api/auth/local/register`, {
                email: email,
                username: firstName,
                password: password,
                firstName: firstName,
                lastName: lastName
            })
            navigate('/login')
        } catch (error) {
            console.log(error)
            setMsg("Email telah digunakan")
        }
    }

    function abc() {
        var element = document.getElementById("button");
        if (email != null && firstName != null && password != null && !lastName) {
            element.style.backgroundColor = "#009FCC"; 
            element.style.color = "#FFFFFF";
            element.addEventListener("mouseout", function(){
                this.style.backgroundColor = "#009FCC";
                this.style.color = "#FFFFFF"
            })
            element.addEventListener("mouseover", function(){
                this.style.backgroundColor = "#9CA3AF";
                this.style.color = "#6B7280"
            })
        }
    }
    
    return (
        <section>
            <div className='flex justify-center md:justify-start gap-3'>
            <div className='hidden md:block bg-bgLogin h-screen sticky top-0 rounded-br-[40px] rounded-tr-[40px] bg-no-repeat w-[708px] bg-center bg-cover'></div>
                <div className='mx-0 md:mx-7 lg:mx-auto'>
                    <div className='w-[348px] flex flex-col items-center sm:block'>
                        <a href='/' className='flex items-center text-[#009FCC] font-inter font-600 hover:opacity-70 duration-200 mt-10'>
                            <BsChevronLeft className='mr-[8.89px]'/>
                            Kembali ke Beranda
                        </a>
                        <p className='font-century font-700 text-4xl mt-10 mb-2'>Daftar</p>
                        <p className='font-inter leading-6 text-gray3 mb-10 text-center sm:text-start'>Daftarkan akun untuk bergabung bersama Ruang Disabilitas</p>
                        {msg != null &&
                        <div className='font-inter bg-pink-200 bg-opacity-60 p-2 rounded-md text-[14px] text-red-600 text-center'>
                            <p>{msg}</p>
                        </div>
                        }
                        <div>
                            <div className='font-inter font-600 flex flex-col mb-4'>
                                <label htmlFor="email" className='mb-1'>Email</label>
                                <input type="email" placeholder='Email' onChange={(e) => setEmail(e.target.value)} id='email' className='font-400 border-2 border-gray1 py-3 px-4 rounded-md invalid:outline-pink-500 text-gray2 valid:border-2 invalid:text-pink-500 outline-2 outline-blue-500 invalid:border-pink-600'/>
                            </div>
                            <div className='font-inter font-600 flex flex-col mb-4'>
                                <label htmlFor="firstname" className='mb-1'>Nama Pertama</label>
                                <input type="text" placeholder='Nama Terakhir' id='firstname' onChange={(e) => setFirstName(e.target.value)} className='font-400 border-2 focus:outline-2 focus:outline-blue-500 border-gray1 py-3 px-4 rounded-md text-gray2 valid:border-2'/>
                            </div>
                            <div className='font-inter font-600 flex flex-col mb-4'>
                                <label htmlFor="lastname" className='mb-1'>Nama Terakhir</label>
                                <input type="text" placeholder='Nama Terakhir' id='lastname' onChange={(e) => setLastName(e.target.value)} className='font-400 border-2 focus:outline-2 focus:outline-blue-500 border-gray1 py-3 px-4 rounded-md text-gray2 valid:border-2'/>
                            </div>
                            <div className='font-inter font-600 flex flex-col'>
                                <label htmlFor="password" className='mb-1'>Password</label>
                                <input type="password" placeholder='Password' id='password' onChange={(e) => setPassword(e.target.value)} className='font-400 border-2 border-gray1 py-3 px-4 rounded-md text-gray2 valid:border-2 outline-blue-500'/>
                            </div>
                            <button id='button' onClick={Register} className='my-10 w-full hover:bg-[#009FCC] duration-200 hover:text-white bg-gray1 rounded-md font-inter font-600 text-gray2 py-3'>Daftar</button>
                        </div>
                        <div className='font-inter flex items-center justify-center'>
                            <p className='text-dark mr-1'>Sudah memiliki akun?</p>
                            <a href='/login' className='font-600 text-[#009FCC] hover:opacity-70 duration-200'>Masuk sekarang</a>
                        </div>
                    </div>
                    <div className='flex flex-col mt-[114px] items-center mb-10'>
                        <img src={logoYayasan} alt={logoYayasan} className='h-10 mb-4'/>
                        <p className='font-inter text-gray3 text-center'>&copy; 2022 Ruang Disabilitas. All Rights Reserved.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Register