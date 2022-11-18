import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { Dashboard } from '../Pages'

const Routing = () => {
  return (
    <Router>
        <Routes>
            <Route path='/halaman-utama' element={<Dashboard/>}/>
        </Routes>
    </Router>
  )
}

export default Routing

