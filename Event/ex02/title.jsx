import React from 'react';
import ReactDOM from 'react-dom';


class AddButton extends React.Component{
    constructor(props){
        super(props)
        this.state = ({clickCount : 0})
        //在constructor指定呼叫addCount，並在呼叫時指定this為class本身
        this.addCount = this.addCount.bind(this)
    }
    
    addCount(){
        this.setState({clickCount:this.state.clickCount + 1},()=>{console.log(`點了${this.state.clickCount}下`)})
    }
    
    render(){
        return <input type="button" 
                      onClick={this.addCount} value="點我" />
    }
}

ReactDOM.render(<AddButton />,document.getElementById('root'))