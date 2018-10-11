import React from 'react';
import ReactDOM from 'react-dom';

class AddButton extends React.Component{
    constructor(props){
        super(props)
        this.state = ({clickCount : 0})
        this.addCount = this.addCount.bind(this)
    }
    //增加一個count的參數，用來表示每次增加多少
    addCount(count){
        console.log(`每次添加值:${count}`)
        this.setState({clickCount:this.state.clickCount + count})
    }

    componentDidUpdate(){
        console.log(`點了${this.state.clickCount}下`)
    }
    
    render(){
        //在onClick中指定觸發的函式後面添加.bind(this)並填上傳入的第一個參數1
        return <input type="button" 
                      onClick={this.addCount.bind(this,1)} value="點我" />
    }
}

ReactDOM.render(<AddButton />,document.getElementById('root'))