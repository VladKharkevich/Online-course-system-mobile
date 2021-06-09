import {FormatDateFromISOFormat} from "../../utils/FormatDateFromISOFormat";

export function courseReducer(state = {}, action) {
    if (action.type === 'GET_COURSES'){
        return action.payload
    }
    else if (action.type === 'GET_DETAIL_COURSE'){
        return action.payload
    }
    else if (action.type === 'GET_LECTURES'){
        let sub = JSON.parse(JSON.stringify(state))
        sub.lectures = action.payload
        for (let i = 0; i < sub.lectures.length; i++){
            sub.lectures[i].published = FormatDateFromISOFormat(sub.lectures[i].published)
        }
        return sub
    }
    else if (action.type === 'GET_LIST_STUDENTS'){
        let sub = JSON.parse(JSON.stringify(state))
        sub.students = action.payload
        return sub
    }
    else if (action.type === 'GET_LIST_TEACHERS'){
        let sub = JSON.parse(JSON.stringify(state))
        sub.teachers = action.payload
        return sub
    }
    else if (action.type === 'GET_DETAIL_LECTURE'){
        return action.payload
    }
    else if (action.type === 'GET_HOMEWORKS'){
        let sub = JSON.parse(JSON.stringify(state))
        sub.homeworks = action.payload
        return sub
    }
    else if (action.type === 'GET_COMPLETED_HOMEWORKS'){
        let sub = JSON.parse(JSON.stringify(state))
        sub.completedHomeworks = action.payload
        return sub
    }
    else if (action.type === 'GET_DETAIL_HOMEWORK'){
        return action.payload
    }
    else if (action.type === 'GET_COMPLETED_DETAIL_HOMEWORK'){
        return action.payload
    }
    else if (action.type === 'GET_COMMENTS'){
        let sub = JSON.parse(JSON.stringify(state))
        sub.comments = action.payload
        return sub
    }
    else if (action.type === 'GET_MARK'){
        let sub = JSON.parse(JSON.stringify(state))
        sub.mark = action.payload
        return sub
    }
    return state
}
