import React from 'react';
import ReactDOM from 'react-dom';

class NowTime extends React.Component{
    constructor(props){
        super(props)
        this.state = {time : new Date().toLocaleTimeString()}
    }
    
    componentDidMount(){
        const upTime = () =>{
            this.setState({time : new Date().toLocaleTimeString()})
        }
        setInterval(upTime,1000)
    }
    
    componentWillUnmount(){
        console.log(`移除組件的時間為：${this.state.time}`)
    }
    
    render(){
        return <h1>現在時間是：{this.state.time}</h1>
    }
}

ReactDOM.render(<NowTime />,document.getElementById('root'))

//宣告一個function，來移除document.getElementById('root')中的組件
const removeComponent = () =>{
    ReactDOM.unmountComponentAtNode(document.getElementById('root'))
}

//延遲五秒後執行移除
setTimeout(removeComponent,5000)