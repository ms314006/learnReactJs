import React from 'react';
import ReactDOM from 'react-dom';

//判斷溫度是否達沸點
class Title extends React.Component {
    render(){
        //
        return <h1>{(this.props.temperature>100 ? '達到沸點!!!':'未到沸點...')}</h1>
    }
}

//輸入溫度的組件
class InputTemperature extends React.Component{
    render(){
        return(
            <div>
                <span>目前輸入溫度是：{this.props.temperature}度{this.props.type}</span><br/>
                <input tyep="number" name={"temperature_"+this.props.type} 
                        value={this.props.temperature} 
                        onChange={this.props.changeState} />度{this.props.type}
            </div>
        )
    }
}


class EasyForm extends React.Component {
    constructor(props) {
        super(props)
        //用state來記錄溫度數值
        this.state = ({ temperature_C : 0 })
        //設定changeState是在此class下執行
        this.changeState = this.changeState.bind(this)
    }

    changeState(event){
        //取得目前輸入的值
        let temperature = Number(event.target.value)
        //這裡去0寫回input是小弟強迫症XD
        event.target.value = temperature
        //把值寫到state裡面，並判斷是否大於100超過就更改成達到沸點，否則就未到沸點...
        this.setState({ [event.target.name] : temperature })
    }

    render() {
        return(
            <div>
                <Title temperature={this.state.temperature_C} />
                <InputTemperature type="C" 
                temperature={this.state.temperature_C} 
                changeState={this.changeState} />
            </div>
        )
    }
}


ReactDOM.render(<EasyForm  />, document.getElementById('root'))