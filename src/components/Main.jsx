import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'

export default function Main() {
  return (
    <div className='container'>
        <Navbar />
        <Outlet></Outlet>
    </div>
  )
}
