import urls from "../urls"
const axios = require("axios");


const CourseTeacherListRequest = (course_id) =>{
    const config = {
        headers: {
            'Authorization': localStorage.getItem("Authorization")
        }
    }
    return axios.get(urls.COURSE_TEACHER_LIST_URL(course_id), config).then(res =>{
        return res
    }).catch(e => {
        throw e
    })
}

export default CourseTeacherListRequest
