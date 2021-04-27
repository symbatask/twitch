import axios from 'axios'

export const getChannel = (channelName) => {
    return (dispatch) => {
        return axios(`https://api.twitch.tv/helix/users?login=${channelName}`, {
            headers: {
                Authorization: 'Bearer 63mparyu6zwdoglu9gewjz9qtgrboq',
                ['client-id']: 'zyiqmjb2xhhvjcp3ms58zixiocs6rw',
            }
        }).then(res => {
            return dispatch({type: "GET_CHANNEL", payload: res.data.data[0]})

        })
    }
}

export const getVideos = (id) => {
    return (dispatch) => {
        return axios(`https://api.twitch.tv/helix/videos?user_id=${id}`, {
            headers: {
                Authorization: 'Bearer 63mparyu6zwdoglu9gewjz9qtgrboq',
                ['client-id']: 'zyiqmjb2xhhvjcp3ms58zixiocs6rw'
            }
        }).then(res => {
            return dispatch({type: "GET_VIDEOS", payload: res.data.data})

        })
    }
}

