import urls from "../urls"
const axios = require("axios");


const CompletedHomeworkRequest = (course_id, lecture_id) =>{
    const config = {
        headers: {
            'Authorization': localStorage.getItem("Authorization")
        }
    }
    return axios.get(urls.COMPLETED_HOMEWORK_URL(course_id, lecture_id), config).then(res =>{
        return res
    }).catch(e => {
        throw e
    })
}

export default CompletedHomeworkRequest
