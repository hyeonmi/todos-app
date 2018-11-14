import {ActionTypes} from '../../actions'
import {reducer} from '../todos'

describe('Reducer >', () => {​
    test('ADD_TODO 액션에 할일을 전달하면 todos에 할일이 추가 된다.', () => {
        // given
        const payloadTodo = {
          id: 1,
          text: 'Run the tests',
          done: false
        }

        // when
        const returnReducer = reducer(undefined, {
          type: ActionTypes.ADD_TODO,
          payload: {
              todo: payloadTodo
          }
        })

        // then
        expect(returnReducer).toEqual({todos : [payloadTodo]})
    })

    test('TOGGLE_TODO 액션에 할일 아이디를 전달하면 완료되지 않은 할일이 완료 상태가 된다.', () => {
        // given
        const payloadTodo = {
            id: 1,
            text: 'Run the tests',
            done: false
        }

        // when
        const returnReducer = reducer({ todos: [payloadTodo]}, {
            type: ActionTypes.TOGGLE_TODO,
            payload: {
                todoId: 1
            }
        })

        // then
        expect(returnReducer.todos[0].done).toBeTruthy()
    })

    test('TOGGLE_TODO 액션에 할일 아이디를 전달하면 완료된 할일이 완료 되지 않은 상태가 된다.', () => {
        // given
        const payloadTodo = [
            {
                id: 1,
                text: 'todo 1',
                done: true
            }
        ]

        // when
        const returnReducer = reducer({ todos: payloadTodo}, {
            type: ActionTypes.TOGGLE_TODO,
            payload: {
                todoId: 1
            }
        })

        // then
        expect(returnReducer.todos[0].done).toBeFalsy()
    })
})