import Axios from 'axios'

export let candidates = [

    {candidate_id:"1",
    user_id:"1",
    firstName:"Emma",
    lastName:"Cullen",
    Linkedin: "",
    github:"",
    bio:"From UK",
    image:"",
    attempts:"",
    username:""},

    {candidate_id:"2",
    user_id:"2",
    firstName:"Taya",
    lastName:"Lacey",
    Linkedin: "",
    github:"",
    bio:"From Sydney",
    image:"",
    attempts:"",
    username:""}
]

export const lookupCandidateID = async (userID) => {
    // console.log(userID, "in lookupCandidateID")
    let url = `${process.env.REACT_APP_BACKEND_BASE_URL}/candidates/user/${userID}`
    let apiCall = await Axios.get(url)
    // console.log(apiCall, "after api call in lookupCandidateID")

    let candidate = JSON.parse(apiCall.request.response)
    return candidate
}