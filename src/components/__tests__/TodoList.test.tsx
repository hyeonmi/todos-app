import * as React from 'react'
import {shallow} from 'enzyme'
import TodoList from '../TodoList'
import TodoItem from '../TodoItem'

describe('TodoList Component > ', () => {
    test('할 일 목록이 없으면 아무것도 출력되지 않는다.', () => {
        // given
        const props = {
            todos: [],
            toggleTodo: jest.fn()
        }

        // when
        const wrapper = shallow(<TodoList {...props}/>)

        // then
        expect(wrapper.html()).toBeNull()
    })

    test('할 일 목록이 한 개 있으면 한 개 출력되어야 한다.', () => {
        // given
        const props = {
            todos: [{id: 1, text: "todo 1", done: false}],
            toggleTodo: jest.fn()
        }

        // when
        const wrapper = shallow(<TodoList {...props}/>)

        // then
        expect(wrapper.find(TodoItem)).toHaveLength(1)
    })
})