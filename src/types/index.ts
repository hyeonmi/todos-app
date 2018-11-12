export interface Todo {
    id: number,
    text: string,
    done: boolean
}

export interface State {
    todos: Todo[]
}

export const initialState : State = {
    todos: []
}

export interface AppState {
    todosData: State
}