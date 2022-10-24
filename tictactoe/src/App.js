import React from 'react'
import ReactDOM from 'react-dom'
import Info from './info'
import About from './about'
import Interest from './interest'
import Footer from './footer'
import './App.css'

export default function card() {
    return (
        <div className="card">
            <Info />
            <About />
            <Interest />
            <Footer />
        </div>
    )
}




