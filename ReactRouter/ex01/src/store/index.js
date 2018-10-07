import {createStore} from "redux"
import {rootReducer} from "../reducers/messageReducer.js"

const store = createStore(rootReducer)

export {store}