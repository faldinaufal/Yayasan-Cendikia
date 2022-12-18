import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { EC, AEC } from '../pages';

const Routing = () => {
  return (
    <Router>
        <Routes>
            <Route path="/pusat-edukasi" element={<EC/>}/>
            <Route path="/pusat-edukasi-artikel" element={<AEC/>}/>
        </Routes>
    </Router>
  )
}

export default Routing