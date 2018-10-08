import {createStore} from "redux"
import {MessageReducer} from "../reducers"

const store = createStore(MessageReducer)

export {store}