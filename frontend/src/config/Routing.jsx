import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Dashboard } from '../admin';
import { Home, AboutUs } from '../pages';
import { Educenter, DetailPost, PostList} from '../pages/EducationCenter'
import { JoinUs } from '../pages/Join';

const Routing = () => {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/educenter" element={<Educenter/>}/>
            <Route path="/join" element={<JoinUs/>}/>
            <Route path="/about" element={<AboutUs/>}/>
            <Route path="/educenter/:Categories/:Title" element={<DetailPost/>}/>
            <Route path="/halaman-utama" element={<Dashboard/>}/>
            <Route path="/educenter/:Categories" element={<PostList/>}/>
            <Route path="/educenter/:Categories" element={<PostList/>}/>
        </Routes>
    </Router>
  )
}

export default Routing