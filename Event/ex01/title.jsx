import React from 'react';
import ReactDOM from 'react-dom';

class CheckButton extends React.Component{
    //在`class`中宣告一個事件
    writeConsole() {
        console.log('點了點了點了')
    }

    render(){
        //使用onClick指定觸發的事件
        return <input type="button" onClick={this.writeConsole} 
                value="點我看console" />
    }
}

ReactDOM.render(<CheckButton /> ,document.getElementById('root'))