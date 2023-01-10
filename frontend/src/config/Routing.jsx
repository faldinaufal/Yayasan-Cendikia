import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Dashboard } from '../admin';
import { Home, About } from '../pages';
import { Educenter, EducenterArticles, EducenterEvent, EducenterStory, Article, Event, Stories } from '../pages/EducationCenter';
import { LetsJoin, JoinConsul, JoinThera } from '../pages/Join';
import { Login, Register, ForgotPass, EmailSent, UpdatePass, PassSucc } from '../pages/Login&Register';

const Routing = () => {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/educenter" element={<Educenter/>}/>
          <Route path="/educenter/articles" element={<EducenterArticles/>}/>
          <Route path="/educenter/events" element={<EducenterEvent/>}/>
          <Route path="/educenter/stories" element={<EducenterStory/>}/>
          <Route path="/educenter/article/" element={<Article/>}/>
          <Route path="/educenter/event/" element={<Event/>}/>
          <Route path="/educenter/story/" element={<Stories/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/join" element={<LetsJoin/>}/>
          <Route path="/join/therapist" element={<JoinThera/>}/>
          <Route path="/join/consultation" element={<JoinConsul/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/forgot/password" element={<ForgotPass/>}/>
          <Route path="/email/sent" element={<EmailSent/>}/>
          <Route path="/update/passwords" element={<UpdatePass/>}/>
          <Route path="/password/updated/successfully" element={<PassSucc/>}/>
          <Route path="/halaman-utama" element={<Dashboard/>}/>
        </Routes>
    </Router>
  )
}

export default Routing