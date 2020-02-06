import React, {useState, useEffect} from 'react';
import axios from 'axios'
import styles from '../EditCandidateProfileForm/EditCandidateProfileForm.module.css'

const EditCandidateProfileForm = ({appState, user, history}) => {
    console.log("EDIT CAND PROFILE", appState)

    const [candidateProfile, setCandidateProfile] = useState({})

    const handleSubmit = async (e) => {
        e.preventDefault();
        let response = await axios.put(`${process.env.REACT_APP_BACKEND_BASE_URL}/candidates/${appState.candidateID}`, {...candidateProfile},{
            withCredentials: true
          })
        // console.log('response', response)
        history.push(`/candidates/user/${user._id}`)
    }

    const handleInputChange = (e) => {
        e.persist();
        setCandidateProfile(candidateProfile => {return {
            ...candidateProfile, [e.target.name]:e.target.value}})
        
        console.log(candidateProfile)

        }

    useEffect(() => {
        async function getCandidateProfile () {

            let response = await axios.get(`${process.env.REACT_APP_BACKEND_BASE_URL}/candidates/${appState.candidateID}`)
            const {data} = response
            console.log(data)
            setCandidateProfile(data)
            
        }
        getCandidateProfile()
        
    }, [])

    console.log('rendered')

    return(
    <div>
    <form className={styles.EditForm} onSubmit={handleSubmit}>
        <label>
            <span>First Name:</span>
            <input onChange={handleInputChange} type="text" name="firstname" value={candidateProfile.firstname} placeholder="First Name" required/>
        </label>
        

        <label>
            <span>Last Name:</span>
            <input onChange={handleInputChange} type="text" name="lastname" value={candidateProfile.lastname} placeholder="Last Name" required/>
        </label>
        

        <label>
            <span>Git Hub:</span>
            <input onChange={handleInputChange} type="text" name="github" value={candidateProfile.github} placeholder="Account Name"/>
        </label>

        <label>
            <span>LinkedIn:</span>
            <input onChange={handleInputChange} type="text" name="linkedin" value={candidateProfile.linkedin} placeholder="Account Name"/>
        </label>

        <label className={styles.BioArea}>
            <span >About yourself:</span>
            <textarea onChange={handleInputChange} type="textarea" name="bio" vaule={candidateProfile.bio} placeholder={`${candidateProfile.bio}`}/>
        </label>

        <button className={styles.UpdateButton}type="submit">Update</button>
    </form>

    </div>
    )
}


export default EditCandidateProfileForm