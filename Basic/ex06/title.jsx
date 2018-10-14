import React from 'react';
import ReactDOM from 'react-dom';

class EasyForm extends React.Component{
    constructor(props){
        super(props)
        this.state = {name : ''}
        this.changeState = this.changeState.bind(this)
        this.submitForm = this.submitForm.bind(this)
    }

    changeState(event){
        this.setState({name:event.target.value})
        console.log('改了改了')
    }
    
    //新增一個submit的function
    submitForm(event){
        console.log(`現在輸入的名字是：${this.state.name}`)
        event.preventDefault()
    }

    render() {
        return (
            /*幫form表單新增一個onSubmit事件，讓submit的時候執行*/
            <form onSubmit={this.submitForm}>
                <label>姓名：</label>
                <input type="text" id="name" name="name" 
                        value={this.state.name} 
                        onChange={this.changeState} />
                <br/>
                    <input type="submit" value="送出表單"  />
            </form>
        )
    }
}

ReactDOM.render(<EasyForm />, document.getElementById('root'))