import React from 'react';
import ReactDOM from 'react-dom';

class HelloTitle extends React.Component{
    componentDidUpdate(){
        console.log(`這次是${this.props.title}`)
    }
    render(){
        //這次改成如果選擇女就輸出，選擇男則沒有動作
        if (this.props.title=="小姐"){
            return <h1>{this.props.title}！您好！</h1>
        }
        else{
            return null
        }
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