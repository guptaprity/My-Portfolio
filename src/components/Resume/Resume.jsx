import React from 'react';
import './Resume.css'; // Import CSS for styling

const Resume = () => {
  const handleResumeClick = () => {
    // Change this URL to your actual resume's location (online or a file in the public folder)
    window.open('https://docs.google.com/document/d/190D2fetn9_kQ2J7Zeoes6_bvLNhnxDQz/edit?usp=drive_link&ouid=100071998706024376952&rtpof=true&sd=true', '_blank');
  };

  return (
    <div className="resume-button-container">
      <button className="resume-button" onClick={handleResumeClick}>
        Check Resume
      </button>
    </div>
  );
};

export default Resume;

