import React, { useState, useEffect } from 'react';
import NavBar from '../components/NavBar/NavBar';

const ViewResults = (user, appState) => {
    console.log('hit the view results page')
    return (
        <>
        <NavBar user={user} appState={appState}/>
        <h1>View results for a single attempt HERE !</h1>
        </>
    )
}

export default ViewResults