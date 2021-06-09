import urls from "../urls"
const axios = require("axios");


const HomeworkCommentCreateRequest = (course_id, lecture_id, homework_id, param) =>{
    const config = {
        headers: {
            'Authorization': localStorage.getItem("Authorization")
        }
    }
    return axios.post(urls.HOMEWORK_COMMENT_CREATE_URL(course_id, lecture_id, homework_id), {text: param.text}, config).then(res =>{
        return res
    }).catch(e => {
        throw e
    })
}

export default HomeworkCommentCreateRequest
