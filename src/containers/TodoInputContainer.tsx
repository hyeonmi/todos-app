import { connect } from 'react-redux'
import TodoInput from '../components/TodoInput'
import * as actions from "../actions";

type DispatchProps = {
    addTodo: (text: string) => {}
}

const mapDispatchToProps = (dispatch: any) => ({
    addTodo: (text: string) => dispatch(actions.addTodo(text))
})

export default connect<DispatchProps>(null, mapDispatchToProps)(TodoInput)