import React from "react"
import ReactDOM from "react-dom"

class MessageList extends React.Component {
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