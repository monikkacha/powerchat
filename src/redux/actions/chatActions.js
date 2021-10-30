import { ActionConstants } from "../constatns"

export const addChatList = (value) => {
    return {
        type : ActionConstants.ADD_CHAT_LIST,
        payload : value
    }
}

export const addUpdateCurrentChatId = (value) => {
    return {
        type : ActionConstants.ADD_UPDATE_CHAT_USER_ID,
        payload : value
    }
}