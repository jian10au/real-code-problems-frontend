import React, { useState, useEffect } from 'react';
import NavBar from '../components/NavBar/NavBar.jsx'

const Home = ({user, appState}) => {
    console.log(user, 'props from home')
    console.log(appState)
    return (
        <>
        <NavBar user={user} appState={appState}/>
        <h1>HOME HERE !</h1>
        </>
    )
}

export default Home