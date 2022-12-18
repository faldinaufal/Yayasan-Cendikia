import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, Education, AboutUs } from '../pages';

const Routing = () => {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/edukasi/artikel-ilmiah" element={<Education/>}/>
            <Route path="/tentang-kami" element={<AboutUs/>}/>
        </Routes>
    </Router>
  )
}

export default Routing