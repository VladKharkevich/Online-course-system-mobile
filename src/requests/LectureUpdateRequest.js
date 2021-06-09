import urls from "../urls"
const axios = require("axios");


const LectureUpdateRequest = (course_id, lecture_id, param) =>{
    const config = {
        headers: {
            'Authorization': localStorage.getItem("Authorization")
        }
    }
    return axios.put(urls.LECTURE_UPDATE_URL(course_id, lecture_id), {title: param.title}, config).then(res =>{
        return res
    }).catch(e => {
        throw e
    })
}

export default LectureUpdateRequest
