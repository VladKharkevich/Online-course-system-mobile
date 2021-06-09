import urls from "../urls"
const axios = require("axios");


const LectureDeleteRequest = (course_id, lecture_id) =>{
    const config = {
        headers: {
            'Authorization': localStorage.getItem("Authorization")
        }
    }
    return axios.delete(urls.LECTURE_DELETE_URL(course_id, lecture_id), config).then(res =>{
        return res
    }).catch(e => {
        throw e
    })
}

export default LectureDeleteRequest
