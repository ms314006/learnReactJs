import React from 'react';
import ReactDOM from 'react-dom';

class Message extends React.Component{
    render(){
        //這邊做一些簡單的樣式，不然留言會全部擠在一起
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
            //在這裡用if判斷留言者item.name中是否含有this.props.searchName的值，如果有就執行，沒有就不動作
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
    }

    changeState = (event) => {
        this.setState({name:event.target.value})
    }

    render(){
        return(
            <div>
                <SearchBlock searchName={this.state.name}
                                changeState={this.changeState} />
                <hr />
                {/*透過props的單向資料流，再將訊息傳入MessageBlock中處理*/}
                <MessageBlock messageData={this.props.messageData} 
                                searchName={this.state.name} />
            </div>
        )
    }
}

//訊息資料
let data = [{name:'神Q',message:'嗨！大家好啊！'},
            {name:'小馬',message:'早安啊！昨天有沒有好好發文？'},
            {name:'王子',message:'ㄛ！別說了，那真的超級累！'},
            {name:'神Q',message:'哈哈哈！加油啦！再一下就結束了！'},
            {name:'王子',message:'結束後我一定要爆睡一頓！'},]

ReactDOM.render(<MessageForm  messageData={data} />, document.getElementById('root'))