import * as Actions from '../'

describe('Action >', () =>{
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
