import {createStore} from "redux"
import {messageReducer} from "../reducers"

const store = createStore(messageReducer)

export {store}