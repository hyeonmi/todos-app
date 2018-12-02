import * as React from 'react'
import reduxMockStore from 'redux-mock-store'
import {shallow} from 'enzyme'
import TodoInputContainer from '../TodoInputContainer'
import {initialState} from "../../types";
import {ActionTypes} from "../../actions";

describe('TodoInputContainer Component > ', () => {
    let store :any
    let wrapper : any
    beforeEach(() => {
        const mockStore = reduxMockStore([])
        store = mockStore(initialState)
        store.clearActions()
        store.dispatch = jest.fn()
        wrapper = shallow(<TodoInputContainer/>, {context:{store}})
    })

    afterEach(() => {
        store = null
        wrapper
    })

    test('addTodo 디스패처가 Props로 매핑되어야 한다.', () => {

        // then
        expect(wrapper.props()).toEqual(expect.objectContaining({
            addTodo: expect.any(Function)
        }))
    })

    test('addTodo 디스패처가 호출 되면 ADD_TODO 타입의 액션과 todo가 전달되어야 한다.', () => {

        // when
        const text = 'blabla'
        wrapper.props().addTodo(text)

        // then
        expect(store.dispatch).toHaveBeenCalledWith({
            type: ActionTypes.ADD_TODO,
            payload: { todo: { text, done: false, id: 1}}
        })
    })
})
