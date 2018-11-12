import * as React from 'react'
import {Todo} from "../types";

interface OwnProps {
    todos: Todo[],
    toggleTodo: (todoId: number) => void
}

type Props = OwnProps

interface State {

}

class TodoList extends React.Component<Props, State> {
    render(){
        const {todos, toggleTodo} = this.props

        if(!todos.length){
            return null
        }

        return(
            <ul>
                {
                    todos.map((todo: Todo) => {
                        const {done, text, id} = todo
                        return (
                            <li key={id} onClick={() => toggleTodo(id)}>
                                <input type="checkbox" checked={done} readOnly={true}/>
                                <span style={{textDecoration: done ? 'line-through':''}}>{text}</span>
                            </li>
                        )
                    })
                }
            </ul>
        )

    }
}

export default TodoList