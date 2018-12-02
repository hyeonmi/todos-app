import * as React from 'react'
import {fetchGetAvatar, Avatar} from '../api'

type State = {
    avatar?: Avatar | null
}

class Profile extends React.Component<State>{
    state:State
    constructor(props: any){
        super(props)
        this.state = {
            avatar: null
        }

    }
    async componentDidMount(){
        const avatar = await fetchGetAvatar()
        if(avatar){
            this.setState({avatar})
        }
    }

    render() {
        if(this.state.avatar){
            const {Image, Name} = this.state.avatar
            return (
                <div>
                    {Image && <img src={Image} width='100' height='100' style={{borderRadius:6}} className='avatar_img' />}
                    {Name && <div className='name'>{Name}</div>}
                </div>
            )
        }
        return null
    }
}

export default Profile