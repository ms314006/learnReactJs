import React from "react"
import {Provider,connect} from "react-redux"
import {store} from "../../store/index.js"

class ConnectMessageList extends React.Component {
    render(){
        let message = this.props.data.map((item)=>{
            return <li>{item.name}：{item.message}</li>
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

const MessageList = connect(mapStateToProps)(ConnectMessageList)

export {MessageList}