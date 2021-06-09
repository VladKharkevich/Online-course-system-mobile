import urls from "../urls"
const axios = require("axios");


const LoginRequest = (param) =>{
    const formData = new FormData();
    formData.append('username', param.username)
    formData.append('password', param.password)
    return axios.post(urls.LOGIN_URL, formData).then(res =>{
        return res
    }).catch(e => {
        throw e
    })
}

export default LoginRequest
