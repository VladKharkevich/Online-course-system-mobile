import urls from "../urls"
const axios = require("axios");


const CourseListRequest = () =>{
    console.log(localStorage)
    const config = {
        headers: {
            'Authorization': localStorage.getItem("Authorization")
        }
    }
    return axios.get(urls.COURSE_LIST_URL, config).then(res =>{
        return res
    }).catch(e => {
        throw e
    })
}

export default CourseListRequest
