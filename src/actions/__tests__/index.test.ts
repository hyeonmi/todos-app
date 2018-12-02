import reduxMockStore from 'redux-mock-store'
import * as Actions from '../'
import {initialState} from '../../types'

describe('Action Test > ', () => {
    let store :any
    beforeEach(() => {
        const mockStore = reduxMockStore([])
        store = mockStore(initialState)
    })

    afterEach(() => {
        store = null
    })

    test('ADD_TODO 액션을 호출하면 할 일 데이터가 반환되어야 한다.', () => {
        // given
        const text = "blabla"

        // when
        store.dispatch(Actions.addTodo(text))

        // then
        const actions = store.getActions()
        const expectAction = {
            type: Actions.ActionTypes.ADD_TODO,
            payload: {
                todo: {
                    text,
                    id: 1,
                    done: false
                }
            }
        }
        expect(actions).toEqual([expectAction])
    })

    test('TOGGLE_TODO 액션을 호출히면 todoId가 반환되어야 한다.', () => {
        // given
        const todoId = 1

        // when
        store.dispatch(Actions.toggleTodo(todoId))

        // then
        const actions = store.getActions()
        const expectAction = {
            type: Actions.ActionTypes.TOGGLE_TODO,
            payload: {
                todoId
            }
        }
        expect(actions).toEqual([expectAction])
    })
})
