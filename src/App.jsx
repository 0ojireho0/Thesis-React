import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Register from './pages/Register'
import SelectExercise from './pages/SelectExercise'
import Exercise from './pages/Exercise'

const App = () => {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/select_exercise" element={<SelectExercise />} />
        <Route path="/exercise" element={<Exercise />} />
      </Routes>
    </Router>


    </>
  )
}

export default App
