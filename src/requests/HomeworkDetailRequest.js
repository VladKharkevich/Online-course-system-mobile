import urls from "../urls"
const axios = require("axios");


const HomeworkDetailRequest = (course_id, lecture_id, homework_id) =>{
    const config = {
        headers: {
            'Authorization': localStorage.getItem("Authorization")
        }
    }
    return axios.get(urls.HOMEWORK_DETAIL_URL(course_id, lecture_id, homework_id), config).then(res =>{
        return res
    }).catch(e => {
        throw e
    })
}

export default HomeworkDetailRequest
