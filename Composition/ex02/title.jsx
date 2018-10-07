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

class MessageBlock extends React.Component {
    constructor(props){
        super(props)
        this.state = ({style:{backgroundColor:'#DDDDDD',height:200,width:'100%'}})
    }
    //宣告事件
    writeMessageConsole = (event) => {
        console.log(event.target.innerText)
    }

    render(){
        return (
        <div style={this.state.style}>
            <Message>
                <p onClick={this.writeMessageConsole}>點我看console，事件可以直接設定在props.children上面</p>
            </Message>
        </div>)
    }
}

ReactDOM.render(<MessageBlock  />, document.getElementById('root'))
