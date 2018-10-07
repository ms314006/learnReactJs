import React from "react"
import ReactDOM from "react-dom"
import {Provider,connect} from "react-redux"
import store from "./index.js"


const mapStateToProps = state => {
    return {name : state.name,
            age : state.age,
            interest : state.interest,}
}

class ConnectAbout extends React.Component {
    render(){
        return <div>{this.props.name}</div>
    }
}

const About = connect(mapStateToProps)(ConnectAbout)

ReactDOM.render(<Provider store={store}>
                    <About />
                </Provider>
                ,document.getElementById('root'))
