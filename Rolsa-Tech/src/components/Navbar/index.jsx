import React, { useState } from 'react'
import "./Navbar.css"
import { navTabs } from "../../data"
import { Link } from 'react-scroll'
import { RiMenu3Fill } from 'react-icons/ri'
import Logo from '../Logo'
import { FaTimes } from 'react-icons/fa'

const Navbar = () => {
  const [open,setOpen] = useState(false)
  return (
    <nav className='navbar'>
      {
        open ? 
        (<div 
          className='sidebar__overlay' 
          onClick={()=>setOpen(!open)}></div>) 
        :""
      }
      <Logo/>
      <div className="box nav__tabs">
        <div className="icon__container cancel__btn"  >
          <FaTimes/>
        </div>
        {
          navTabs.map((tab,index)=>(
            <Link
            to={tab.id}
            className='tab'
            activeClass='g-text'
            smooth={true}
            spy={true}
            offset={-70}
            onClick={()=>setOpen(!open)}
            key={index}
            >
              {tab.name}
            </Link>
          ))
        }
      </div>
      <div className="box">
        <Link to='contact' className='btn contact__btn'>Sign Up</Link>
        <div 
        className='icon__container menu__btn'
        onClick={()=>setOpen(!open)}
        ><RiMenu3Fill/></div>
      </div>
    </nav>
  )
}

export default Navbar
