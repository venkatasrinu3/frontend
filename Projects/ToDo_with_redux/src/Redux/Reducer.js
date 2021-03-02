import {ADD_TODO,TOGGLE_TODO,DELETE_TODO,COUNT} from './Action'

const initState = {
    todo:[],
    TotalInCompleted:0
}

export const reducer = (state=initState,{type,payload}) => {
    switch(type){

        case ADD_TODO :
            return{
                ...state,
                todo : [...state.todo,payload]

            }

        case TOGGLE_TODO :
            return{
                ...state,
                todo : state.todo.map(element => element.id === payload ? {...element,isdone:!element.isdone} :element)
            }

        case DELETE_TODO :
            return{
                ...state,
                todo : state.todo.filter(element => element.id !== payload)
            }

        case COUNT : 
            return{
                ...state,
                TotalInCompleted : state.todo.filter(element => element.isdone === false).length
            }

        default:
            return state
    }
}
