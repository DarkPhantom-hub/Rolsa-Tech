import React from 'react'
import "./Logo.css"
import { PiSolarPanelFill } from 'react-icons/pi'

const index = () => {
  return (
    <div className='logo'>
      <PiSolarPanelFill className='icon'/>
      <h1 className='name'>Rolsa<span className="color__primary">Tech</span></h1>
    </div>
  )
}

export default index
