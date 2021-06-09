import urls from "../urls"
const axios = require("axios");


const HomeworkCreateRequest = (course_id, lecture_id, param) =>{
    const config = {
        headers: {
            'Authorization': localStorage.getItem("Authorization")
        }
    }
    return axios.post(urls.HOMEWORK_CREATE_URL(course_id, lecture_id), {title: param.title, text: param.text, max_mark: param.max_mark}, config).then(res =>{
        return res
    }).catch(e => {
        throw e
    })
}

export default HomeworkCreateRequest
