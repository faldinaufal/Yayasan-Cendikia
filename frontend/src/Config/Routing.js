import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { Dashboard, Article, Event, Feedback, Home } from '../Pages'

const Routing = () => {
  return (
    <Router>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/halaman-utama' element={<Dashboard/>}/>
            <Route path='/artikel' element={<Article/>}/>
            <Route path='/event' element={<Event/>}/>
            <Route path='/cerita-kisah' element={<Feedback/>}/>
        </Routes>
    </Router>
  )
}

export default Routing
