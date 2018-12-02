import * as React from 'react'
import reduxMockStore from 'redux-mock-store'
import {shallow} from 'enzyme'
import TodoListContainer from '../TodoListContainer'
import {initialAppState} from "../../types";
import {ActionTypes} from "../../actions";

describe('TodoListContainer Component > ', () => {
    let store :any
    let wrapper : any

    beforeEach(() => {
        const mockStore = reduxMockStore([])
        store = mockStore(initialAppState)
        store.clearActions()
        store.dispatch = jest.fn()
        wrapper = shallow(<TodoListContainer />, {context: {store}})
    })

    afterEach(() => {
        store = null
        wrapper
    })

    test('todos와 toggleTodo 디스패쳐가 Props로 매핑 되어야 한다.', () => {

        // then
        expect(wrapper.props()).toEqual(expect.objectContaining({
            todos: [],
            toggleTodo: expect.any(Function)
        }))
    })

    test('toggleTodo 디스페처가 호출 되면 TOGGLE_TODO 타입의 액션과 todoId가 전달되어야 한다', () => {

        // when
        const todoId = 1
        wrapper.props().toggleTodo(todoId)

        // then
        expect(store.dispatch).toHaveBeenCalledWith({
            type: ActionTypes.TOGGLE_TODO,
            payload: { todoId }
        })
    })
})
