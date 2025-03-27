import React from 'react';
import './Teams.css';
import { teams } from '../../data';

const Teams = () => {
  return (
    <section id="team">
      <div className="container">
        <h1 className="title">
          Our <span className="g-text">teams</span>
        </h1>
        <p className="text__muted description">
          Meet our talented team of passionate and creative individuals—the force behind our company's success.
        </p>
        <div className="team__container">
          {teams.map((team, index) => (
            <div className="team__card" key={index}>
              <div className="profile__container">
                <img src={team.profile} alt={team.name} />
              </div>
              <div className="details">
                <h3 className="name">{team.name}</h3>
                <p className="text__muted">{team.title}</p>
              </div>
              <div className="social__container">
                {team.social.map((item, i) => (
                  <a
                    href={item.url || ''}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="icon__container"
                    key={i}
                  >
                    {item.icon}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Teams;
