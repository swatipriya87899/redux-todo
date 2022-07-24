import { ActionType } from "./constants/action-type";

export const signup = (signup_info) => {
    return{
    type: ActionType.SIGNUP,
    payload: signup_info
    }
}

export const login = (login_info) =>{
    return{
        type: ActionType.LOGIN,
        payload: login_info
    }
}

export const addTodo = (todo) => {
    return{
        type: ActionType.ADDTODO,
        payload: {
            id: new Date().getDate().toString(),
            data: todo
        }
    }
}

export const addProgressTodo = (todo) => {
    return {
        type: ActionType.ADDPROGRESSTODO,
        payload: {
            id: new Date().getDate().toString(),
            data: todo
        }
    }
}


export const addCompletedTodo = (todo) => {
    return {
        type: ActionType.ADDCOMPLETETODO,
        payload: {
            id: new Date().getDate().toString(),
            data: todo
        }
    }
}