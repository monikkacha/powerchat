import { ActionConstants } from '../constatns';

const initState = {
    chats: [],
    currentChatUserId: ""
};

export const firebaseChatReducers = (state = initState, action) => {
    switch (action.type) {
        case ActionConstants.ADD_CHAT_LIST:
            state.chats = [];
            return [...state.chats, action.payload];

        case ActionConstants.ADD_UPDATE_CHAT_USER_ID:
            return {...state, currentChatUserId :action.payload};

        default:
            return state;
    }
}

