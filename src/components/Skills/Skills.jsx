import React from 'react';

import './Skills.css';

const Skills = () => {
  const frontendSkills = [
    { skill: 'HTML', level: '90%' },
    { skill: 'CSS', level: '85%' },
    { skill: 'React', level: '80%' },
    { skill: 'JavaScript', level: '75%' },
    // { skill: 'ASP.NET', level: '70%' },
  ];

  const backendSkills = [
    { skill: '.NET', level: '70%' },
    { skill: 'Node.js', level: '75%' },
    { skill: 'MySQL', level: '80%' },
    { skill: 'MongoDB', level: '65%' },
    
  ];

  const programmingLanguages = [
    { skill: 'C++', level: '80%' },
    { skill: 'JavaScript', level: '85%' },
    { skill: 'C#', level: '70%' },
    { skill: 'Python', level: '75%' },
    // { skill: 'TypeScript', level: '65%' },
  ];

  return (
    <div className="skills-container" id="skills">
      <h2 className="section-title">Skills</h2>
      <div className="skills-section">
        <div className="skills-category">
          <h3>Frontend</h3>
          {frontendSkills.map((skill, index) => (
            <div className="skill-bar" key={index}>
              <span>{skill.skill}</span>
              <div className="progress-bar">
                <div className="progress" style={{ width: skill.level }}></div>
              </div>
            </div>
          ))}
        </div>

        <div className="skills-category">
          <h3>Backend & DB</h3>
          {backendSkills.map((skill, index) => (
            <div className="skill-bar" key={index}>
              <span>{skill.skill}</span>
              <div className="progress-bar">
                <div className="progress" style={{ width: skill.level }}></div>
              </div>
            </div>
          ))}
        </div>

        <div className="skills-category">
          <h3>Programming Languages</h3>
          {programmingLanguages.map((skill, index) => (
            <div className="skill-bar" key={index}>
              <span>{skill.skill}</span>
              <div className="progress-bar">
                <div className="progress" style={{ width: skill.level }}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
