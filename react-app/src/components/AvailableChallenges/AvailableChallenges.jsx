import React, {Component} from 'react'
import axios from 'axios'
import {getAllChallenges} from '../../api/challenge.js'
import ChallengeCard from '../ChallengeCard/ChallengeCard'
import styles from '../AvailableChallenges/AvailableChallenges.module.css'

class AvailableChallenges extends Component {

    state = {
        data:null
    }

    async componentDidMount () {
        const data = await getAllChallenges();
        this.setState(
            {data:data}
        )
    }

    render() {
        console.log(this.state.data)
        if (this.state.data !== null) {
            const challenges = this.state.data
            const challengeList = challenges.map(
                (challenge) => {return <ChallengeCard key={challenge._id} data={challenge}/>}
                )

            return (
                <div className={styles.AvailableChallenges}>
                {challengeList}
                </div>
                )
        }else{
            return (<h2 className={styles.LoadingText}>Loading</h2>)
        }
    }
}

export default AvailableChallenges