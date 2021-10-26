import { createStore , combineReducers } from "redux";
import { firebaseUserReducer } from "./reducers/firebaseUserReducer";

const allReducers = combineReducers({
    firebaseUserReducer: firebaseUserReducer,
});

const store = createStore(allReducers);

export default store;

