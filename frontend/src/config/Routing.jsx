import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { EC, AEC, Join, Login, Register, ForgotPass, EmailSent, EditPass, PassSucc, NotFound } from '../pages';

const Routing = () => {
  return (
    <Router>
        <Routes>
            <Route path="/pusat-edukasi" element={<EC/>}/>
            <Route path="/pusat-edukasi-artikel" element={<AEC/>}/>
            <Route path="/join-yuk" element={<Join/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/daftar" element={<Register/>}/>
            <Route path="/lupa-password" element={<ForgotPass/>}/>
            <Route path="/email-terkirim" element={<EmailSent/>}/>
            <Route path="/perbarui-password" element={<EditPass/>}/>
            <Route path="/password-sukses" element={<PassSucc/>}/>
            <Route path="*" element={<NotFound/>}/>
        </Routes>
    </Router>
  )
}

export default Routing