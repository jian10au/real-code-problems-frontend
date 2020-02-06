import React, { useState, useEffect } from 'react';
import styles from './BrowseChallenges.module.css'
import NavBar from '../components/NavBar/NavBar'
import AvailableChallenges from '../components/AvailableChallenges/AvailableChallenges'

const BrowseChallenges = ({user, appState}) => {
    console.log('browse challs')
    console.log(appState)
    return (
        <>
        <NavBar user={user} appState={appState}/>
        <h1 className={styles.PageTitle}>Welcome !</h1>
        <div>
            <h2 className={styles.CardTitle}>Featured challenges</h2>
            <AvailableChallenges />
        </div>

        <div>
            <h2 className={styles.CardTitle}>View all</h2>
            <AvailableChallenges />
        </div>
        </>
    )
}

export default BrowseChallenges