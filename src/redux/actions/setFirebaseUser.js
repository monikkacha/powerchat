import { ActionConstants } from "../constatns"
export const setFirebaseUser = (user) => {
    return {
        type : ActionConstants.SET_FIREBASE_USER ,
        payload : user,
    }
}

export const updateLoggedInStatus = (value) => {
    return {
        type : ActionConstants.UPDATE_LOGIN_STATUS ,
        payload : value,
    }
}

export const addUserId = (value) => {
    return {
        type : ActionConstants.ADD_USER_ID ,
        payload : value,
    }
}

export const updateIsNewAccount = (value) => {
    return {
        type : ActionConstants.UPDATE_NEW_ACCOUNT,
        payload : value,
    }
}