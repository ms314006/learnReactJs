import {ADD_MESSAGE} from "../constants/action-types.js"
import {data} from "../constants/models.js"

const MessageReducer = (state = data,action) =>{
    switch(action.type){
        case ADD_MESSAGE:{
            return { ...state, message: [...state.message, action.payload] }
            break
        }
        default:{
            return state
            break
        }
    }
}

export {MessageReducer}