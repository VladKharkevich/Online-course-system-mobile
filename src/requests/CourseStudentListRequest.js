import urls from "../urls"
const axios = require("axios");


const CourseStudentListRequest = (course_id) =>{
    const config = {
        headers: {
            'Authorization': localStorage.getItem("Authorization")
        }
    }
    return axios.get(urls.COURSE_STUDENT_LIST_URL(course_id), config).then(res =>{
        return res
    }).catch(e => {
        throw e
    })
}

export default CourseStudentListRequest
