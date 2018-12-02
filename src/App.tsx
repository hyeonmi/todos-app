import * as React from 'react'
import TodoInputContainer from './containers/TodoInputContainer'
import TodoListContainer from './containers/TodoListContainer'
import Profile from './components/Profile'
class App extends React.Component {
  public render() {
    return (
        <div>
            <h1>Todo List</h1>
            <div>
                <Profile/>
            </div>
            <div>
              <TodoInputContainer/>
              <TodoListContainer/>
            </div>
        </div>
    )
  }
}

export default App
