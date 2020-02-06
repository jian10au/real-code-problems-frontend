import React from 'react';
import EditCandidateProfileForm from '../components/EditCandidateProfileForm/EditCandidateProfileForm'
import NavBar from '../components/NavBar/NavBar'
import styles from './EditCandidateProfile.module.css'


const EditCandidateProfile = ({user, appState, history}) => {
    console.log('appstate', appState)

    return(
        <div>
        <NavBar user={user} appState={appState}/>
        <h1 className={styles.PageTitle}>Edit your information</h1>
        <EditCandidateProfileForm history={history} user={user} appState={appState} />
        </div>
    )

}

export default EditCandidateProfile






