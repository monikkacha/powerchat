import { ActionConstants } from "../constatns"

export const setCurrentUserData = (data) => {
    return {
        type : ActionConstants.UPDATE_CURRENT_USER_PROFILE,
        payload : data,
    }
}

export const setAvailableUserList = (data) => {
    return {
        type : ActionConstants.UPDATE_AVAILABLE_USER_LIST,
        payload : data,
    }
}