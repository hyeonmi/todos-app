import * as React from 'react'
import {Todo} from '../types';
import TodoItem from './TodoItem'

interface OwnProps {
    todos: Todo[],
    toggleTodo: (todoId: number) => void
}

type Props = OwnProps

class TodoList extends React.Component<Props> {
    render(){
        const {todos, toggleTodo} = this.props

        if(!todos.length){
            return null
        }

        return(
            <ul>
                {todos.map(todo => <TodoItem key={todo.id} {...{todo, toggleTodo}} />)}
            </ul>
        )

    }
}

export default TodoList