import React from "react"
import ReactDOM from "react-dom"
import {Provider} from "react-redux"
import {connect} from "react-redux"
import store from "./index.js"

class MessageList extends React.Component {
    render(){
        let message = this.props.data.map((item)=>{
            return <li key={item.key}>{item.name}：{item.message}</li>
        })
        return(
            <ul>
                {message}
            </ul>
        )
    }
}

const mapStateToProps = state => {
    return { data: state.message }       
}

const List = connect(mapStateToProps)(MessageList)

class MessageForm extends React.Component {
    render(){
        return(
            <Provider store={store}>
                <List />
            </Provider>
        )
    }
}

ReactDOM.render(<MessageForm/>,document.getElementById('root'))