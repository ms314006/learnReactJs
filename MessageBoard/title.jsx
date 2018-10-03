import React from 'react';
import ReactDOM from 'react-dom';

class Message extends React.Component{
    render(){
        let divStyle={marginBottom:20}
        let messageStyle={marginLeft:20}
        return(
            <div style={divStyle}>
                <div>{this.props.name}對大家說：</div>
                <div style={messageStyle}>{this.props.message}</div>
            </div>
        )
    }
}

class MessageBlock extends React.Component{
    render(){
        let message = this.props.messageData.map((item)=>{
            if(item.name.indexOf(this.props.searchName)!=-1)
                return <Message name={item.name} message={item.message} />
        })
        return (
            <div>
                {message}
            </div>
        )
    }
}

class SearchBlock extends React.Component{
    render(){
        return(
            <div>
                <span>搜尋留言人：</span>
                <input type="text" 
                        value={this.props.searchName}
                        onChange={this.props.changeState} />
            </div>
        )
    }
}

class MessageForm extends React.Component{
    constructor(props){
        super(props)
        this.state = ({name:''})
        this.changeState = this.changeState.bind(this)
    }

    changeState(event){
        this.setState({name:event.target.value})
    }

    render(){
        return(
            <div>
                <SearchBlock searchName={this.state.name}
                                changeState={this.changeState} />
                <hr />
                <MessageBlock searchName={this.state.name} />
            </div>
        )
    }
}

//訊息資料
let data = [{name:'神Ｑ',message:'嗨！大家好啊！'},
            {name:'小馬',message:'早安啊！昨天有沒有好好發文？'},
            {name:'王子',message:'ㄛ！別說了，那真的超級累！'},
            {name:'神Ｑ',message:'哈哈哈！加油啦！再一下就結束了！'},
            {name:'王子',message:'結束後我一定要爆睡一頓！'},]

ReactDOM.render(<MessageForm  messageData={data} />, document.getElementById('root'))