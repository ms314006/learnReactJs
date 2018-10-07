import React from "react"
import { Provider } from "react-redux"
import { store } from "../../store/index.js"
import InputMessage from "../inputMessage/index.js"
import messageList from "../messageList/index.js"

class Main extends React.Component {
    render() {
        return (
            <div>
                <Provider store={store}>
                    <messageList />
                </Provider>
            </div>
        )
    }
}

export default Main