import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Dashboard } from '../admin';
import { Home, AboutUs } from '../pages';
import { Educenter, DetailAEC, EducenterArticle, EducenterEvent, EducenterStory} from '../pages/EducationCenter'
import { JoinUs } from '../pages/Join';

const Routing = () => {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/educenter" element={<Educenter/>}/>
            <Route path="/join" element={<JoinUs/>}/>
            <Route path="/about" element={<AboutUs/>}/>
            <Route path="/detail-artikel" element={<DetailAEC/>}/>
            <Route path="/halaman-utama" element={<Dashboard/>}/>
            <Route path="/educenter/article" element={<EducenterArticle/>}/>
            <Route path="/educenter/event" element={<EducenterEvent/>}/>
            <Route path="/educenter/story" element={<EducenterStory/>}/>
        </Routes>
    </Router>
  )
}

export default Routing