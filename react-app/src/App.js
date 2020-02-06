import React, { useState, useEffect } from 'react';
import Router from './Router'
import axios from 'axios'
import { checkCurrentUser } from "./api/auth";
import { lookupCandidateID } from './api/candidate';

function App() {
  const [user, setUser] = useState({
    auth: false,
    loading: false
  })

  const [appState, setAppState] = useState({
    candidateID: false
  })

  // let appState = {
  //   candidateID: false
  // }

  useEffect(() => {
    const getUserData = async () => {
      try {
        let user = await checkCurrentUser()

        setUser({
          loading: false,
          auth: user
        })

      } catch(err) {
        setUser({
          loading: false,
          auth: false
        })  
      }
    }
    getUserData()
  }, [])

  useEffect(() => {
    //Grab user id from function above. Hit backend route to lookup candidate information. Set appState.candidateID to the candidate id. Return candidateID.
    const getCandidateID = async() => {
      // console.log('get candidate ID')
      // console.log(user)
      try{
        let candidateInfo = await lookupCandidateID(user.auth._id)
        setAppState({
          candidateID: candidateInfo._id
        })
        // appState.candidateID = candidateInfo._id
        return appState
      } catch(err){
        
      }
    }
    getCandidateID()
  }, [user])
  return user.loading ? (
    <div>Loading...</div>
  ) : (
      <Router user={user.auth} appState={appState} />
  );
}

export default App;
