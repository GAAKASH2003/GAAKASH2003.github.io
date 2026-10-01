import React, { useContext } from 'react';

import './About.css';
import { ThemeContext } from '../../contexts/ThemeContext';
import { aboutData } from '../../data/aboutData'



function About() {

    const { theme } = useContext(ThemeContext);
    const descriptions = [
        aboutData.description1,
        aboutData.description2,
        aboutData.description3,
        aboutData.description4,
        aboutData.description5,
        aboutData.description6,
    ];
    return (
        <div className="about" id="about" style={{backgroundColor: theme.secondary}}>
            <div className="line-styling">
              <div className="style-circle" style={{backgroundColor: theme.primary}}></div>
              <div className="style-circle" style={{backgroundColor: theme.primary}}></div>
              <div className="style-line" style={{backgroundColor: theme.primary}}></div>
            </div>
            <div className="about-body">
                <div className="about-img" aria-hidden="true">
                    <img 
                        src={aboutData.image === 1 ? theme.aboutimg1 : theme.aboutimg2}  
                        alt="" 
                    />
                </div>
                <div className="about-description">
                    <h2 className="section-title">{aboutData.title}</h2>
                    <div className="about-copy">
                        {descriptions.map((paragraph) => (
                            <p key={paragraph} style={{ color: theme.tertiary80 }}>
                                {paragraph}
                            </p>
                        ))}
                    </div>
                </div>
            </div>
        </div>

    )
}

export default About
