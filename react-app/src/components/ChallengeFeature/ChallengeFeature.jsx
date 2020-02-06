import React, { useState, useEffect } from 'react';
import styles from './ChallengeFeature.module.css';
import Scenario from '../ChallengeScenario/ChallengeScenario'

const ChallengeFeature = ({feature, totalFeatures}) => {
    console.log('feature')
    console.log(feature)
    return (
        <div className={styles.featureContainer}>
            <h2>Feature {feature.number}/{totalFeatures}: {feature.title}</h2>
            {feature.scenarios && feature.scenarios.map((scenario) =>
            <Scenario scenario={scenario}/>
            )}
        </div>
    )
}

export default ChallengeFeature


