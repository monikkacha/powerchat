import { ActionConstants } from "../constatns"

export const setCurrentUserData = (data) => {
    return {
        type : ActionConstants.STORE_CURRENT_USER_PROFILE,
        payload : data,
    }
}

export const setAvailableUserList = (data) => {
    return {
        type : ActionConstants.ADD_AVAILABLE_USER_LIST,
        payload : data,
    }
}