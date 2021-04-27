import {createStore, applyMiddleware} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from 'redux-thunk'


const rootReducer = (state = {}, action) => {
    switch (action.type) {
        case "GET_CHANNEL":
            return {...state, channel: action.payload}
        case "GET_VIDEOS":
            return {...state, videos: action.payload}
        default:
            return state
    }
}
export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))