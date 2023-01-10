import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Dashboard } from '../admin';
import { Home, AboutUs, Education, EducationCenter } from '../pages';
import {MPEC, DetailAEC} from '../pages/EducationCenter'

const Routing = () => {
  return (
    <Router>
        <Routes>
            <Route path="/pusat-edukasi" element={<MPEC/>}/>
            <Route path="/detail-artikel" element={<DetailAEC/>}/>
            {/* <Route path="/join-yuk" element={<Join/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/daftar" element={<Register/>}/>
            <Route path="/lupa-password" element={<ForgotPass/>}/>
            <Route path="/email-terkirim" element={<EmailSent/>}/>
            <Route path="/perbarui-password" element={<EditPass/>}/>
            <Route path="/password-sukses" element={<PassSucc/>}/>
            <Route path="/pusat-edukasi-acara" element={<MoreEvnt/>}/>
            <Route path="/pusat-edukasi-artikel" element={<MoreArticle/>}/>
            <Route path="/detail-acara" element={<DetailEvnt/>}/>
            <Route path="/educenter/story" element={<MoreStory/>}/>
            <Route path="/detail-cerita-kisah" element={<DetailStory/>}/>
            <Route path="/join-terapis" element={<MoreThera/>}/>
            <Route path="/join-konsultasi" element={<MoreConsul/>}/> */}
            <Route path="*" element={<Home/>}/>
            <Route path="/halaman-utama" element={<Dashboard/>}/>
            <Route path="/" element={<Home/>}/>
            <Route path="/educenter/article" element={<Education/>}/>
            <Route path="/about" element={<AboutUs/>}/>
            {/* <Route path="/educenter/article/:title" element={<Home/>}/> */}
        </Routes>
    </Router>
  )
}

export default Routing