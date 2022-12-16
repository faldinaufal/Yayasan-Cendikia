import React from 'react'
import Footer from "../components/footer/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Routing = () => {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<Footer/>}/>
        </Routes>
    </Router>
  )
}

export default Routing