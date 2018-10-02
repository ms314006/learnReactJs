import React from 'react';
import ReactDOM from 'react-dom';

//判斷溫度是否達沸點
class Title extends React.Component {
    render(){
        //單純判斷傳進來的溫度有沒有大於等於100
        return <h1>{(this.props.temperature>=100 ? '達到沸點!!!':'未到沸點...')}</h1>
    }
}

//輸入溫度的組件
class InputTemperature extends React.Component{
    /*因為將該組件需要用到的state(例如:state.temperature或state.changeState)都移到共同的父組件<EasyForm>
    所以這裡只需要render負責輸出組件內容*/
    render(){
        return(
            /*所有的資料都從父組件傳進來，所以使用props接收資料，包括function*/
            <div>
                <span>目前輸入溫度是：{this.props.temperature}度{this.props.type}</span><br/>
                <input name="temperature"
                        value={this.props.temperature} 
                        onChange={this.props.changeState} />度{this.props.type}
            </div>
        )
    }
}


class EasyForm extends React.Component {
    constructor(props) {
        super(props)
        //用state來記錄溫度數值和該數值是哪個溫度單位(攝氏或華氏)
        this.state = ({ temperature : 0,type : '' })
        //設定changeState是在此class下執行
        this.changeState = this.changeState.bind(this)
    }

    //轉換溫度單位
    toConvert(temperature,type){
        //如果type是C就帶公式將華氏轉攝氏，F就轉華氏
        if (type == 'C')
            return (temperature-32)*5/9
        else
            return (temperature*9/5)+32

    }

    //傳入type代表現在是哪種溫度變化
    changeState(type){
        //取得目前輸入的值
        let temperature = window.event.target.value
        //將目前溫度和溫度的單位寫進去state中
        this.setState({ 'temperature' : temperature,'type' : type })
    }

    render() {
        /*在render的時候，先去取state判斷目前儲存的溫度是攝氏還華氏
        華氏的話temperature_F就不用轉，攝氏的話換temperature_C不轉
        但是如果有不同就得傳進toConvert中做單位的轉換*/
        let temperature_C = this.state.type=='F' ? this.toConvert(this.state.temperature,'C') : this.state.temperature
        let temperature_F = this.state.type=='C' ? this.toConvert(this.state.temperature,'F') : this.state.temperature

        return(
            <div>
                {/*因為條件設定設是大於100度，所以傳入攝氏溫度*/}
                <Title temperature={temperature_C} />

                {/*同樣都是<InputTemperature />，
                但根據設置的props不同，就會有不同的結果*/}
                <InputTemperature type="C" 
                temperature={temperature_C} 
                /*設定事件changeState，
                所以在<InputTemperature />中就可以用props呼叫該事件*/
                changeState={this.changeState.bind(this,'C')} />

                <InputTemperature type="F" 
                temperature={temperature_F} 
                changeState={this.changeState.bind(this,'F')} />
            </div>
        )
    }
}


ReactDOM.render(<EasyForm  />, document.getElementById('root'))