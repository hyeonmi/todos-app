import {ActionTypes} from '../../actions'
import {reducer} from '../todos'

describe('Todos Reducer >', () => {​
    test('ADD_TODO 액션에 todo를 전달하면 todos에 전달한 할 일이 추가된다.', () => {
        // given

        // when
        const payloadTodo = {
            id: 1,
            text: 'Run the tests',
            done: false
        }

        const returnReducer = reducer(undefined, {
          type: ActionTypes.ADD_TODO,
          payload: {
              todo: payloadTodo
          }
        })

        // then
        expect(returnReducer).toEqual({todos : [payloadTodo]})
    })

    test('TOGGLE_TODO 액션에 미완료된 할 일의 todoId를 전달하면 할 일이 완료 상태가 된다.', () => {
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

    test('TOGGLE_TODO 액션에 완료된 할 일의 todoId를 전달하면 할 일이 미완료 상태가 된다.', () => {
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