import reduxMockStore from 'redux-mock-store'
import * as Actions from '../'
import {initialState} from '../../types'

describe('Action Test 1 >', () =>{
    test('ADD_TODO 액션을 호출하면 payload에 할일 데이터가 반환 된다.', () => {
        // given
        const text = "blabla"
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

        // when
        const returnAction = Actions.addTodo(text)

        // then
        expect(returnAction).toEqual(expectAction)
    })

    test('TOGGLE_TODO 액션을 호출 히면 payload에 인자로 전달한 아이디가 반환 된다.', () => {
        // given
        const todoId = 1
        const expectAction = {
            type: Actions.ActionTypes.TOGGLE_TODO,
            payload: {
                todoId
            }
        }

        // when
        const returnAction = Actions.toggleTodo(todoId)

        // then
        expect(returnAction).toEqual(expectAction)
    })
})
describe('Action Test 2 > ', () => {
    let store :any
    beforeEach(() => {
        const mockStore = reduxMockStore([])
        store = mockStore(initialState)
    })

    afterEach(() => {
        store = null
    })

    test('ADD_TODO 액션을 호출하면 payload에 할일 데이터가 반환 된다.', () => {
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
                    id: 2,
                    done: false
                }
            }
        }
        expect(actions).toEqual([expectAction])
    })

    test('TOGGLE_TODO 액션을 호출 히면 payload에 인자로 전달한 아이디가 반환 된다.', () => {
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
