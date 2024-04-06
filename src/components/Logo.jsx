import React from 'react'
import logo from '../assets/logo.png'

function Logo({width = "100px"}) {
  return (
    <img src={logo} alt="logo" className='w-1/6'/>
  )
}

export default Logo