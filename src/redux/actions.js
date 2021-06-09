import {
    GET_COMMENTS,
    GET_COMPLETED_DETAIL_HOMEWORK,
    GET_COMPLETED_HOMEWORKS,
    GET_COURSES,
    GET_DETAIL_COURSE, GET_DETAIL_HOMEWORK,
    GET_DETAIL_LECTURE, GET_HOMEWORKS,
    GET_LECTURES,
    GET_LIST_STUDENTS,
    GET_LIST_TEACHERS, GET_MARK,
    GET_USER_DATA,
    LOGIN,
    LOGOUT
} from "./types";

export function login(token){
    return {
        type: LOGIN,
        payload: token
    }
}

export function getUserData(data){
    return {
        type: GET_USER_DATA,
        payload: data
    }
}

export function logout(){
    return {
        type: LOGOUT,
    }
}

export function getCourses(data){
    return {
        type: GET_COURSES,
        payload: data
    }
}

export function getDetailCourse(data){
    return {
        type: GET_DETAIL_COURSE,
        payload: data
    }
}

export function getLectures(data){
    return {
        type: GET_LECTURES,
        payload: data
    }
}

export function getListStudents(data){
    return {
        type: GET_LIST_STUDENTS,
        payload: data
    }
}

export function getListTeachers(data){
    return {
        type: GET_LIST_TEACHERS,
        payload: data
    }
}

export function getDetailLecture(data){
    return {
        type: GET_DETAIL_LECTURE,
        payload: data
    }
}

export function getHomeworks(data){
    return {
        type: GET_HOMEWORKS,
        payload: data
    }
}


export function getCompletedHomeworks(data){
    return {
        type: GET_COMPLETED_HOMEWORKS,
        payload: data
    }
}

export function getDetailHomework(data){
    return {
        type: GET_DETAIL_HOMEWORK,
        payload: data
    }
}

export function getCompletedDetailHomework(data){
    return {
        type: GET_COMPLETED_DETAIL_HOMEWORK,
        payload: data
    }
}

export function getMark(data){
    return {
        type: GET_MARK,
        payload: data
    }
}

export function getComments(data){
    return {
        type: GET_COMMENTS,
        payload: data
    }
}
