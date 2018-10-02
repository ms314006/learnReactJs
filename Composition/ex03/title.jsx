import React from 'react';
import ReactDOM from 'react-dom';

class Message extends React.Component{
    constructor(props){
        super(props)
        this.state = ({style:{backgroundColor:'#FFFFFF',height:100,width:'80%'}})
    }
    render(){
        return <div style={this.state.style}>
                    {this.props.children}
               </div>
    }
}

class MessageContent extends React.Component {
    render(){
        return <p>組件標籤內的內容會被傳到該組件的props.children中</p>
    }
}

class MessageBlock extends React.Component {
    constructor(props){
        super(props)
        this.state = ({style:{backgroundColor:'#DDDDDD',height:200,width:'100%'}})
    }

    render(){
        return (
        <div style={this.state.style}>
            <Message>
                <MessageContent />
            </Message>
        </div>)
    }
}

ReactDOM.render(<MessageBlock  />, document.getElementById('root'))