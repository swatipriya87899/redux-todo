import { ActionType } from "../action/constants/action-type";

const initialState={
    signupinfo:[],
    login:false,
    userProfile:[]
}

export const createAccount = (state=initialState,{type, payload} ) => {
    switch (type){
        case ActionType.SIGNUP:
            return {...state, signupinfo:[...state.signupinfo, payload]};
        case ActionType.LOGIN:
            return {
                ...state,
            login:true,
            userProfile: payload
         }

        default:
            return state;
    }
}