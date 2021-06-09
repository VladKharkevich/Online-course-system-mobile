import urls from "../urls"
const axios = require("axios");


const RegisterRequest = (param) =>{
    const formData = new FormData();
    formData.append('username', param.username)
    formData.append('password', param.password)
    formData.append('role', param.role[0].toLowerCase())
    return axios.post(urls.REGISTER_URL, formData).then(res =>{
        return res
    }).catch(e => {
        throw e
    })
}

export default RegisterRequest
