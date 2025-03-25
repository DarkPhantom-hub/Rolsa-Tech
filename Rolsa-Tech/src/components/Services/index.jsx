import React from 'react'
import "./Services.css"
import { services } from '../../data'
import { Link } from 'react-scroll'

const Services = () => {
  return (
   <section id='services'>
        <div className="container">
            <h1 className='title'>Our <span>Services</span></h1>
            <h3 className='sub__title text__muted'>
                Powering a Greener Tomorrow, One Sustainable Choice at a Time.
            </h3>
            <div className="services__container">
                {
                    services.map((service,index)=>{
                        <div className="servce" key={index}>
                            <div className="picture">
                                <img src={service.image} alt={service.name} />
                            </div>
                            <div className="details">
                                <h3>{service.name}</h3>
                                <p className='text__muted description'>
                                    {service.description}
                                </p>
                            </div>
                            <div className="buttons_container">
                                <button className="btn">read More</button>
                                <Link to='contact' className='btn btn__primary'>Sign Up</Link>
                            </div>
                        </div>
                    })
                }
            </div>
        </div>
   </section>
  )
}

export default Services
