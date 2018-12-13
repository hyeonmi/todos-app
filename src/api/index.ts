import axios from 'axios'

export type Avatar = {
    Remaining: number,
    Name: string,
    Image: string,
    Valid: boolean,
    IsDefault: boolean
}

export const fetchGetAvatar = async(): Promise<Avatar> => {
    const result = await axios.get<Avatar>('https://www.avatarapi.com/ajax/instant.aspx?email=test@naver.com')
    return result && result.data
}