import React from 'react';
import NavBar from '../components/NavBar/NavBar'
import styles from './SignUp.module.css'
import logo from '../assets/SiteLogo.svg'
import githublogo from '../assets/GitHubLogo.svg'

import auth from '../api/auth'
import Axios from 'axios';




const SignUp = (props) => {
    console.log(props)
    return(
        <>
        <NavBar user={props.user} candidateID={props.candidateID} />
        
        <div className={styles.logoContainer}>
            <img src={logo} className={styles.Logo} alt="logo" />
            <img src={githublogo} className={styles.Logo} alt="logo" />
        </div>
            <a className={styles.LogIn} href={`${process.env.REACT_APP_BACKEND_BASE_URL}/user/gitauth`}>Log in with github</a>
            <a className={styles.LogOut} href={`${process.env.REACT_APP_BACKEND_BASE_URL}/user/logout`}>Log out for github</a>
            <p className={styles.terms}>In order to use our site, we will request you grant us permission to use your github account information. By clicking the login links above, you agree to pass your information to us.</p>
            <p classNama={styles.CopyRight}> © Codatical 2020</p>
        </>
    )
}

export default SignUp;


// file

// export default Axios.create({
//     baseURL: process.env.BACKEND_URL,
//     withCredentials: true
// })

// import myHttp from 'that-file ^'

// myHttp.get("/user/current")