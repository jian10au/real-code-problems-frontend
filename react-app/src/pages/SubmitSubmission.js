import React, { useState, useEffect } from 'react';
import NavBar from '../components/NavBar/NavBar'
import ChallengeButtonArea from '../components/ChallengeButtonArea/ChallengeButtonArea';
import styles from './BrowseChallenges.module.css'

const SubmitSumission = ({challengeID, attemptID, user, appState}) => {
    console.log(`challengeID ${challengeID} attemptID ${attemptID}`)

    //On success, I need to call the attempt update backend to set the status as OK
    return (
        <>
        <NavBar user={user} appState={appState}/>
        <div className={styles.pageContainer}>
        <h1 >Send Submission:</h1>
        <div data-widget-type="rcp-UploadSubmission" data-token="eyJhbGciOiJIUzI1NiJ9.eyJpZCI6ImE4MGE5MGEwLTAwZTctNDQ0Yy1hMDgzLWY3ZWI5YjU4ZjgxZiIsImV4cCI6MTU4NDQ5NjQyNX0.ekjDzZNUjFsTS3dmZCKOWPyY29_uJM7rMC6P_ipAu9M"></div>
        <script type="text/javascript" src="/application.js"></script>
        <form
            action= {`https://aqueous-bastion-20897.herokuapp.com/challenges/${challengeID}/attempts/${attemptID}`}
            // action= "https://stg-real-code-runner.herokuapp.com/submissions"
            method="post"
            >
            <input
                name="user_token"
                type="hidden"
                value="eyJhbGciOiJIUzI1NiJ9.eyJpZCI6ImE4MGE5MGEwLTAwZTctNDQ0Yy1hMDgzLWY3ZWI5YjU4ZjgxZiIsImV4cCI6MTU4NDQ5NjQyNX0.ekjDzZNUjFsTS3dmZCKOWPyY29_uJM7rMC6P_ipAu9M"
            />
            <div>
                <input name="submission[challenge_id]" type="hidden" value={challengeID}/>
            </div>
            <div>
            <input
                name="submission[external_user_identifier]"
                type="hidden"
                value={attemptID}
                />
            </div>
            <div>
                <label>URL</label
                ><input name="submission[url]" type="text" />
            </div>
            <div>
                <label>text</label
                ><input name="submission[text]" type="text" />
            </div>
            <div>
                <label>file</label
                ><input name="submission[file]" type="file" />
            </div>
            <button>submit</button>
        </form>
        </div>
        </>
    )
}

{/* <form
  action= "https://stg-real-code-runner.herokuapp.com/submissions"
  method="post"
  enctype="multipart/form-data"
>
  <input
    name="user_token"
    type="hidden"
    value="eyJhbGciOiJIUzI1NiJ9.eyJpZCI6ImE4MGE5MGEwLTAwZTctNDQ0Yy1hMDgzLWY3ZWI5YjU4ZjgxZiIsImV4cCI6MTU4NDQ5NjQyNX0.ekjDzZNUjFsTS3dmZCKOWPyY29_uJM7rMC6P_ipAu9M"
  />
  <div>
    <label>Challenge ID</label
    ><input
      name="submission[challenge_id]"
      type="text"
    />
  </div
  <div>
    <label>External user identifier</label
    ><input
      name="submission[external_user_identifier]"
      type="text"
    />
  </div>
  <div>
    <label>URL</label
    ><input name="submission[url]" type="text" />
  </div
  <div>
    <label>text</label
    ><input name="submission[text]" type="text" />
  </div>
  <div>
    <label>file</label
    ><input name="submission[file]" type="file" />
  </div>
  <button>submit</button>
</form> */}
export default SubmitSumission