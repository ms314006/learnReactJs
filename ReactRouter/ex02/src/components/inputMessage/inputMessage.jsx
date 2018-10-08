import React from "react"
import {connect} from "react-redux"
import {addMessage} from "../../actions"

class ConnectInputMessage extends React.Component {
    constructor(props){
        super(props)
        this.state = ({name:'',message:''})
        this.changeState = this.changeState.bind(this)
        this.clearMessage = this.clearMessage.bind(this)
        this.submitMessage = this.submitMessage.bind(this)
    }

    changeState(event){
        this.setState({[event.target.name]:event.target.value})
    }

    clearMessage(){
        this.setState({name:'',message:''})
    }

    submitMessage(){
        let messageData = {
            name:this.state.name,
            message:this.state.message,
        }
        this.props.addMessage(messageData)
        this.clearMessage()
    }

    render(){
        return(
            <div>
                暱稱：<input type="text" name="name" 
                            value={this.state.name}
                            onChange={this.changeState} />
                <br/>
                訊息：
                <br/><textarea name="message" 
                                value={this.state.message}
                                onChange={this.changeState}></textarea>
                <input type="button" value="送出留言"
                        onClick={this.submitMessage} />
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addMessage : message =>{ dispatch(addMessage(message)) } 
    }
}

const InputMessage = connect(null,mapDispatchToProps)(ConnectInputMessage)

export {InputMessage}