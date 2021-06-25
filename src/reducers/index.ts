import loginReducer from "./login-reducer";
import loggedReducer from "./logged-reducer";
import errorReducer from "./error-reducer";
import { combineReducers } from 'redux';

let reducer = combineReducers({
    auth: loginReducer,
    logged: loggedReducer,
    error: errorReducer
});

export default reducer;