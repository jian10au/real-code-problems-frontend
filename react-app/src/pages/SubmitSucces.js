import React, { useState, useEffect } from 'react';
import NavBar from '../components/NavBar/NavBar'
import styles from './SubmitSuccess.module.css';

const SubmitSuccess = ({candidateID, attemptID, user, appState}) => {
    return (
        <>
        <NavBar user={user} appState={appState}/>
        <h1>Successfully submitted, view your submissions here !</h1>
        <a className={styles.link} href={`/candidates/${appState.candidateID}/attempts`}>
            <button 
                className={styles.buttonStyle}
                onClick={() => { }}
                type="submit"
                >View Submissions 
            </button>
        </a>
        </>
    )
}

export default SubmitSuccess