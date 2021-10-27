import { ActionConstants } from "../constatns"
export const setFirebaseUser = (user) => {
    return {
        type : ActionConstants.SET_FIREBASE_USER ,
        payload : user,
    }
}

export const updateLoggedInStatus = (value) => {
    console.log(" updateLoggedInStatus "+value);
    return {
        type : ActionConstants.UPDATE_LOGIN_STATUS ,
        payload : value,
    }
}