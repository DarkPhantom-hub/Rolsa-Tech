import React from 'react'
import "./About.css"
import { company__photo } from "../../assets"
import { FaCheck } from 'react-icons/fa'
import { Link } from 'react-scroll'

const About = () => {
  return (
    <section id='about'>
        <div className="container">
            <div className="column company__photo">
                <img src={company__photo} alt="Rolsa Tech" />
            </div>
            <div className="column">
                <h3 className="sub__title">With 5+ years Experience</h3>
                <h1>
                    Turning Your <span className='g-text'>Vision</span> into 
                    reality by focusing on the setup
                </h1>
                <p className='text__muted description'>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                     Perferendis sint architecto inventore sed deserunt ut obcaecati doloremque odit, 
                     quos repudiandae maiores omnis amet, totam pariatur, quidem ullam odio! Numquam, esse!
                </p>
                <div className="group">

                    {/* Start Row */}
                    <div className="row">
                        <div className="icon_container">
                            <FaCheck/>
                        </div>
                        <div className="details">
                            <p className="text__muted">Consultation</p>
                            <h3>Free</h3>
                        </div>
                    </div>
                    {/* End Row */}

                    {/* Start Row */}
                    <div className="row">
                        <div className="icon_container">
                            <FaCheck/>
                        </div>
                        <div className="details">
                            <p className="text__muted">Expert</p>
                            <h3>Technicians</h3>
                        </div>
                    </div>
                    {/* End Row */}

                    {/* Start Row */}
                    <div className="row">
                        <div className="icon_container">
                            <FaCheck/>
                        </div>
                        <div className="details">
                            <p className="text__muted">Clients</p>
                            <h3>Support</h3>
                        </div>
                    </div>
                    {/* End Row */}

                    {/* Start Row */}
                    <div className="row">
                        <div className="icon_container">
                            <FaCheck/>
                        </div>
                        <div className="details">
                            <p className="text__muted">Quality</p>
                            <h3>Service</h3>
                        </div>
                    </div>
                    {/* End Row */}
                </div>{/* End Group */}

                <div className="buttons__container">
                    <Link to='project' smooth={true} className='btn'>Explore</Link>
                    <Link to='contact' smooth={true} className='btn btn__primary'>Get A Quote</Link>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About
