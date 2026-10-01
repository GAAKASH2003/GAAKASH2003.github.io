import React, { useContext} from 'react';

import './Achievement.css';
import { ThemeContext } from '../../contexts/ThemeContext';
import AchievementCard from './AchievementCard';
import achievementsIllustration from '../../assets/svg/achievements-illustration.svg';
import certificationsIllustration from '../../assets/svg/certifications-illustration.svg';

const sectionIllustrations = {
    achievements: achievementsIllustration,
    certifications: certificationsIllustration,
};

function Achievement({ data, sectionId, compact = false, grid = false }) {

    const { theme } = useContext(ThemeContext);
    const illustration = sectionIllustrations[sectionId];
    return (
        <>
            {data.achievements.length > 0 && (
                <div className={`achievement ${compact ? 'achievement--compact' : ''} ${grid ? 'achievement--grid' : ''}`} id={sectionId} style={{backgroundColor: theme.secondary}}>
                <div className={`achievement-body ${illustration ? 'achievement-body--illustrated' : ''}`}>
                    <div className="achievement-heading">
                    <h1 className="section-title">{data.title}</h1>
                    <h4 style={{color:theme.tertiary}}>{data.bio}</h4>
                    </div>
                    {illustration && (
                        <img
                            className="achievement-illustration"
                            src={illustration}
                            alt=""
                            width="600"
                            height="440"
                            loading="lazy"
                        />
                    )}
                </div>
                <div className="achievement-cards">
                    {data.achievements.map(achieve => ( 
                        <AchievementCard 
                        key={achieve.id}
                        id={achieve.id}
                        title={achieve.title}
                        details={achieve.details}
                        date={achieve.date}
                        field={achieve.field}
                        image={achieve.image}
                        credentialUrl={achieve.credentialUrl}
                        showMetadata={!compact && !grid}
                        showImage={!compact && !grid}/>
                    ))}
                </div>
            </div>
            )}
        </>
    )
}

export default Achievement
