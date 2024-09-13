import React, { useState, useEffect } from "react";
import styles from "./Hero.module.css"; // Importing updated CSS

export const Hero = () => {
    // State for changing the text every 3 seconds
    const texts = ["Hi, I am Prity", "Web Developer", "Tech Enthusiast"];
    const [currentTextIndex, setCurrentTextIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
        }, 3000); // Change text every 3 seconds

        return () => clearInterval(interval);
    }, [texts.length]);

    return (
        <section className={styles.container}>
            <div className={styles.content}>
                {/* Rotating text */}
                <h1 className={`${styles.title} ${styles.fadeInText}`}>
                    {texts[currentTextIndex]}
                </h1>
                <p className={`${styles.description} ${styles.slideUp}`}>
                    Tech Computer Science student with a solid foundation in programming and web development.
                    Eager to apply my knowledge in real-world projects and gain hands-on experience in software development.
                </p>

                {/* Contact Me Button */}
                <a href="mailto:prity.mini3110@gmail.com" className={styles.contactBtn}>
                    Contact Me
                </a>
            </div>

            {/* Image with animation and hover effect */}
            <img src="HeroImg.png" alt="Hero image of me" className={`${styles.heroImg} ${styles.imageAnimation}`} />

            {/* Blurred Background Effects */}
            <div className={styles.topBlur}></div>
            <div className={styles.bottomBlur}></div>
        </section>
    );
};

