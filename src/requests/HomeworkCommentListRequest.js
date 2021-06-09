import urls from "../urls"
const axios = require("axios");


const HomeworkCommentListRequest = (course_id, lecture_id, homework_id, param) =>{
    const config = {
        headers: {
            'Authorization': localStorage.getItem("Authorization")
        }
    }
    return axios.get(urls.HOMEWORK_COMMENT_LIST_URL(course_id, lecture_id, homework_id), config).then(res =>{
        return res
    }).catch(e => {
        throw e
    })
}

export default HomeworkCommentListRequest
