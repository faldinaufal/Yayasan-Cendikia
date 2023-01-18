import React, { useEffect } from 'react'
import { Navbar, Footer } from '../../components'
import {AiOutlineClose} from 'react-icons/ai'
import Cookies from 'universal-cookie'
import { useNavigate } from 'react-router-dom'

const Message = () => {
    const cookies = new Cookies()
    const navigate = useNavigate()

    const jwttoken = cookies.get('token')

    useEffect(() => { 
        if(!jwttoken){
        return navigate("/")
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[jwttoken])
    
    return (
        <section>
            <Navbar/>
            <div className='container my-10'>
                <h1 className='font-century text-[48px] text-[#009FCC] mt-10 mb-2'>Pesan</h1>
                <div className='flex items-center justify-center flex-wrap gap-6'>
                    <div className='shadow-card rounded-md w-[288px]'>
                    <div className='mx-2 relative py-2 font-inter text-center'>
                            <button className='text-xl absolute right-1 duration-200 opacity-60'><AiOutlineClose/></button>
                            <div className='font-600 mt-2'>
                                <p>Wyero JR</p>
                                <p className='my-1'>Wyero@gmail.co.id</p>
                                <a href="/" className='duration-200 hover:opacity-60'>08122233344</a>
                            </div>
                            <div className='text-start mt-1'>
                                <p className='font-600'>Deskripsi : </p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis odio alias, adipisci nemo ipsa eaque cumque, facilis accusantium deleniti dolore quia, aspernatur fugit nam perferendis iusto facere expedita quam id!</p>
                            </div>
                    </div>
                    </div>
                    <div className='shadow-card rounded-md w-[288px]'>
                    <div className='mx-2 relative py-2 font-inter text-center'>
                            <button className='text-xl absolute right-1 duration-200 opacity-60'><AiOutlineClose/></button>
                            <div className='font-600 mt-2'>
                                <p>Wyero JR</p>
                                <p className='my-1'>Wyero@gmail.co.id</p>
                                <a href="/" className='duration-200 hover:opacity-60'>08122233344</a>
                            </div>
                            <div className='text-start mt-1'>
                                <p className='font-600'>Deskripsi : </p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis odio alias, adipisci nemo ipsa eaque cumque, facilis accusantium deleniti dolore quia, aspernatur fugit nam perferendis iusto facere expedita quam id!</p>
                            </div>
                    </div>
                    </div>
                    <div className='shadow-card rounded-md w-[288px]'>
                    <div className='mx-2 relative py-2 font-inter text-center'>
                            <button className='text-xl absolute right-1 duration-200 opacity-60'><AiOutlineClose/></button>
                            <div className='font-600 mt-2'>
                                <p>Wyero JR</p>
                                <p className='my-1'>Wyero@gmail.co.id</p>
                                <a href="/" className='duration-200 hover:opacity-60'>08122233344</a>
                            </div>
                            <div className='text-start mt-1'>
                                <p className='font-600'>Deskripsi : </p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis odio alias, adipisci nemo ipsa eaque cumque, facilis accusantium deleniti dolore quia, aspernatur fugit nam perferendis iusto facere expedita quam id!</p>
                            </div>
                    </div>
                    </div>
                    <div className='shadow-card rounded-md w-[288px]'>
                    <div className='mx-2 relative py-2 font-inter text-center'>
                            <button className='text-xl absolute right-1 duration-200 opacity-60'><AiOutlineClose/></button>
                            <div className='font-600 mt-2'>
                                <p>Wyero JR</p>
                                <p className='my-1'>Wyero@gmail.co.id</p>
                                <a href="/" className='duration-200 hover:opacity-60'>08122233344</a>
                            </div>
                            <div className='text-start mt-1'>
                                <p className='font-600'>Deskripsi : </p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis odio alias, adipisci nemo ipsa eaque cumque, facilis accusantium deleniti dolore quia, aspernatur fugit nam perferendis iusto facere expedita quam id!</p>
                            </div>
                    </div>
                    </div>
                    <div className='shadow-card rounded-md w-[288px]'>
                    <div className='mx-2 relative py-2 font-inter text-center'>
                            <button className='text-xl absolute right-1 duration-200 opacity-60'><AiOutlineClose/></button>
                            <div className='font-600 mt-2'>
                                <p>Wyero JR</p>
                                <p className='my-1'>Wyero@gmail.co.id</p>
                                <a href="/" className='duration-200 hover:opacity-60'>08122233344</a>
                            </div>
                            <div className='text-start mt-1'>
                                <p className='font-600'>Deskripsi : </p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis odio alias, adipisci nemo ipsa eaque cumque, facilis accusantium deleniti dolore quia, aspernatur fugit nam perferendis iusto facere expedita quam id!</p>
                            </div>
                    </div>
                    </div>
                    <div className='shadow-card rounded-md w-[288px]'>
                    <div className='mx-2 relative py-2 font-inter text-center'>
                            <button className='text-xl absolute right-1 duration-200 opacity-60'><AiOutlineClose/></button>
                            <div className='font-600 mt-2'>
                                <p>Wyero JR</p>
                                <p className='my-1'>Wyero@gmail.co.id</p>
                                <a href="/" className='duration-200 hover:opacity-60'>08122233344</a>
                            </div>
                            <div className='text-start mt-1'>
                                <p className='font-600'>Deskripsi : </p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis odio alias, adipisci nemo ipsa eaque cumque, facilis accusantium deleniti dolore quia, aspernatur fugit nam perferendis iusto facere expedita quam id!</p>
                            </div>
                    </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </section>
    )
}

export default Message