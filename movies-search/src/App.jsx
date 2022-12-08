// import { useEffect, useState } from 'react'
// // import './App.css'
// import axios from 'axios'
// import MovieCard from './component/MovieCard'
// import { Route, Routes } from 'react-router-dom'
// import Home from './component/Home'
import React from "react"
import { Route, Routes } from "react-router"
import AboutMovie from "./component/AboutMovie"
import Home from "./component/Home"

function App() {


  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about/:id" element={<AboutMovie />} />
      </Routes>
    </>
  )
}

export default App
