import {ADD_MESSAGE} from "../constants/action-types.js"

export const addMessage = message => ({
    type : ADD_MESSAGE, payload : message
})