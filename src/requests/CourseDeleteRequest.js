import urls from "../urls"
const axios = require("axios");


const CourseDeleteRequest = (course_id) =>{
    const config = {
        headers: {
            'Authorization': localStorage.getItem("Authorization")
        }
    }
    return axios.delete(urls.COURSE_DELETE_URL(course_id), config).then(res =>{
        return res
    }).catch(e => {
        throw e
    })
}

export default CourseDeleteRequest
