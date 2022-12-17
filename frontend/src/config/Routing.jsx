import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { EC } from '../pages';

const Routing = () => {
  return (
    <Router>
        <Routes>
            <Route path="/pusat-edukasi" element={<EC/>}/>
        </Routes>
    </Router>
  )
}

export default Routing