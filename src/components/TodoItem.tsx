import * as React from 'react'
import {Todo} from '../types'

type OwnProps = {
    todo: Todo,
    toggleTodo: (todoId: number) => void
}

type Props = OwnProps

const todoItem : React.SFC<Props> = ({todo, toggleTodo}) => {
    const {done, text, id} = todo
    const handleToggleTodo = () => {
        toggleTodo(id)
    }
    return(
        <li key={id} onClick={handleToggleTodo}>
            <input type="checkbox" checked={done} readOnly={true}/>
            <span style={{textDecoration: done ? 'line-through':''}}>{text}</span>
        </li>
    )
}
export default todoItem