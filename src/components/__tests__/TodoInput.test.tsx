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

    test('입력한 할일이 없으면 할일이 추가 되지 않는다.', () => {
        // given
        const {wrapper, props} = enzymeTodoRender()
        wrapper.setState({input: ''})

        // when
        wrapper.find('input[type="button"]').simulate('click')

        // then
        expect(props.addTodo).not.toHaveBeenCalled()
    })

    test('입력한 할일이 공백이면 할일이 추가 되지 않는다.', () => {
        // given
        const {wrapper, props} = enzymeTodoRender()
        wrapper.setState({input: '  '})

        // when
        wrapper.find('input[type="button"]').simulate('click')

        // then
        expect(props.addTodo).not.toHaveBeenCalled()
    })

    test('할일을 입력한 후 추가버튼을 클릭하면 할일이 추가되고 input이 빈값이 되어야 한다.', () => {
        // given
        const {wrapper, props} = enzymeTodoRender()
        wrapper.setState({input: 'test'})

        // when
        wrapper.find('input[type="button"]').simulate('click')

        // then
        expect(props.addTodo).toHaveBeenCalled()
        expect(wrapper.state("input")).toEqual('')
    })

    test('할일을 입력한 후 엔터키를 누르면 할일이 추가되고 input이 빈값이 되어야 한다.', () => {
        // given
        const {wrapper, props} = enzymeTodoRender()
        wrapper.setState({input: 'test'})

        // when
        wrapper.find('input[type="text"]').simulate('keypress', {key: 'Enter'})

        // then
        expect(props.addTodo).toHaveBeenCalled()
        expect(wrapper.state("input")).toEqual('')
    })

    test('할일을 입력한 후 다른 키를 입력되면 입력 동작이 실행되지 않아야 한다.', () => {
        // given
        const {wrapper, props} = enzymeTodoRender()
        wrapper.setState({input: 'test'})

        // when
        wrapper.find('input[type="text"]').simulate('keypress', {key: 'Any key'})

        // then
        expect(props.addTodo).not.toHaveBeenCalled()
    })


    test('input 값이 변경되면 state.input이 업데이트 되어야 한다.', () => {
        // given
        const {wrapper} = enzymeTodoRender()
        const inputText = 'test'

        // when
        wrapper.find('input[type="text"]').simulate('change', {target: { value : inputText}})

        // then
        expect(wrapper.state("input")).toEqual(inputText)
    })
})