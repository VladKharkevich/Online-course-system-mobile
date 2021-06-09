import urls from "../urls"
const axios = require("axios");


const CourseStudentCreateRequest = (course_id, user_id) =>{
    const config = {
        headers: {
            'Authorization': localStorage.getItem("Authorization")
        }
    }
    return axios.delete(urls.COURSE_STUDENT_DELETE_URL(course_id, user_id), config).then(res =>{
        return res
    }).catch(e => {
        throw e
    })
}

export default CourseStudentCreateRequest
