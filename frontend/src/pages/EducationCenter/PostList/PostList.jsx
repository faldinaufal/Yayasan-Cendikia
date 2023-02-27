import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Footer, Navbar, Pagination, Post } from '../../../components'
import axios from 'axios'

const Education = () => {
  let {Categories} = useParams()
  let {Page} = useParams()
  const [post, setPost] = useState([])

  useEffect(() => {
    const fetch = async () => {
        try {
            const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/posts?sort[1]=id%3Adesc&filters[Categories][$eq]=${Categories}&pagination[pageSize]=6&populate=*`)
            setPost(res.data.meta.pagination.pageCount)
        } catch (error) {
            console.log(error);
        }
    }
    fetch()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  if(Page == null) {
      Page = 1
  }

  var cat = Categories.toLowerCase()

  return (
    <div>
        <Navbar/>
        <Post categories={Categories} pages={Page}/>
        <Pagination Page={Page} post={post} cat={cat}/>
        <Footer/>
    </div>
  )
}

export default Education