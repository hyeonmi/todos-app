import {Todo} from "../types";

export enum ActionTypes {
    ADD_TODO = 'ADD_TODO',
    TOGGLE_TODO = 'TOGGLE_TODO',
}

type AddTodo = { type: typeof ActionTypes.ADD_TODO, payload: {todo: Todo} }
type ToggleTodo = { type: typeof ActionTypes.TOGGLE_TODO, payload: {todoId: number} }

let nextId = 1;

export const addTodo = (text: string) : AddTodo => {
    return {
        payload: {
            todo: {
                text,
                id: nextId++,
                done: false
            }
        },
        type: ActionTypes.ADD_TODO,
    }
}

export const toggleTodo = (todoId: number) : ToggleTodo => {
    return {
        payload: {
            todoId
        },
        type: ActionTypes.TOGGLE_TODO,
    }
}

export type TodoAction = AddTodo | ToggleTodo