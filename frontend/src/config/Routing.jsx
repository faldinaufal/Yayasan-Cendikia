import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, AboutUs, Education, EducationCenter } from '../pages';

const Routing = () => {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/edukasi/artikel-ilmiah" element={<EducationCenter/>}/>
            <Route path="/edukasi" element={<Education/>}/>
            <Route path="/tentang-kami" element={<AboutUs/>}/>
        </Routes>
    </Router>
  )
}

export default Routing