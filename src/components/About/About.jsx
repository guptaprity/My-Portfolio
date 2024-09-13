import React from 'react';
import styles from './About.module.css';
import { getImageUrl } from "../../utils";

export const About = () => {
    return (
        <section className={styles.container} id="about">
            <h2 className={styles.title}>About</h2>
            <div className={styles.content}>
                <img 
                  src="aboutImage.jpg"
                  alt="Me sitting with laptop"
                  className={styles.abouImage}
                 />
                 <ul className={styles.aboutItems}>
                    <li className={styles.aboutItem}>
                    <img 
                      src="cursorIcon.png"
                      alt="Cursor"
                      className={styles.cursor}
                    />
                    <div className={styles.aboutItemText}>
                        <h3>Frontend Developer</h3>
                        <p>I'm a frontend developer with experience in building "Designing dynamic, responsive websites that blend creativity with code for a seamless user experience." </p>
                    </div>
                    </li>
                    <li className={styles.aboutItem}>
                    <img 
                      src="serverIcon.png"
                      alt="Server"
                    />
                    <div className={styles.aboutItemText}>
                        <h3>Backend  Developer</h3>
                        <p>I have experience developing fast and optimize backend system and API's</p>
                    </div>
                    </li>
                    <li className={styles.aboutItem}>
                    <img 
                      src="uiIcon.png"
                      alt="UI"
                    />
                    <div className={styles.aboutItemText}>
                        <h3>Ui designer</h3>
                        <p>"Designing with empathy to create interfaces that are not only beautiful but also user-centric.</p>
                    </div>
                    </li>
                 </ul>
            </div>
       </section>
        
    );
};

export default About;