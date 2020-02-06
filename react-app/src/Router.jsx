import React from 'react';
import {Switch, Route} from 'react-router-dom'
import ProtectedRoute from './ProtectedRoute'
import EditCandidateProfile from './pages/EditCandidateProfile'
import BrowseChallenges from './pages/BrowseChallenges'
import ViewSingleChallenge from './pages/ViewSingleChallenge'
import SubmitSubmission from './pages/SubmitSubmission'
import SubmitSuccess from './pages/SubmitSucces'
import MyChallengeSubmissions from './pages/MyChallengeSubmissions'
import ViewAllChallengeSubmissions from './pages/ViewAllChallengeSubmissions'
import ViewResults from './pages/ViewResults'
import CandidateProfile from './pages/CandidateProfile'
import AddChallenge from './pages/AddChallenge'
import Home from './pages/Home'
import SignUp from './pages/SignUp'

const Router = ({user, appState}) => {
  // console.log(user, 'user from router');
  return (
    
    <Switch>
        <Route
          exact path='/challenges'
          render={({ location, match }) => (
            <BrowseChallenges
              user={user}
              appState={appState}
          />)}
        />

        <Route
          exact path='/challenges/new'
          component={AddChallenge}
          appState={appState}
        />

        <Route
          exact path='/challenges/:id'
          render={({ location, match }) => (
            <ViewSingleChallenge
              user={user} 
              challengeID={match.params.id}
              appState={appState}
            />
          )}
        />

        <Route
          exact path='/challenges/:challID/attempts/:attemptID/edit'
          render={({ location, match }) => (
            <SubmitSubmission
              user={user} 
              challengeID={match.params.challID}
              attemptID={match.params.attemptID}
              appState={appState}
            />
          )}
        />
        <Route
          exact path='/challenges/:challID/attempts/:attemptID/success'
          render={({ location, match }) => (
            <SubmitSuccess
              user={user} 
              candidateID={match.params.candidateID}
              attemptID={match.params.attemptID}
              appState={appState}
            />
          )}
        />
        <Route
          exact path='/candidates/:candidateID/attempts'
          render={({match}) => (
            <MyChallengeSubmissions
              user = {user}
              candidateID={match.params.candidateID}
              appState={appState}
            />
          )}
        />

        <Route
          exact path='/challenges/:id/attempts'
          render={({match}) => (
            <ViewAllChallengeSubmissions
              user = {user}
              appState={appState}
            />
          )}
        />

        <Route
          exact path='/candidates/user/:id'
          // render={(props) => {return <CandidateProfile user={user} appState={appState} {...props} />}}

          render={({history, match}) => (
            <CandidateProfile
              user = {user}
              appState ={appState}
              history = {history}
            />)}
        />

        <Route
          exact path='/signup'
          render={(props) => (
            <SignUp 
              user={user} 
              appState={appState}
            />)}
        />

        <Route
          exact path='/' render={(props) => (<BrowseChallenges user={user} appState={appState}/>)}
        />

        <Route
          exact path='/results/:id'
          render={({match}) => (
            <ViewResults
              user = {user}
              resultsID ={match.params.id}
              appState={appState}
            />
          )}
        />

        <Route 
          exact path='/unauthorised'
          render={() => <h1>You don't have the right to access this page! Please Login!</h1>}
        />

      <Route
          exact path='/candidates/:id/edit'
          render={({match, history}) => (
            <EditCandidateProfile
              user = {user}
              appState={appState}
              history={history}
            />
          )}
       />

        

        {/* <Route
          exact path='/profilecreated'
          render={()=><p>Profile Created</p>}
        /> */}

    </Switch>
    )}
export default Router 
