import { ActionConstants } from '../constatns';

const initState = {
    chats: [],
    currentChatUserId: ""
};

export const firebaseChatReducers = (state = initState, action) => {
    switch (action.type) {
        case ActionConstants.ADD_CHAT_LIST:
            state.chats = [];
            for (var i in action.payload) {
                state.chats = [...state.chats , action.payload[i]];
            }
            return state;

        case ActionConstants.ADD_UPDATE_CHAT_USER_ID:
            return {...state, currentChatUserId :action.payload};

        default:
            return state;
    }
}

