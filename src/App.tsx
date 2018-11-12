import * as React from 'react'
import TodoInputContainer from './containers/TodoInputContainer'
import TodosContainer from './containers/TodosContainer'
class App extends React.Component {
  public render() {
    return (
        <div>
            <h1>Todo List</h1>
            <div>
              <TodoInputContainer/>
              <TodosContainer/>
            </div>
        </div>
    )
  }
}

export default App
