import React from 'react';
import { FaPlay, FaCode } from 'react-icons/fa';
import Fade from 'react-reveal/Fade';

import placeholder from '../../../assets/png/placeholder.png';
import './SingleProject.css';

function SingleProject({ id, name, desc, tags, code, demo, image }) {
    return (
        <Fade bottom>
            <article className='singleProject' data-project-id={id}>
                <div className='project-art'>
                    <img src={image ? image : placeholder} alt={name} />
                </div>
                <div className='projectContent'>
                    <h2 id={name.replace(/\s+/g, '-').toLowerCase()}>{name}</h2>
                    <p className='project--desc'>{desc}</p>
                    <div className='project--lang'>
                        {tags.map((tag) => (
                            <span key={tag}>{tag}</span>
                        ))}
                    </div>
                    <div className='project--showcaseBtn'>
                        {demo && (
                        <a
                            href={demo}
                            target='_blank'
                            rel='noreferrer'
                            className='project-action project-action--secondary'
                            aria-label={`View ${name} demo`}
                        >
                            <FaPlay aria-hidden='true' />
                            Demo
                        </a>
                        )}
                        {code && (
                        <a
                            href={code}
                            target='_blank'
                            rel='noreferrer'
                            className='project-action'
                            aria-label={`View ${name} source code`}
                        >
                            <FaCode aria-hidden='true' />
                            Source code
                        </a>
                        )}
                    </div>
                </div>
            </article>
        </Fade>
    );
}

export default SingleProject;
