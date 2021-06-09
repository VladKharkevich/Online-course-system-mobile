import urls from "../urls"
const axios = require("axios");


const UserGetInfoRequest = () =>{
    const config = {
        headers: {
            'Authorization': localStorage.getItem("Authorization")
        }
    }
    return axios.get(urls.USER_GET_INFO_URL, config).then(res =>{
        return res
    }).catch(e => {
        throw e
    })
}

export default UserGetInfoRequest
