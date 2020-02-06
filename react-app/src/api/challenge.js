import wait from '../utils/wait.js'
import { allFeatures } from './feature.js'
import Axios from 'axios'

// Challenges - the feature data is only passed by reference
const challenges = [
    {
        id: "d618a0cf-80f5-4368-acda-bd6f8f296ba0",
        externalIdentifier: "d618a0cf-80f5-4368-acda-bd6f8f296ba0",
        title: "Blog Challenge",
        description: "Make a blog website in any stack of your choosing. It should have a landing page, page to add blog posts and the ability to search historical blog entries. <br> See the instructions to the right for more specifics on how to pass each feature of the challenge, good luck !",
        zipFileLocation: "https://github.com/mcbadger88/real-code-problems-challengeZips/raw/master/challenge-introduction.zip",
        active: true,
        features: [allFeatures[0]._id, allFeatures[1]._id]
    },

    {   id:"2",
        title: "Two Side Market Place",
        description: "Make a a two-side market place",
        zipFileLocation: "https://github.com/saramic/real-code-challenge-blog/archive/master.zip",
        active: true,
        features: [allFeatures[0]._id, allFeatures[1]._id]
    },
    {   id:"3",
    title: "Speed Type Writer App ",
    description: "Use ReactJS to make a Speed Type Writer",
    zipFileLocation: "https://github.com/saramic/real-code-challenge-blog/archive/master.zip",
    active: true,
    features: [allFeatures[0]._id, allFeatures[1]._id]
}
];


export const getAllChallenges = async () => {
    let apiCall = await Axios.get(`${process.env.REACT_APP_BACKEND_BASE_URL}/challenges`)
    let challenges = JSON.parse(apiCall.request.response)
    return challenges
}

// Will use /challenges/:id backend route
export const getSingleChallenge = async (challengeID) => {
    // Temp, to be replaced with backend API call to /challenges/:id
    console.log('inside get single challenge call')
    console.log(challengeID)
    let apiCall = await Axios.get(`${process.env.REACT_APP_BACKEND_BASE_URL}/challenges/${challengeID}`)
    let challenge = JSON.parse(apiCall.request.response)
    return challenge
    // await wait(Math.floor(500 + Math.random() * 1500))
    // console.log(`Challenges: ${challenges}`)
    // console.log(`challengeID ${challengeID}`)
    // return challenges[0]
}

// Will use update /challenges/:id backend route
export const apiSetChallengeEnabled = async (challengeID, enabled) => {
    // Temp, to be replaced with backend update API call to /challenges/:id
    challenges[0].active = enabled
    return challenges[0]
}

// Example Code to use getAllChallenges API in component

// const ViewSingleChallenge = (challengeID) => {
//     const [challenges, setChallenges] = useState(null)

//     useEffect(() => {
//         console.log(challenges)
//         console.log(challengeID.challengeID)
//       }, [ challenges ])

//     useEffect( async () => {
//         // Replace with API call
//         // getAllChallenges().then(response => {
//         //   setChallenges(response)
//         // })
//         const challs = await getAllChallenges()
//         setChallenges(challs)
//       }, [])

//     return (
//         <>
//         <NavBar />
//         <h1>VIEW ALL CHALLENGE HERE !</h1>
//         <p>{challenges ? challenges[challengeID.challengeID - 1].title : null }</p>
//         {/* { challenges ? <img src={challenges[challengeID.challengeID - 1].features[0].scenarios[0].lineNumbers[0].helperImage}></img> : null } */}
//         </>
//     )
// }