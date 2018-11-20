import * as React from 'react'
import {shallow} from 'enzyme'
import TodoItem from '../TodoItem'

describe('TodoItem Component > ', () => {
    test('할일 내용이 렌더링 되어야 한다', () => {
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

    test('미완료 된 할일은 취소선이 없어 한다.', () => {
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

    test('완료된 할일은 취소선이 있어야 한다.', () => {
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

    test('할일 목록을 클릭하면 toggleTodo 함수가 호출 되어야 한다.', () => {
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