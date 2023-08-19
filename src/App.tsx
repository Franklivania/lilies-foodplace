import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing/Landing'
import Login from './pages/Login/Login'
import SignUp from './pages/SignUp/SignUp'
import DashBoard from './pages/DashBoard/DashBoard'
import './App.scss'

function App() {

  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/dashboard' element={<DashBoard />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
