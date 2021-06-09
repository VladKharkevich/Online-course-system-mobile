import urls from "../urls"
const axios = require("axios");


const CourseDetailRequest = (course_id) =>{
    const config = {
        headers: {
            'Authorization': localStorage.getItem("Authorization")
        }
    }
    return axios.get(urls.COURSE_DETAIL_URL(course_id), config).then(res =>{
        return res
    }).catch(e => {
        throw e
    })
}

export default CourseDetailRequest
