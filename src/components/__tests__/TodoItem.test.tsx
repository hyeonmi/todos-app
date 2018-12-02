import * as React from 'react'
import {shallow} from 'enzyme'
import TodoItem from '../TodoItem'

describe('TodoItem Component > ', () => {
    test('할 일 내용이 출력되어야 한다.', () => {
        // given
        const props = {
            todo: {id: 1, text: "todo 1", done: false},
            toggleTodo: jest.fn()
        }

        // when
        const wrapper = shallow(<TodoItem {...props}/>)

        // then
        expect(wrapper.find("span").text()).toEqual(props.todo.text)
    })

    test('미완료된 할 일은 취소 선이 없어 한다.', () => {
        // given
        const props = {
            todo: {id: 1, text: "todo 1", done: false},
            toggleTodo: jest.fn()
        }

        // when
        const wrapper = shallow(<TodoItem {...props}/>)

        // then
        expect(wrapper.find("span").prop('style')).toEqual({textDecoration:""})
    })

    test('완료된 할 일은 취소 선이 있어야 한다.', () => {
        // given
        const props = {
            todo: {id: 1, text: "todo 1", done: true},
            toggleTodo: jest.fn()
        }

        // when
        const wrapper = shallow(<TodoItem {...props}/>)

        // then
        expect(wrapper.find("span").prop('style')).toEqual({textDecoration:"line-through"})
    })

    test('할 일을 클릭하면 toggleTodo 함수가 호출되어야 한다.', () => {
        // given
        const props = {
            todo: {id: 1, text: "todo 1", done: false},
            toggleTodo: jest.fn()
        }

        // when
        const wrapper = shallow(<TodoItem {...props}/>)
        wrapper.find('li').simulate('click')

        // then
        expect(props.toggleTodo.mock.calls.length).toEqual(1)
    })
})