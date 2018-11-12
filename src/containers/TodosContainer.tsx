import { connect } from 'react-redux'
import {toggleTodo} from '../actions'
import TodoList from '../components/TodoList'
import {AppState, State} from "../types";

interface DispatchProps {
    toggleTodo: (id: number) => {}
}

const mapStateToProps = (state: AppState) : State => ({
    todos: state.todosData.todos
})

const mapDispatchToProps = (dispatch: any) : DispatchProps => ({
    toggleTodo: (id: number) => dispatch(toggleTodo(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)