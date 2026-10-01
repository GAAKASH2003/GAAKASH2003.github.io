import React, { useContext } from 'react';

import './Skills.css'

import { ThemeContext } from '../../contexts/ThemeContext';
import { skillsData } from '../../data/skillsData'
import { skillsImage } from '../../utils/skillsImage'

function Skills() {

    const { theme } = useContext(ThemeContext);

    const skillBoxStyle = {
        backgroundColor: theme.secondary,
        boxShadow: `0px 0px 30px ${theme.primary30}`
    }

    return (
        <div id="skills" className="skills" style={{backgroundColor: theme.secondary}}>
            <div className="skillsHeader">
                <h2 className="section-title">Skills</h2>
            </div>
            <div className="skillsContainer">
                <div className="skills-grid">
                    {skillsData.map((skill) => {
                            const image = skillsImage(skill);

                            return (
                            <div className="skill--box" key={skill} style={skillBoxStyle}>
                                {image ? (
                                    <img src={image} alt={skill} />
                                ) : (
                                    <span className="skill--fallback-icon" aria-hidden="true">
                                        {skill === 'Spring Boot' ? 'SB' : skill}
                                    </span>
                                )}
                                <h3 style={{color: theme.tertiary}}>
                                    {skill}
                                </h3>
                            </div>
                            );
                        })}
                </div>
            </div>
        </div>
    )
}

export default Skills
