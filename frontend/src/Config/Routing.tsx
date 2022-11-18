import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Sidebar from '../Components/Sidebar/Sidebar'

const Routing = () => {
  return (
    <Router>
        <Routes>
            <Route path='/' element={<Sidebar/>}/>
        </Routes>
    </Router>
  )
}

export default Routing

