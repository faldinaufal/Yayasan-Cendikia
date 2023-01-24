import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, AboutUs, Message} from '../pages';
import { Educenter, PostList, SeePost} from '../pages/EducationCenter'
import { LetsJoin, JoinConsul, JoinThera } from '../pages/Join';
import { Login, Register, ForgotPass, EmailSent, UpdatePass, PassSucc } from '../pages/Login&Register';
import { Profile, ChangePass, Contact, Collaboration } from '../pages/User';

const Routing = () => {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/educenter" element={<Educenter/>}/>
            <Route path="/about" element={<AboutUs/>}/>
            <Route path="/educenter/:Categories/:Title" element={<SeePost/>}/>
            <Route path="/join" element={<LetsJoin/>}/>
            <Route path="/join/therapist" element={<JoinThera/>}/>
            <Route path="/join/consultation" element={<JoinConsul/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/forgot/password" element={<ForgotPass/>}/>
            <Route path="/email/sent" element={<EmailSent/>}/>
            <Route path="/update/passwords" element={<UpdatePass/>}/>
            <Route path="/password/updated/successfully" element={<PassSucc/>}/>
            <Route path="/educenter/:Categories" element={<PostList/>}/>
            <Route path="/profile/:username" element={<Profile/>}/>
            <Route path="/profile/:username/change-password" element={<ChangePass/>}/>
            <Route path="/contact/collaboration" element={<Collaboration/>}/>
            <Route path="/contact/consultation" element={<Contact/>}/>
            <Route path="/consultation/message" element={<Message/>}/>
        </Routes>
    </Router>
  )
}

export default Routing