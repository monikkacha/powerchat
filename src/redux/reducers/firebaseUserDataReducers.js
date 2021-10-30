import { ActionConstants } from "../constatns"

const initialState = {
    userList: [],
    currentUserData: {},
};

export const firebaseUserDataReducers = (state = initialState, action) => {
    switch (action.type) {
        case ActionConstants.STORE_CURRENT_USER_PROFILE:
            return {...state ,currentUserData : action.payload};
        case ActionConstants.ADD_AVAILABLE_USER_LIST:
            state.userList = [];
            for  (var i in action.payload) {
                state.userList = [...state.userList , action.payload[i]];
            }
            return state;
        default:
            return state;
    }
}
