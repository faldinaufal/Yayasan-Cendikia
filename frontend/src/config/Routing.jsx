import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, Education } from '../pages';

const Routing = () => {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/edukasi/artikel-ilmiah" element={<Education/>}/>
        </Routes>
    </Router>
  )
}

export default Routing