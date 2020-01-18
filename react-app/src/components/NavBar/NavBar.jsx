import React from 'react';
import {NavLink} from 'react-router-dom';
import styles from '../NavBar/NavBarStyles.module.css'
import logo from '../../assets/SiteLogo.svg'
import auth from '../../api/auth'

const NavBar = (props) => {
    // console.log(props, 'from nav');

    return(
        <nav className={styles.NavBar}>
            <div className={styles.LogoSection}>
                <img src={logo} className={styles.Logo} alt="logo" />
                <h2 className={styles.LogoText}>datical</h2>
                <span className={styles.TagLine}>Learn code and get practical</span>
            </div>
            <ul className='links'>

                <li><a className={styles.NavLink} href={"/candidates/:id/attempts"}>View my submissions</a></li>
                <li><a className={styles.NavLink} href={"/challenges"}>Browse challenges</a></li>
                {props.user ? <li><a className={styles.NavLink} href={`/candidates/user/${props.user._id}`}>Profile</a></li> : null}
                {/* the above nav links to shall be dynamically generated after we get the user id from the top level */}
                {props.user ? <li ><a className={styles.NavLink} href={"http://localhost:5000/user/logout"}> Sign Out</a></li>:
                <li><NavLink className={styles.NavLink} to={"/signup"}>Sign In/Up</NavLink></li>    }       
            </ul>
        </nav>
    )

}

export default NavBar;