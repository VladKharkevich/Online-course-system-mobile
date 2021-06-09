import urls from "../urls"
const axios = require("axios");


const CourseCreateRequest = (param) =>{
    const config = {
        headers: {
            'Authorization': localStorage.getItem("Authorization")
        }
    }
    const formData = new FormData();
    formData.append('title', param.title)
    return axios.post(urls.COURSE_CREATE_URL, formData, config).then(res =>{
        return res
    }).catch(e => {
        throw e
    })
}

export default CourseCreateRequest
