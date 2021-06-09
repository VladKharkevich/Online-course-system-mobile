import urls from "../urls"
const axios = require("axios");


const LectureListRequest = (course_id) =>{
    const config = {
        headers: {
            'Authorization': localStorage.getItem("Authorization")
        }
    }
    return axios.get(urls.LECTURE_LIST_URL(course_id), config).then(res =>{
        return res
    }).catch(e => {
        throw e
    })
}

export default LectureListRequest
