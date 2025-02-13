import React from "react";
import "./FooterTeam.css";

const FooterTeam = () => {
  const teamMembers = [
    { name: "Valerie Johnson", github: "https://github.com/johnsonval", linkedin: "https://linkedin.com/in/valeriemichellejohnson" },
    { name: "Ayoum Soumah", github: "https://github.com/fodelaye26", linkedin: "https://linkedin.com/in/asoumahpm/" },
    { name: "William Kalish", github: "https://github.com/williamk31", linkedin: "https://linkedin.com/in/william-kalish" },
    { name: "Ryan Nolan", github: "https://github.com/ryannolanco", linkedin: "https://www.linkedin.com/in/ryannolanco/" },
    { name: "Abby Nyhof", github: "https://github.com/abbynyhof", linkedin: "https://www.linkedin.com/in/abbynyhof/" },
    { name: "Matthew Neie", github: "https://github.com/MatthewNeie", linkedin: "https://linkedin.com/in/matthew-neie" },
    { name: "Guillermo Guevara", github: "https://github.com/guillermoguevara887", linkedin: "https://www.linkedin.com/in/guillermo-guevara-6758a51a0" },
  ];

  return (
    <footer className="footer-container">
      <h2 className="footer-title">This is our Team</h2>
      <ul className="team-list">
        {teamMembers.map((member, index) => (
          <li className="team-member" key={index}>
            <span className="member-name">{member.name}</span>
            <div className="icons">
              <a href={member.github} target="_blank" rel="noopener noreferrer" className="icon-link">
                <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="GitHub" className="icon" />
              </a>
              <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="icon-link">
                <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="LinkedIn" className="icon" />
              </a>
            </div>
          </li>
        ))}
      </ul>

    </footer>
  );
};

export default FooterTeam;
