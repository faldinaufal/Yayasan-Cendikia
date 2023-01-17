import React, { useEffect, useState } from 'react'
import { Navbar, Footer } from '../../../components'
import Cookies from 'universal-cookie'
import { useNavigate } from 'react-router-dom'
import './style.css'
import axios from 'axios'

const Contact = () => {
  const cookies = new Cookies()
  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [phoneNumber, setPhoneNumber] = useState()
  const [description, setDescription] = useState()
  const navigate = useNavigate()

  const jwttoken = cookies.get('token')

  useEffect(() => { 
    if(!jwttoken){
      return navigate("/")
    }
  },[jwttoken])

  const Post = async () => {
    try {
      await axios({
        method: "POST",
        url: `${process.env.REACT_APP_API_URL}/consultations`,
        data: {
          "data": {
            Name: name,
            Email: email,
            phoneNumber: phoneNumber,
            Description : description
          }
        },
        headers: {
          Authorization: `Bearer ${jwttoken}`
        },
      })
      console.log("Berhasil Mengirim Pesan")
      window.location.reload(false);
    } catch (error) {
        console.log(error)
    }
  }

  return (
    <section>
      <Navbar/>
      <div className='container my-12'>
        <h1 className='font-century text-[40px] text-center'>Konsultasi</h1>
        <form action="" className='md:w-[550px] md:mx-auto mt-5'>
          <div className='p-6 grid gap-10 bg-[#E0E7FF] rounded-lg lg:mx-0'>
            <div className='grid gap-4'>
                <div className='grid gap-1'>
                  <p className='font-inter font-semibold text-base text-Text-Title'>Nama</p>
                  <input type="text" placeholder='Nama' onChange={(e) => setName(e.target.value)} className='px-4 py-3 font-inter border-2 border-[#9CA3AF] rounded-[4px] bg-white h-12 focus:outline-2 focus:outline-blue-500 duration-200'/>
                </div>
                <div className='grid gap-1'>
                  <p className='font-inter font-semibold text-base text-Text-Title'>Email</p>
                  <input type="email" placeholder='Email' onChange={(e) => setEmail(e.target.value)} className='px-4 py-3 font-inter border-2 border-[#9CA3AF] rounded-[4px] bg-white h-12 focus:outline-2 focus:outline-blue-500 duration-200 focus:invalid:outline-pink-600 invalid:text-pink-600 invalid:border-pink-600'/>
                </div>
                <div className='grid gap-1'>
                  <p className='font-inter font-semibold text-base text-Text-Title'>Nomor Whatsapp</p>
                  <input type="text" placeholder='Nomor Whatsapp' onChange={(e) => setPhoneNumber(e.target.value)} className='px-4 py-3 font-inter border-2 border-[#9CA3AF] rounded-[4px] bg-white h-12 focus:outline-2 focus:outline-blue-500 duration-200'/>
                </div>
                <div className='grid gap-1'>
                  <p className='font-inter font-semibold text-base text-Text-Title'>Deskripsi</p>
                  <textarea type="text" placeholder='Deskripsi' onChange={(e) => setDescription(e.target.value)} className='px-4 py-3 font-inter border-2 border-[#9CA3AF] rounded-[4px] bg-white h-[180px] focus:outline-2 focus:outline-blue-500 duration-200'/>
                </div>
                <button type='button' onClick={Post} className='bg-[#9CA3AF] text-[#6B7280] duration-200 hover:bg-[#009FCC] hover:text-white rounded-[4px] text-center py-3'>
                  <p className='font-inter text-base font-semibold '>Kirim</p>
                </button>
            </div>
          </div>
        </form>
      </div>
      <Footer/>
    </section>
  )
}

export default Contact