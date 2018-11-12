import * as React from 'react'

interface OwnProps {
    addTodo: (text: string) => {}
}

type Props = OwnProps

interface State {
    input: string
}

class TodoInput extends React.Component<Props, State> {
    state: State
    constructor(props: any){
        super(props)
        this.state = {
            input: ""
        }
    }

    handleKeyPress = (e: React.KeyboardEvent<Element>) => {
        if(e.key === 'Enter'){
            this.handleInsert()
        }
    }

    handleInsert = () => {
        const {input} = this.state
        if(!input){
            return
        }

        if(input.trim() === ""){
            return
        }

        this.props.addTodo(input)
        this.setState({input: ""})
    }

    handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {value} = e.target
        this.setState({input: value})
    }

    render(){
        return (
            <div>
                <input value={this.state.input} onKeyPress={this.handleKeyPress} onChange={this.handleChange} />
                <input type='button' onClick={this.handleInsert} value='추가' />
            </div>
        )
    }
}

export default TodoInput



