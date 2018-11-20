import { connect } from 'react-redux'
import TodoList from '../components/TodoList'
import * as actions from '../actions'
import {AppState, State} from "../types"

interface DispatchProps {
    toggleTodo: (id: number) => {}
}

const mapStateToProps = (state: AppState) : State => ({
    todos: state.todosData.todos
})

const mapDispatchToProps = (dispatch: any) : DispatchProps => ({
    toggleTodo: (id: number) => dispatch(actions.toggleTodo(id))
})

export default connect<State, DispatchProps>(mapStateToProps, mapDispatchToProps)(TodoList)