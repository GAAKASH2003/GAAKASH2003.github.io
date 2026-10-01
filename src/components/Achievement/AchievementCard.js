import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fade from 'react-reveal/Fade';

import { ThemeContext } from '../../contexts/ThemeContext';

import { AiOutlineFolder } from "react-icons/ai";
import { FiExternalLink } from 'react-icons/fi';

import './Achievement.css'

function AchievementCard({ id, title, details, date, field, image, credentialUrl, showMetadata = true, showImage = true }) {

    const { theme } = useContext(ThemeContext);

    const useStyles = makeStyles((t) => ({
        achievementCard : {
            backgroundColor:theme.primary30,
            "&:hover": {
                backgroundColor:theme.primary50,
            },
        },
    }));

    const classes = useStyles();
    return (
        <Fade bottom>
           <div key={id} className={`achievement-card ${classes.achievementCard} ${!showMetadata ? 'achievement-card--compact' : ''} ${credentialUrl ? 'achievement-card--credential' : ''}`}>
               <div className="achievecard-content">
                    <div className="achievecard-details1">
                        <h2 style={{color: theme.tertiary}}>{title}</h2>
                        <p style={{color: theme.tertiary80}}>{details}</p>
                    </div>
                    {showMetadata && <div className="achievecard-details2" style={{color: theme.primary}}>
                        {date && <h5>{date}</h5>}
                        <div className="achievecard-field">
                            <AiOutlineFolder />
                            <h5>{field}</h5>
                        </div>   
                    </div>}
                    {credentialUrl && (
                        <a className="credential-link" href={credentialUrl} target="_blank" rel="noreferrer">
                            View credential <FiExternalLink aria-hidden="true" />
                        </a>
                    )}
                </div> 
                {showImage && <div className="achievecard-imgcontainer">
                    <img src={image} alt="" />
                </div>}
           </div>
        </Fade>
        
    )
}

export default AchievementCard
