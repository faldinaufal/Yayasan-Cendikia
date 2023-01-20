import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {BsChevronLeft} from 'react-icons/bs'
import {logoYayasan} from '../../../assets/image'
import axios from 'axios'
import Cookies from 'universal-cookie'

const Login = () => {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [msg, setMsg] = useState()
    const cookies = new Cookies()
    const navigate = useNavigate()

    const jwttoken = cookies.get('token')

    useEffect(()=> {
        if(jwttoken) {
            navigate("/")
        }
        abc()
    })

    const Login = async () => {
        await axios.post(`${process.env.REACT_APP_API_URL}/api/auth/local`, {
          identifier: email,
          password: password
        }).then((res)=> {
          cookies.set('token', res.data.jwt, {path: "/"})
          console.log("Berhasil Masuk")
          navigate("/")
        }).catch((error) => {
          console.log(error)  
          console.log(error.response.data.error.message)
          setMsg("Email atau Password Salah")
        })
    }

    function abc() {
        var element = document.getElementById("button");
        if (email != null && password != null) {
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
                        <p className='font-century font-700 text-4xl mt-10 mb-2'>Masuk</p>
                        <p className='font-inter leading-6 text-gray3 mb-2 text-center sm:text-start'>Masuk dengan akun yang pernah anda daftarkan</p>
                        {msg != null &&
                        <div className='bg-[#FD8A8A] py-1 rounded-sm text-center text-[#252A41] font-semibold font-inter'>
                            <p>{msg}</p>
                        </div>
                        }
                        <div className='mt-2'>
                            <div className='font-inter font-600 flex flex-col mb-4'>
                                <label htmlFor="email" className='mb-1'>Email</label>
                                <input type="email" placeholder='Email' id='email' onChange={(e) => setEmail(e.target.value)} className='font-400 border-2 border-gray1 py-3 px-4 rounded-md invalid:outline-pink-500 text-gray2 valid:border-2 invalid:text-pink-500 outline-2 outline-blue-500 invalid:border-pink-600'/>
                            </div>
                            <div className='font-inter font-600 flex flex-col'>
                                <label htmlFor="password" className='mb-1'>Password</label>
                                <input type="password" placeholder='Password' id='password' onChange={(e) => setPassword(e.target.value)} className=' font-400 border-2 border-gray1 py-3 px-4 rounded-md text-gray2 valid:border-2 outline-blue-500'/>
                            </div>
                            <button onClick={Login} id="button" className=' mt-10 w-full mb-10 hover:bg-[#009FCC] duration-200 hover:text-white bg-gray1 rounded-md font-inter font-600 text-gray2 py-3'>Masuk</button>
                        </div>
                        <div className='font-inter flex items-center justify-center'>
                            <p className='text-dark mr-1'>Belum Pernah Mendaftar?</p>
                            <a href='/register' className='font-600 text-[#009FCC] hover:opacity-70 duration-200'>Daftar sekarang</a>
                        </div>
                        <a href='/forgot/password' className='font-inter font-600 text-[#009FCC] hover:opacity-70 duration-200 flex justify-center mt-2 mb-[174px]'>Lupa Password</a>
                    </div>
                    <div className='flex flex-col items-center mb-10'>
                        <img src={logoYayasan} alt={logoYayasan} className='w-12 h-12 mb-4'/>
                        <p className='font-inter text-gray3 text-center'>&copy; 2022 Ruang Disabilitas. All Rights Reserved.</p>
                    </div>
                </div>
            </div>
        </section>
  )
}

export default Login