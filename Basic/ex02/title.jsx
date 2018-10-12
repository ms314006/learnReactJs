import React from 'react';
import ReactDOM from 'react-dom';

//另外建立一個組件HelloTitle
class HelloTitle extends React.Component{
    render(){
        //將props.title的值帶入標題
        return <h1>{this.props.title}！您好！</h1>
    }
}

class InputGender extends React.Component{
    constructor(props){
        super(props)
        this.state = ({gender : 'M'})
        this.changeGender = this.changeGender.bind(this)
    }
    
    changeGender(event){
        this.setState({gender:event.target.value})
    }
    
    render(){
        return (
        <div>
            {/*用花括號包住JavaScript語法，以下用一行式的if來處理*/}
            {(this.state.gender == "M") ?
            <HelloTitle title="先生" /> : <HelloTitle title="小姐" />}
            <select onChange={this.changeGender.bind(this)}>
                <option value="M">男</option>
                <option value="W">女</option>
            </select>
        </div>)
}
}

ReactDOM.render(<InputGender />,document.getElementById('root'))