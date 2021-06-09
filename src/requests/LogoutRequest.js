import urls from "../urls"
const axios = require("axios");


const LogoutRequest = () =>{
    const config = {
        headers: {
            'Authorization': localStorage.getItem("Authorization")
        }
    }
    return axios.post(urls.LOGOUT_URL, {}, config).then(res =>{
        return res
    }).catch(e => {
        throw e
    })
}

export default LogoutRequest
