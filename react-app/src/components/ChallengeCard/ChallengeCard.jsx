import React, {Component} from 'react'
import styles from '../ChallengeCard/ChallengeCardStyles.module.css'
import {NavLink} from 'react-router-dom'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { faBuilding } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

 const ChallengeCard = (props) => {
     console.log(props.data);

     function numberOfStars(challenge){
        let allStars = []
        let times = challenge.features.length;
        for(let i=0; i < times; i++){
            allStars.push(<FontAwesomeIcon icon={faStar} />);
        }
        return allStars

    }
    return (
        <div className={styles.ChallengeCard}>
                <h2>{props.data.title}</h2>
                <div>{props.data.active}</div>
            <div className={styles.miniIconsContainer}>
                <p className={styles.IconArea}>
                    {numberOfStars(props.data)}
                </p>
                <p className={styles.IconArea}>|</p>
                <p className={styles.IconArea}>
                    <FontAwesomeIcon icon={faBuilding}/>
                    Fresho
                </p>
            </div>
                <div>{props.data.description}</div>
            <NavLink className={styles.buttonLink} to={`challenges/${props.data._id}`}>More details</NavLink>

        </div>
    )
}

export default ChallengeCard
