import { ActionConstants } from "../constatns"

const initialState = {
    userList : [] , 
    currentUserData : {},
};

export const firebaseUserDataReducers = (state = initialState, action) => {
    switch (action.type) {
        case ActionConstants.UPDATE_CURRENT_USER_PROFILE:
            return state;
            break;
    
        default:
            return state;
            break;
    }
}
