import React from 'react';
import './Projects.css';

const projects = [
  {
    title: 'Simon Game',
    description: 'An interactive memory game where you follow a sequence of lights and sounds.',
    demoLink: 'https://github.com/guptaprity/SimonGame',
    liveLink: 'https://guptaprity.github.io/SimonGame/',
    thumbnail: 'cimon.jpg' // Update with actual path
  },
  {
    title: 'Snake Game',
    description: 'A classic Snake game with modern twists and challenges.',
    demoLink: 'https://github.com/guptaprity/SnakeGame',
    liveLink: 'https://guptaprity.github.io/SnakeGame/',
    thumbnail: 'snake.jpg' // Update with actual path
  },
  {
    title: 'Spotify Clone',
    description: 'A web application that mimics the Spotify interface and functionality.',
    demoLink: 'https://github.com/guptaprity/SpotifyClone',
    liveLink: 'https://guptaprity.github.io/SpotifyClone/',
    thumbnail: 'Spotify.png' // Update with actual path
  }
];

const ProjectSection = () => {
  return (
    <section className="project-section" id="projects">
      <center><h2 className="section-title">Projects</h2></center>
      <div className="project-container">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.thumbnail} alt={project.title} className="project-thumbnail" />
            <div className="project-info">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="button-container">
                <a href={project.demoLink} className="btn demo-btn" target="_blank" rel="noopener noreferrer">Demo</a>
                <a href={project.liveLink} className="btn live-btn" target="_blank" rel="noopener noreferrer">Live</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectSection;


