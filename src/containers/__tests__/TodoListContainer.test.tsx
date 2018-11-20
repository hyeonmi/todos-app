import * as React from 'react'
import reduxMockStore from 'redux-mock-store'
import {shallow} from 'enzyme'
import TodosContainer from '../TodoListContainer'
import {initialAppState} from "../../types";
import {ActionTypes} from "../../actions";

describe('TodosContainer Component > ', () => {
    let store :any
    let wrapper : any

    beforeEach(() => {
        const mockStore = reduxMockStore([])
        store = mockStore(initialAppState)
        store.clearActions()
        store.dispatch = jest.fn()
        wrapper = shallow(<TodosContainer />, {context: {store}})
    })

    afterEach(() => {
        store = null
        wrapper
    })

    test('toggleTodo 디스페처가 프롭스로 매핑 되어야 한다.', () => {

        // then
        expect(wrapper.props()).toEqual(expect.objectContaining({
            todos: [],
            toggleTodo: expect.any(Function)
        }))
    })

    test('toggleTodo 디스페처가 호출 되면 TOGGLE_TODO 타입이 호출 되어야 한다', () => {

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
