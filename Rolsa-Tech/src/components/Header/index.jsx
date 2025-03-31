import React from 'react'
import "./Header.css"
import { Link } from 'react-scroll'
import { solar__skyscraper} from '../../assets'

const Header = () => {
  return (
    <header id='header'>
        <div className="container full__height blur-effect">
            <div className="column">
                <h1 className='title'>
                    Revolutionalizing Homes With
                    <span className="g-text"> Green Energy</span>
                </h1>
                <p className="text__muted">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit sed temporibus vero. Dolorem amet quae dolorum recusandae, accusantium impedit officiis dolor saepe corrupti magnam hic, sit optio, non deleniti cumque cumque.
                </p>
                <div className="buttons__container">
                    <Link to='services' className='btn'>Our Services</Link>
                    <Link to='contact' className='btn btn__primary'>Contact Us</Link>
                </div>
            </div>
            <div className="column">
                <div className="image__container primary-effect">
                    <img src={solar__skyscraper} alt="Rolsa Tech" />
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header

