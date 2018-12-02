import * as React from 'react'
import {shallow} from 'enzyme'
import TodoInput from '../TodoInput'

describe('TodoInput Component > ', () => {
    const enzymeTodoRender = () => {
        const props = {addTodo: jest.fn()};
        const wrapper = shallow(<TodoInput {...props}/>)
        return {
            props,
            wrapper
        }
    }

    test('입력한 할 일이 없으면 할 일이 추가되지 않아야 한다.', () => {
        // given
        const {wrapper, props} = enzymeTodoRender()
        wrapper.setState({input: ''})

        // when
        wrapper.find('input[type="button"]').simulate('click')

        // then
        expect(props.addTodo).not.toHaveBeenCalled()
    })

    test('입력한 할 일이 공백이면 할 일이 추가되지 않아야 한다.', () => {
        // given
        const {wrapper, props} = enzymeTodoRender()
        wrapper.setState({input: '  '})

        // when
        wrapper.find('input[type="button"]').simulate('click')

        // then
        expect(props.addTodo).not.toHaveBeenCalled()
    })

    test('할 일을 입력한 후 [추가] 버튼을 클릭하면 할 일이 추가되고 입력 박스가 비어져야 한다.', () => {
        // given
        const {wrapper, props} = enzymeTodoRender()
        wrapper.setState({input: 'test'})

        // when
        wrapper.find('input[type="button"]').simulate('click')

        // then
        expect(props.addTodo).toHaveBeenCalled()
        expect(wrapper.state("input")).toEqual('')
    })

    test('할 일을 입력한 후 Enter 키를 누르면 할 일이 추가되고 입력 박스가 비어져야 한다.', () => {
        // given
        const {wrapper, props} = enzymeTodoRender()
        wrapper.setState({input: 'test'})

        // when
        wrapper.find('input[type="text"]').simulate('keypress', {key: 'Enter'})

        // then
        expect(props.addTodo).toHaveBeenCalled()
        expect(wrapper.state("input")).toEqual('')
    })

    test('할 일을 입력한 후 Enter 키 외의 다른 키를 누르면 할 일이 추가되지 않는다.', () => {
        // given
        const {wrapper, props} = enzymeTodoRender()
        wrapper.setState({input: 'test'})

        // when
        wrapper.find('input[type="text"]').simulate('keypress', {key: 'Any key'})

        // then
        expect(props.addTodo).not.toHaveBeenCalled()
    })


    test('입력 박스의 값이 변경되면 state.input 값이 업데이트되야 한다.', () => {
        // given
        const {wrapper} = enzymeTodoRender()
        const inputText = 'test'

        // when
        wrapper.find('input[type="text"]').simulate('change', {target: { value : inputText}})

        // then
        expect(wrapper.state("input")).toEqual(inputText)
    })
})