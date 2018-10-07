import {createStore} from "redux"

let data = {name : '神Ｑ超人',age : 25,interest:['運動','聽歌']}

const rootReducer = (state = data,action) => {
    switch(action.type){
        default:
            return state
    }
}

const store = createStore(rootReducer)

export default store
