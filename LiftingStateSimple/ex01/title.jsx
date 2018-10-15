import React from 'react';
import ReactDOM from 'react-dom';

//判斷溫度是否達沸點
class Title extends React.Component {
    render(){
        //溫度100度以上就到達沸點
        return <h1>{(this.props.temperature>=100 ? '達到沸點!!!':'未到沸點...')}</h1>
    }
}

class Celsius extends React.Component {
    constructor(props) {
        super(props)
        //用state來記錄溫度數值
        this.state = ({ temperature : 0 })
        //設定changeState是在此class下執行
        this.changeState = this.changeState.bind(this)
    }

    changeState(event){
        //取得目前輸入的值
        let temperature = event.target.value
        //把值寫到state裡面，並判斷是否大於100超過就更改成達到沸點，否則就未到沸點...
        this.setState({ [event.target.name] : temperature })
    }

    render() {
        return(
            /*用Title組件顯示目前輸入的溫度*/
            <div>
                <Title temperature={this.state.temperature} />
                {/*這裡顯示輸入的溫度*/}
                <span>目前攝氏溫度是：{this.state.temperature}</span><br/>
                {/*輸入溫度的地方*/}
                <input name="temperature" 
                        value={this.state.temperature} 
                        onChange={this.changeState}/>
            </div>
        )
    }
}

ReactDOM.render(<Celsius  />, document.getElementById('root'))