import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { EC, DetailAEC, Join, Login, Register, ForgotPass, EmailSent, EditPass, PassSucc, NotFound, MoreEvnt, DetailEvnt, MoreStory, DetailStory, MoreThera, MoreConsul } from '../pages';

const Routing = () => {
  return (
    <Router>
        <Routes>
            <Route path="/pusat-edukasi" element={<EC/>}/>
            <Route path="/detail-artikel" element={<DetailAEC/>}/>
            <Route path="/join-yuk" element={<Join/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/daftar" element={<Register/>}/>
            <Route path="/lupa-password" element={<ForgotPass/>}/>
            <Route path="/email-terkirim" element={<EmailSent/>}/>
            <Route path="/perbarui-password" element={<EditPass/>}/>
            <Route path="/password-sukses" element={<PassSucc/>}/>
            <Route path="/pusat-edukasi-acara" element={<MoreEvnt/>}/>
            <Route path="/detail-acara" element={<DetailEvnt/>}/>
            <Route path="/pusat-edukasi-cerita-kisah" element={<MoreStory/>}/>
            <Route path="/detail-cerita-kisah" element={<DetailStory/>}/>
            <Route path="/join-terapis" element={<MoreThera/>}/>
            <Route path="/join-konsultasi" element={<MoreConsul/>}/>
            <Route path="*" element={<NotFound/>}/>
        </Routes>
    </Router>
  )
}

export default Routing