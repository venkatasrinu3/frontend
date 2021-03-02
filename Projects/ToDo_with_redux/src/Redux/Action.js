//actionTypes
export const ADD_TODO = 'ADD_TODO'
export const TOGGLE_TODO = 'TOGGLE_TODO'
export const DELETE_TODO = 'DELETE_TODO'
export const COUNT = 'COUNT'

//actionCreators
export const add_todo = (payload) => ({
    type : ADD_TODO,
    payload
})

export const toggle_todo = (payload) => ({
    type : TOGGLE_TODO,
    payload
})

export const delete_todo = (payload) => ({
    type : DELETE_TODO,
    payload
})

export const count = () => ({
    type : COUNT
})
