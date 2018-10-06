import React from "react"
import ReactDOM from "react-dom"
import {Provider} from "react-redux"
import {connect} from "react-redux"
import {store,addMessage} from "./index.js"

class ConnectInputMessage extends React.Component {
    constructor(props){
        super(props)
        this.state = ({name:'',message:''})
        this.clearMessage = this.clearMessage.bind(this)
        this.changeState = this.changeState.bind(this)
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
                留言訊息：<textarea name="message" 
                                value={this.state.message}
                                onChange={this.changeState}></textarea>
                <br/>
                <input type="button" value="送出留言"
                        onClick={this.submitMessage} />
            </div>
        )
    }
}

class ConnectMessageList extends React.Component {
    render(){
        console.log(this.props.data)
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

const mapDispatchToProps = dispatch => {
    return {
        addMessage: article => dispatch(addMessage(article))
      }    
}

const InputMessage = connect(null,mapDispatchToProps)(ConnectInputMessage)
const MessageList = connect(mapStateToProps)(ConnectMessageList)

class MessageForm extends React.Component {
    render(){
        return(
            <div>
                <Provider store={store}>
                    <InputMessage />
                </Provider>
                <Provider store={store}>
                    <MessageList />
                </Provider>
            </div>
        )
    }
}

ReactDOM.render(<MessageForm/>,document.getElementById('root'))