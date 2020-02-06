import React, { useState, useEffect } from 'react';
import styles from './ChallengeButtonArea.module.css';
import {apiCreateAttempt, apiSubmitAttempt} from '../../api/attempt'
import {apiSetChallengeEnabled} from '../../api/challenge'
import { Link } from 'react-router-dom';
import Axios from 'axios';


const ChallengeButtonArea = ({challenge, attempt, candidateID, onChallengeStatusChange}) => {
    const [dockerFileLocation, setDockerFileLocation] = useState(null)
    
    console.log("challenge buton area")
    console.log(challenge)
    // call set dockerfile variable
    useEffect( async () => {
        setDockerFileLocation(challenge.zipFileLocation)
    }, [])
    // useEffect(() => {
    //     const dockerFile = async () => {
    //         setDockerFileLocation(challenge.zipFileLocation)
    //     }
    //     dockerFile()
    // })

    //create attempt in response to start challenge button
    const startChallenge = async (challenge, candidateID) => {
        //create apttempt
        const success = await apiCreateAttempt(challenge._id, candidateID)
        //set challenge started
        onChallengeStatusChange()
        // const started = await apiIsActiveAttempt(challenge._id)
        // setChallengeStarted(!started)
    }

    // in response to disable challenge, create disableChallene() and call the challenge update route
    const setChallengeEnabled = async (enabled) => {
        const sucess = await apiSetChallengeEnabled(challenge._id, enabled)
        onChallengeStatusChange()
    }

    console.log(`attempt status ${attempt && attempt.status}`)

    // const saveFile = async (e) => {
    //     e.preventDefault()
    //     const form = document.forms.namedItem('file-upload')
    //     const data = new FormData(form)

    //     try{
    //         const response = await Axios.post('http://localhost:5000/candidate/5df865457947111ec1a81cad/attempts/5df865457947111ec1a81cb1/upload', data)

    //     }catch(err) {
    //         console.log(err)
    //     }
    // }

    //     {/* Hi! I know this looks messy, but it works!! we can clean but the styling but I'm tired and I'm gonna leave it here and go home. This means that we can upload zip files to s3 and send Micheal the URL to download them directly from amazon. Cool! */}
    //     <form encType="multipart/form-data" name="file-upload" onSubmit={saveFile}>
    //     <input type="file" name="image" id="image"/>
    //     <button type="submit"> Submit </button>
    // </form>
    console.log(`ChallengeButtonArea attemptID ${attempt && attempt._id}`)
    return (
        <>
        <div className={styles.buttonArea}> 
            { challenge.active ? 
            <div className={styles.buttonAreaTop} >
            {
                attempt && attempt.status === "STARTED" ? 
                <>
                    <button 
                    onClick={() => window.open(`${dockerFileLocation}`) }
                    type="submit" 
                    >download zip file
                    </button>
                    
                    <a className={styles.link} href={`/challenges/${challenge.externalIdentifier}/attempts/${attempt.uuid}/edit`}>
                        <button 
                            className={styles.buttonStyle}
                            onClick={() => { }}
                            type="submit"
                            >Submit Solution
                        </button>
                    </a>
                </>
                :
                <>
                    <button className={styles.buttonStyle}
                    onClick={() => { startChallenge(challenge, candidateID) }}
                    type="submit"
                    > <p>start challenge!</p>
                    </button>
                </>
            }
            </div>
            : null }


            <div className={styles.buttonAreaBottom} >
                <a className={styles.link} href={`/candidates/${candidateID}/attempts`}>
                    <button 
                        className={styles.buttonStyle}
                        onClick={() => { }}
                        type="submit"
                        >View Submissions 
                    </button>
                </a>
                
                {/* <button 
                    className={styles.buttonStyle}
                    onClick={() => { setChallengeEnabled(!challenge.active)}}
                    type="submit"
                    >(admin) {challenge.active ? "Disable" : "Enable"} Challenge
                </button> */}
            </div>
        </div>
        </>
    )
}

export default ChallengeButtonArea