import wait from "../utils/wait"
import Axios from 'axios'

class Auth {
    constructor() {
        this.authenticated = true
        this.fetching = true
    }

    async login (cb) {
        await wait (1000)
        this.fetching = false
        await wait(1000)
       this.authenticated = true
        cb()
    }

    logout() {
        this.authenticated = false
    }

    isAuthenticated() {
        return this.authenticated
    }

}


export const checkCurrentUser = async () => {
    let apiCall = await Axios.get(`${process.env.REACT_APP_BACKEND_BASE_URL}/user/current`, {
        withCredentials: true
    })
    let user = apiCall.data
    return user
}

//   const user = response.data
//   setUser({
//     loading: false,
//     auth: user
//   })
//   console.log(user)

// } catch(err) {
//   setUser({
//     loading: false,
//     auth: false
//   })
  
//   console.log(err.response)
// }

export default new Auth()