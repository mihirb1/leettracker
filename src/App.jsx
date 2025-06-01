// import { useState } from 'react'
import Navbar from './Navbar'
import Login from './Login'
import Progress from './Progress'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Leaderboard from './Leaderboard'
function App() {

  return (
    <>
      <Router>
        <Navbar />

        <Routes>
          <Route path = "/" element={<Login />}></Route>
          <Route path = "/login" element={<Login />}></Route>
          <Route path = "/progress/:username" element={<Progress />}> </Route>
          <Route path = "/leaderboard" element={<Leaderboard />}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
