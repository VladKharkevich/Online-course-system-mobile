import urls from "../urls"
const axios = require("axios");


const CourseUpdateRequest = (course_id, param) =>{
    const config = {
        headers: {
            'Authorization': localStorage.getItem("Authorization")
        }
    }
    return axios.put(urls.COURSE_UPDATE_URL(course_id), {title: param.title}, config).then(res =>{
        return res
    }).catch(e => {
        throw e
    })
}

export default CourseUpdateRequest
