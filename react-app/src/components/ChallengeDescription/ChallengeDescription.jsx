import React, { useState, useEffect } from 'react';
import styles from './ChallengeDescription.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

const ChallengeDescription = ({challenge}) => {

    function numberOfStars(){
        let allStars = []
        let times = challenge.features.length;
        for(let i=0; i < times; i++){
            allStars.push(<FontAwesomeIcon icon={faStar} key={i}/>);
        }
        return allStars
    }

    return (
        <div className={styles.challengeDescription}>
            <h2>Challenge: {challenge ? challenge.title : null }</h2>
            <h3>Stars: {challenge && challenge.features ? numberOfStars() : null}</h3>
            <h4>Challenge {challenge && challenge.active ? "Enabled" : "Disabled"}</h4>
            <p>{challenge ? challenge.description : null}</p>
        </div>
    )
}

export default ChallengeDescription