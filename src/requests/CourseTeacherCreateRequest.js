import urls from "../urls"
const axios = require("axios");


const CourseTeacherCreateRequest = (course_id, param) =>{
    const config = {
        headers: {
            'Authorization': localStorage.getItem("Authorization")
        }
    }
    return axios.post(urls.COURSE_TEACHER_CREATE_URL(course_id), {username: param.username}, config).then(res =>{
        return res
    }).catch(e => {
        throw e
    })
}

export default CourseTeacherCreateRequest
