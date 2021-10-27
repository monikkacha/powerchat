import { ActionConstants } from "../constatns";

const initialState = { userData: {}, isUserLoggedIn: false };

export const firebaseUserReducer = (state = initialState, action) => {
    if (action.type === ActionConstants.SET_FIREBASE_USER) {
        return state.userData = action.payload;
    }
    else if (action.type === ActionConstants.UPDATE_LOGIN_STATUS) {
        console.log(action.payload);
        return state.isUserLoggedIn = action.payload;
    }
    return state;
    
}