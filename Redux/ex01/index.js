import { createStore } from "redux"

const addNum = article => ({ type: "addNum", payload: article })
const data = {num : 1}

const rootReducer = (state = data, action) => {
  switch (action.type) {
    case "addNum":
      return {num: state.num + action.payload }
    default:
      return state
  }
}

const store = createStore(rootReducer)

window.data = data;
window.store = store;
window.addNum = addNum;
