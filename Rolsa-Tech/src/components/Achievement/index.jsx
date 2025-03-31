import React, { useState, useRef } from 'react';
import './Achievement.css';
import { FaDiagramProject, FaUsersLine } from 'react-icons/fa6';
import Odometer from 'react-odometerjs';
import { GiTeamIdea } from 'react-icons/gi';
import { FaAward } from 'react-icons/fa6';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const Achievement = () => {
    // State variables for Odometer
    const [clients, setClients] = useState(0);
    const [projects, setProjects] = useState(0);
    const [team, setTeam] = useState(0);
    const [awards, setAwards] = useState(0);

    const container = useRef(null);
    
    // Function to update numbers when scrolled into view
    const updateData = () => {
        setClients(130);
        setProjects(150);
        setTeam(50);
        setAwards(90);
    };

    // Function to reset numbers when scrolling back up
    const resetData = () => {
        setClients(0);
        setProjects(0);
        setTeam(0);
        setAwards(0);
    };

    // GSAP Animation on Scroll
    useGSAP(() => {
        ScrollTrigger.create({
            trigger: container.current,
            start: 'top 75%',  // Trigger when 75% of the section is visible
            onEnter: updateData,
            onLeaveBack: resetData,
        });
    }, { scope: container });

    return (
        <div className="achievement__container" ref={container}>
            <div className="container">
                
                {/* Clients */}
                <div className="achievement">
                    <div className="icon__container"><FaUsersLine /></div>
                    <div className="details">
                        <div className="row">
                            <Odometer value={clients} className='title' />
                            <h1 className="title">K</h1>
                        </div>
                        <small className="text__muted">Satisfied Clients</small>
                    </div>
                </div>

                {/* Projects */}
                <div className="achievement">
                    <div className="icon__container"><FaDiagramProject /></div>
                    <div className="details">
                        <div className="row">
                            <Odometer value={projects} className='title' />
                            <h1 className="title">+</h1>
                        </div>
                        <small className="text__muted">Completed Projects</small>
                    </div>
                </div>

                {/* Team */}
                <div className="achievement">
                    <div className="icon__container"><GiTeamIdea /></div>
                    <div className="details">
                        <div className="row">
                            <Odometer value={team} className='title' />
                            <h1 className="title">+</h1>
                        </div>
                        <small className="text__muted">Professional Technicians</small>
                    </div>
                </div>

                {/* Awards */}
                <div className="achievement">
                    <div className="icon__container"><FaAward /></div>
                    <div className="details">
                        <div className="row">
                            <Odometer value={awards} className='title' />
                            <h1 className="title">+</h1>
                        </div>
                        <small className="text__muted">Award Winning</small>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Achievement;
