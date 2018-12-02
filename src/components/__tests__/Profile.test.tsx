import * as React from 'react'
import {shallow} from 'enzyme'
import Profile from '../Profile'
import axios from 'axios'
jest.mock('axios')

describe('Profile Component > ', () => {
    test('프로필 데이터가 없으면 프로필이 출력되지 않아야 한다.', () => {
        // given
        axios.get = jest.fn().mockImplementation(() => {
            return new Promise((resolve) => {
                resolve({data: null})
            })
        });


        // when
        const renderedComponent = shallow(<Profile/>)
        const instance: any = renderedComponent.instance()
        const promise = instance.componentDidMount()

        // then
        return promise.then(() => {
            expect(renderedComponent.state('avatar')).toBeNull()
            expect(renderedComponent.find('.avatar_img')).toHaveLength(0)
            expect(renderedComponent.find('.name')).toHaveLength(0)
        })
    })

    test('프로필 데이터가 있으면 프로필 이미지와 이름이 출력되어야 한다.', () => {
        // given
        const mockProfile = {avatar: {Image: 'avatar url', Name: 'my name'}}
        axios.get = jest.fn().mockImplementation(() => {
            return new Promise((resolve) => {
                resolve({data: {...mockProfile.avatar}})
            })
        });


        // when
        const renderedComponent = shallow(<Profile/>)
        const instance: any = renderedComponent.instance()
        const promise = instance.componentDidMount()

        // then
        return promise.then(() => {
            expect(renderedComponent.state('avatar')).toEqual(mockProfile.avatar)
            expect(renderedComponent.find('.avatar_img')).toHaveLength(1)
            expect(renderedComponent.find('.name')).toHaveLength(1)
        })
    })
})