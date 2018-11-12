import {State, initialState} from "../types";
import {TodoAction, ActionTypes} from "../actions";

export function reducer(state: State = initialState, action: TodoAction) {
    switch(action.type){
        case ActionTypes.ADD_TODO:{
            const {todo} = action.payload
            return {
                ...state,
                todos: [
                    ...state.todos,
                    todo
                ]
            }
        }
        case ActionTypes.TOGGLE_TODO:{
            const { todoId } = action.payload
            return {
                ...state,
                todos: state.todos.map(todo => todo.id === todoId ? { ...todo, done: !todo.done } : todo)
            }
        }
        default:
            return state
    }
}