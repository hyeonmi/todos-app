import {combineReducers} from 'redux'
import * as fromTodos from './todos'
import {AppState} from "../types";

export const reducers = combineReducers<AppState>({
    todosData: fromTodos.reducer
})