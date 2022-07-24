import { combineReducers } from "redux";
import { createAccount } from "../reducer/signup";
import { todo } from "../reducer/todo";

const reducer = combineReducers({
    createAccount, todos:todo
})

export default reducer;