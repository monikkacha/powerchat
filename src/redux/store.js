import { createStore, combineReducers } from "redux";
import { firebaseUserReducer } from "./reducers/firebaseUserReducer";
import { firebaseUserDataReducers } from "./reducers/firebaseUserDataReducers";
import { composeWithDevTools } from "redux-devtools-extension";
import { firebaseChatReducers } from "./reducers/firebaseChatReducers";

const allReducers = combineReducers({
    firebaseUserReducer: firebaseUserReducer,
    firebaseUserDataReducers: firebaseUserDataReducers,
    firebaseChatReducers: firebaseChatReducers,
});

const store = createStore(allReducers, composeWithDevTools());

export default store;

