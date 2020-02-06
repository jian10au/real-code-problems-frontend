import React, { useState, useEffect } from 'react';
import styles from './CandidateProfile.module.css'

import NavBar from '../components/NavBar/NavBar'
import CandidateProfileCard from '../components/CandidateProfileCard/CandidateProfileCard'


import {Link} from 'react-router-dom'
import axios from 'axios';


const CandidateProfile = ({appState, history, user}) => {

    console.log('inside candidateProfile page', user._id)
    // console.log(props)
    const [candidateProfile, setCandidateProfile] = useState(null)

    useEffect( 
        ()=>{
            async function getCandidateProfile () {
                let response = await axios.get(`${process.env.REACT_APP_BACKEND_BASE_URL}/candidates/user/${user._id}`, {
                    withCredentials: true
                })
                return response
                // const {data} = response
            } 
            let data = getCandidateProfile()
            setCandidateProfile(data)                

            console.log(candidateProfile, 'getProfileAfter useEffects runs')
        }, []
    )

    return (
        <>
        <NavBar user={user} appState={appState}/>
        <h1 className={styles.PageHeader}>Your user profile</h1>

        {
        candidateProfile &&
        <CandidateProfileCard foundCandidateProfile={candidateProfile} history={history}/>
    }

        {/* {
        candidateProfile ? 
        <CandidateProfileCard {...props} foundCandidateProfile={candidateProfile}/> : 
        <p><Link to='/candidate/new'>No Profile Yet. Create your profile</Link></p>
        } */}
        </>
    )
}

export default CandidateProfile