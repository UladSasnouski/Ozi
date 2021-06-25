import loginReducer from "./login-reducer";
import loggedReducer from "./logged-reducer";
import { combineReducers } from 'redux';

let reducer = combineReducers({
    auth: loginReducer,
    logged: loggedReducer
});

export default reducer;