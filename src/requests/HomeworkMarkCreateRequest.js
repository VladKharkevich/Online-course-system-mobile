import urls from "../urls"
const axios = require("axios");


const HomeworkMarkCreateRequest = (course_id, lecture_id, homework_id, param) =>{
    const config = {
        headers: {
            'Authorization': localStorage.getItem("Authorization")
        }
    }
    return axios.post(urls.HOMEWORK_MARK_CREATE_URL(course_id, lecture_id, homework_id), {mark: param.mark}, config).then(res =>{
        return res
    }).catch(e => {
        throw e
    })
}

export default HomeworkMarkCreateRequest
