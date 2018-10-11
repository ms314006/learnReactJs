import React from 'react';
import ReactDOM from 'react-dom';

class InputGender extends React.Component{
    constructor(props){
        super(props)
        this.state = ({gender : ''})
        this.changeGender = this.changeGender.bind(this)
    }
    //strA是傳入的參數
    changeGender(strA){
        console.log(`傳入參數${strA}`)
        console.log(window.event.target)
        this.setState({gender:event.target.value})
    }
    componentDidUpdate(){
        console.log(`已將state.gender變動為：${this.state.gender}`)
    }
    render(){
        //在onchange中增加一個自訂參數
        return (<select onChange={this.changeGender.bind(this,'aaaa')}>
                    <option value="M">男</option>
                    <option value="W">女</option>
                </select>)
    }
}
ReactDOM.render(<InputGender />,document.getElementById('root'))