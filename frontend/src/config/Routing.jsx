import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { EC, AEC, Join, Login } from '../pages';

const Routing = () => {
  return (
    <Router>
        <Routes>
            <Route path="/pusat-edukasi" element={<EC/>}/>
            <Route path="/pusat-edukasi-artikel" element={<AEC/>}/>
            <Route path="/join-yuk" element={<Join/>}/>
            <Route path="/login" element={<Login/>}/>
        </Routes>
    </Router>
  )
}

export default Routing