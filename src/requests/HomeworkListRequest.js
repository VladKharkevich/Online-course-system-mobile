import urls from "../urls"
const axios = require("axios");


const HomeworkListRequest = (course_id, lecture_id) =>{
    const config = {
        headers: {
            'Authorization': localStorage.getItem("Authorization")
        }
    }
    return axios.get(urls.HOMEWORK_LIST_URL(course_id, lecture_id), config).then(res =>{
        return res
    }).catch(e => {
        throw e
    })
}

export default HomeworkListRequest
