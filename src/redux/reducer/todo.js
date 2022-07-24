import { ActionType } from "../action/constants/action-type";

const initialState ={
    todo: [ {title:"Design- App", description:"Modifying Career, Scholarship and Entrance exam screen Acc to new design pattern", id:1}],
    inProgressTodo:[{title:"Frontend", description:"As a Content Annotator, I should be able add tags in colleges, So that colleges can improve", id:1}],
    completedTodo: [{title:"", description:""}],
}

export const todo = (state= initialState, {type, payload}) => {
    switch (type) {
        case ActionType.ADDTODO:
            return {...state, todo:[...state.todo, 
            {
                id:payload.id,
                data:payload.data
            }]};
        case ActionType.ADDPROGRESSTODO:
            return {...state, inProgressTodo:[...state.inProgressTodo, {
                id:payload.id,
                data:payload.data
            }]}
        case ActionType.ADDCOMPLETETODO:
            return {...state, completedTodo: [...state.completedTodo,
            {
                id: payload.id,
                data: payload.data
            }]}    
        default:
           return state;
    }
}