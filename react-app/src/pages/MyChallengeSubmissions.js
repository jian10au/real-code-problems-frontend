import React, { useState, useEffect } from 'react';
import NavBar from '../components/NavBar/NavBar'
import { getMyAttempts } from '../api/attempt';
import AttemptCard from '../components/AttemptCard/AttemptCard' 
import styles from './MyChallengeSubmissions.module.css'
import AttemptTableHeadings from '../components/AttemptTableHeadings/AttemptTableHeadings';


const MyChallengeSubmissions = ({user, candidateID, appState}) => {
    const [submissions, setSubmissions] = useState(null);
    
    //API call goes here.
    useEffect(() => {
        const getAttempts = async() => {
            const subs = await getMyAttempts(candidateID)
            setSubmissions(subs)
        }
        getAttempts()
    }, []);
    return (
    <>
        <NavBar appState={appState} user={user}/>
        <div className={styles.tableContainer}>
            <h1>My Challenge Attempts</h1>

            <table>
                <AttemptTableHeadings/>
                <tbody>
                    {submissions ? submissions.map(submission =>     
                        // When submissions exist, successfully create a new table row and render an attempt card for each submission.
                            <AttemptCard status={submission.status} challenge={submission.challenge_id.title} dateSubmitted={submission.updatedAt} candidate={submission.candidate_id} challengeID={submission.challenge_id._id} attemptID={submission._id} username={submission.candidate_id.username}/>) : <tr> <p> Loading... </p></tr>}
                </tbody>
            </table>

        </div>
    </>
    )
}

export default MyChallengeSubmissions
