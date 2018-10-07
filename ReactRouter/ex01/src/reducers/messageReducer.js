import {data} from "../constants/models.js"

//將描述各個動作對資料的行為
const rootReducer = (state = data, action) => {
    switch (action.type) {
        case "ADD_MESSAGE":
            return { ...state, message: [...state.message, action.payload] }
        default:
            return state
    }
}

export {rootReducer}