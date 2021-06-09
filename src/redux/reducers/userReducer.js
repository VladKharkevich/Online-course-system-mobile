export function userReducer(state = {isAuthorized: false}, action) {
    if (action.type === 'LOGIN'){
        let sub = JSON.parse(JSON.stringify(state))
        localStorage.setItem("Authorization", "Token " + action.payload)
        sub.isAuthorized = true
        return sub
    }
    else if (action.type === 'GET_USER_DATA'){
        let sub = JSON.parse(JSON.stringify(state))
        sub.username = action.payload.username
        if (action.payload.role === "s")
            sub.role = "student"
        else if (action.payload.role === "t")
            sub.role = "teacher"
        sub.isAuthorized = true
        return sub
    }
    else if (action.type === 'LOGOUT'){
        let sub = JSON.parse(JSON.stringify(state))
        localStorage.setItem("Authorization", null)
        sub.isAuthorized = false
        sub.userName = ""
        return sub
    }
    return state
}
