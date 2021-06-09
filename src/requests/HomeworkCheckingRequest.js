import urls from "../urls"
const axios = require("axios");


const HomeworkCheckingRequest = (course_id, lecture_id, homework_id, param) =>{
    const config = {
        headers: {
            'Authorization': localStorage.getItem("Authorization")
        }
    }
    return axios.post(urls.HOMEWORK_CHECKING_URL(course_id, lecture_id, homework_id), {text_of_homework: param.text_of_homework}, config).then(res =>{
        return res
    }).catch(e => {
        throw e
    })
}

export default HomeworkCheckingRequest
