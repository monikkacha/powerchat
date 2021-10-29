import { ActionConstants } from "../constatns";

const initialState = { userData: {}, isUserLoggedIn: false, isNewAccount: false };

export const firebaseUserReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionConstants.SET_FIREBASE_USER:
            return { ...state, userData: action.payload };
            break;
        case ActionConstants.ADD_USER_ID:
            return { ...state, userData: { ...state.userData, id: action.payload } };
            break;
        case ActionConstants.UPDATE_NEW_ACCOUNT:
            return { ...state, isNewAccount: action.payload };
            break;
        case ActionConstants.UPDATE_LOGIN_STATUS:
            return { ...state, isUserLoggedIn: action.payload };
            break;
        default:
            return state;
            break;
    }
}