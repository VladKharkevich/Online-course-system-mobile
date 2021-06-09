import urls from "../urls"
const axios = require("axios");

const LectureCreateRequest = (course_id, param) =>{
    const config = {
        headers: {
            'content-type': 'multipart/form-data',
            'Authorization': localStorage.getItem("Authorization")
        }
    }
    const formData = new FormData()
    formData.append('title', param.title)
    formData.append('material', param.material)
    return axios.post(urls.LECTURE_CREATE_URL(course_id), formData, config).then(res =>{
        return res
    }).catch(e => {
        throw e
    })
}

export default LectureCreateRequest
