import { ActionConstants } from "../constatns"
export const setFirebaseUser = (user) => {
    return {
        type : ActionConstants.SET_FIREBASE_USER ,
        payload : user,
    }
}