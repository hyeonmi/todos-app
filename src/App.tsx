import * as React from 'react'
import TodoInputContainer from './containers/TodoInputContainer'
import TodoListContainer from './containers/TodoListContainer'
class App extends React.Component {
  public render() {
    return (
        <div>
            <h1>Todo List</h1>
            <div>
              <TodoInputContainer/>
              <TodoListContainer/>
            </div>
        </div>
    )
  }
}

export default App
