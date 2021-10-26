import { ActionConstants } from "../constatns";

const initialState = { userData : {}};

export const firebaseUserReducer = (state = initialState, action) => {
    if (action.type === ActionConstants.SET_FIREBASE_USER) {
        console.log("pay load " , action.payload);
        state.userData = action.payload;
        return state;
    }
    return state;
}