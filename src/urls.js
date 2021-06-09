function Urls () {
    this.BASE_URL = "http://0.0.0.0:8000/api/v1/"
    this.REGISTER_URL = this.BASE_URL + "auth/users/"
    this.LOGIN_URL = this.BASE_URL + "auth/token/login/"
    this.LOGOUT_URL = this.BASE_URL + "auth/token/logout/"
    this.USER_GET_INFO_URL = this.BASE_URL + "auth/users/me/"
    this.COURSE_LIST_URL = this.BASE_URL + "courses/"
    this.COURSE_CREATE_URL = this.BASE_URL + "courses/"
    this.COURSE_DETAIL_URL = function(course_id){return `${this.COURSE_LIST_URL}${course_id}/`}
    this.COURSE_UPDATE_URL = function(course_id){return `${this.COURSE_DETAIL_URL(course_id)}`}
    this.COURSE_DELETE_URL = function (course_id){return `${this.COURSE_DETAIL_URL(course_id)}`}
    this.LECTURE_LIST_URL = function(course_id){return `${this.COURSE_DETAIL_URL(course_id)}lectures/`}
    this.LECTURE_CREATE_URL = function(course_id){return `${this.LECTURE_LIST_URL(course_id)}`}
    this.LECTURE_DETAIL_URL = function(course_id, lecture_id){return `${this.LECTURE_LIST_URL(course_id)}${lecture_id}/`}
    this.LECTURE_UPDATE_URL = function(course_id, lecture_id){return `${this.LECTURE_DETAIL_URL(course_id, lecture_id)}`}
    this.LECTURE_DELETE_URL = function(course_id, lecture_id){return `${this.LECTURE_DETAIL_URL(course_id, lecture_id)}`}
    this.COMPLETED_HOMEWORK_URL = function(course_id, lecture_id){return `${this.LECTURE_DETAIL_URL(course_id, lecture_id)}completed-homework/`}
    this.COMPLETED_HOMEWORK_DETAIL_URL = function (course_id, lecture_id, homework_id){return `${this.COMPLETED_HOMEWORK_URL(course_id, lecture_id)}${homework_id}/`}
    this.HOMEWORK_LIST_URL = function(course_id, lecture_id){return `${this.LECTURE_DETAIL_URL(course_id, lecture_id)}homework/`}
    this.HOMEWORK_CREATE_URL = function(course_id, lecture_id){return `${this.HOMEWORK_LIST_URL(course_id, lecture_id)}`}
    this.HOMEWORK_DETAIL_URL = function (course_id, lecture_id, homework_id){return `${this.HOMEWORK_LIST_URL(course_id, lecture_id)}${homework_id}/`}
    this.HOMEWORK_CHECKING_URL = function(course_id, lecture_id, homework_id){return `${this.HOMEWORK_LIST_URL(course_id, lecture_id)}${homework_id}/checking/`}
    this.HOMEWORK_COMMENT_LIST_URL = function(course_id, lecture_id, homework_id){return `${this.COMPLETED_HOMEWORK_DETAIL_URL(course_id, lecture_id, homework_id)}comment/`}
    this.HOMEWORK_COMMENT_CREATE_URL = function(course_id, lecture_id, homework_id){return `${this.HOMEWORK_COMMENT_LIST_URL(course_id, lecture_id, homework_id)}`}
    this.HOMEWORK_MARK_DETAIL_URL = function(course_id, lecture_id, homework_id){return `${this.COMPLETED_HOMEWORK_DETAIL_URL(course_id, lecture_id, homework_id)}mark/`}
    this.HOMEWORK_MARK_CREATE_URL = function(course_id, lecture_id, homework_id){return `${this.HOMEWORK_MARK_DETAIL_URL(course_id, lecture_id, homework_id)}`}
    this.COURSE_STUDENT_LIST_URL = function(course_id){return `${this.COURSE_DETAIL_URL(course_id)}students/`}
    this.COURSE_STUDENT_CREATE_URL = function(course_id){return `${this.COURSE_STUDENT_LIST_URL(course_id)}`}
    this.COURSE_STUDENT_DELETE_URL = function(course_id, user_id){return `${this.COURSE_STUDENT_LIST_URL(course_id)}${user_id}`}
    this.COURSE_TEACHER_LIST_URL = function(course_id){return `${this.COURSE_DETAIL_URL(course_id)}teachers/`}
    this.COURSE_TEACHER_CREATE_URL = function(course_id){return `${this.COURSE_TEACHER_LIST_URL(course_id)}`}
}
const urls = new Urls()
export default urls
