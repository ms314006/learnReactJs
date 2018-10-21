import React from "react"
import {connect} from "react-redux"

class ConnectMessageList extends React.Component {
    render(){
        let message = this.props.message.map((item)=>{
            return <li key={item.id}>{item.name}：{item.message}</li>
        })
        return(
            <ul>
                {message}
            </ul>
        )
    }
}

const mapStateToProps = state =>{
    return {message : state.message}
}

const MessageList = connect(mapStateToProps)(ConnectMessageList)

export {MessageList}

