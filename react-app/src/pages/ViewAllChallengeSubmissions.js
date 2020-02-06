import React, { useState, useEffect } from 'react';
import NavBar from '../components/NavBar/NavBar';
import AttemptCard from '../components/AttemptCard/AttemptCard';
import styles from './MyChallengeSubmissions.module.css';
import AttemptTableHeadings from '../components/AttemptTableHeadings/AttemptTableHeadings';
import { getAllAttemptsForChallenge } from '../api/attempt';


const ViewAllChallengeSubmissions = ({challengeID, appState, user}) => {
    const [submissions, setSubmissions] = useState(null);

    useEffect(() => {
        console.log(appState)
        const getAttempts = async() => {
            const subs = await getAllAttemptsForChallenge(challengeID)
            console.log(subs)
            setSubmissions(subs)
        }
        getAttempts()
    }, [])

    return (
        <>
        <NavBar user={user} appState={appState} />
        <div className={styles.tableContainer}>
            <h1>All Challenge Submissions: </h1>

            <table>
                <AttemptTableHeadings/>
                <tbody>
                    {submissions ? submissions.map(submission =>     
                        // When submissions exist, successfully create a new table row and render an attempt card for each submission.
                            <AttemptCard deleteAvailable={false} status={submission.status} challenge={submission.challenge_id.title} dateSubmitted={submission.updatedAt} candidate={submission.candidate_id} challengeID={submission.challenge_id._id} attemptID={submission._id} username={submission.candidate_id.username}/>) : <tr> <p> Loading... </p></tr>}
                </tbody>
            </table>

        </div>
        </>
    )
}

export default ViewAllChallengeSubmissions