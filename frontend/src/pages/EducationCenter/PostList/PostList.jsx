import React from 'react'
import { useParams } from 'react-router-dom'
import { Footer, Navbar, Post } from '../../../components'

const Education = () => {
  let {Categories} = useParams()
  return (
    <div>
        <Navbar/>
        <Post categories={Categories}/>
        <Footer/>
    </div>
  )
}

export default Education